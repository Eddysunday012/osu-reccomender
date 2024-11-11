import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import axios, { type AxiosResponse } from "axios";

export interface beatmap {
  id: number;
  title: string;
  artist: string;
  creator: string;
  url: string;
  difficulty: number;
}

export const osuRouter = createTRPCRouter({
  authenticatePublicUser: publicProcedure
    .input(z.object({ test: z.string() }))
    .query(({ input }) => {
      console.log(input.test);
    }),
  getBeatmaps: publicProcedure.query(async ({ ctx }) => {
    const osuApiUrl = `https://osu.ppy.sh/api/v2/beatmapsets/search`;
    const response = await axios
      .get<beatmap[]>(osuApiUrl, {
        headers: {
          Authorization: `Bearer ${ctx.publicSession.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        const beatmap: beatmap[] = response.data;
        return beatmap;
      })
      .catch((reason) => {
        console.log(reason);
      });
    return response;
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
      const response = await axios
        .get<beatmap>(osuApiUrl, {
          headers: {
            Authorization: `Bearer ${ctx.session.user.accessToken}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          const beatmap: beatmap = response.data;
          return beatmap;
        })
        .catch((reason) => {
          console.log(reason);
        });
      return response;
    }),
  getUserTopBeatmapsets: protectedProcedure.query(async ({ ctx }) => {
    const osuApiUrl = `https://osu.ppy.sh/api/v2/beatmapsets/search`;
    const response = await axios
      .get<beatmap>(osuApiUrl, {
        headers: {
          Authorization: `Bearer ${ctx.session.user.accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        const beatmap: beatmap = response.data;
        return beatmap;
      })
      .catch((reason) => {
        console.log(reason);
      });
    return response;
  }),
});
