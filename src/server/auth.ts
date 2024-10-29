import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import OsuProvider from "next-auth/providers/osu";
import { type OsuProfile } from "next-auth/providers/osu";
import SpotifyProvider from "next-auth/providers/spotify";
import { env } from "~/env";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      accessToken: string;
      // role: UserRole;
    } & DefaultSession["user"] &
      OsuProfile;
  }

  interface Profile {
    osu: OsuProfile;
  }
}

// TODO: Figure out how to handle refresh token
// [x]  Figure out where to store it
//    [x] Somewhere in server
//    [x] Figure out how to retrieve/edit it from where it's stored
// [ ]  Figure out how to update it when it expires
//    [ ] Add jwt token callback to NextAuth object
// [ ]  Figure out how to retrieve it
// [ ]  Figure out mechanism to get refresh token for public sessions

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          accessToken: token.accessToken,
        },
      };
    },
    // TODO: Add jwt callback
    jwt: async ({ token, account, profile }) => {
      if (account?.access_token) {
        token.accessToken = account.access_token; // <-- adding the access_token here
      } else {
        console.log("hmmm not really");
      }
      if (profile) {
        token.profile = profile;
      }
      return token;
    },
  },
  providers: [
    OsuProvider({
      clientId: env.OSU_CLIENT_ID,
      clientSecret: env.OSU_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "public identify",
        },
      },
    }),
    SpotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
