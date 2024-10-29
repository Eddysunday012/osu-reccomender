import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import axios, { type AxiosResponse } from "axios";

export type beatmap = {
  id: number;
  title: string;
  artist: string;
  creator: string;
  url: string;
  difficulty: number;
};

const parseResponse = (response: AxiosResponse) => {
  return response;
};

export const osuRouter = createTRPCRouter({
  authenticatePublicUser: publicProcedure
    .input(z.object({ test: z.string() }))
    .query(({ input }) => {
      console.log(input.test);
    }),
  getBeatmaps: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // const oauthUrl = "https://osu.ppy.sh/oauth/token";
      // const osuApiUrl = `https://osu.ppy.sh/api/v2/beatmaps/${input.id}`;
      // try {
      //   const response = await axios.get(osuApiUrl, {
      //     headers: {
      //       Authorization: `Bearer ${process.env.OSU_CLIENT_SECRET}`,
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //   });
      //   console.log(response);
      //   return response;
      // } catch (e) {
      //   console.log("There was an error");
      //   return null;
      // }
      console.log(input.id);
    }),
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getUserBeatmaps: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const osuApiUrl = `https://osu.ppy.sh/api/v2/beatmaps/${input.id}`;
      try {
        const response: AxiosResponse = await axios.get(osuApiUrl, {
          headers: {
            Authorization: `Bearer ${ctx.session.user.accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        return Object.getOwnPropertyNames(response.data);
      } catch (error) {
        console.error(error);
        return null;
      }
    }),
  getUserBeatmapsets: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const osuApiUrl = `https://osu.ppy.sh/api/v2/beatmapsets/${input.id}`;
      try {
        const response: AxiosResponse = await axios.get(osuApiUrl, {
          headers: {
            Authorization: `Bearer ${ctx.session.user.accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }),
});
