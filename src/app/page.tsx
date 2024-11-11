import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { HydrateClient, api } from "~/trpc/server";
import "@/styles/globals.css";
import BeatmapCard from "./_components/BeatmapCard";

export default async function Home() {
  const session = await getServerAuthSession();
  let topbeatmaps = undefined;
  const publicBeatmaps = await api.osu.getBeatmaps();
  if (session) {
    topbeatmaps = await api.osu.getUserTopBeatmapsets();
  }
  return (
    <HydrateClient>
      <div className="flex h-full flex-col items-start justify-center text-wrap bg-[#4C3A4B] text-sky-200">
        {session ? (
          <div className="m-2 grid grid-cols-4 gap-4 text-wrap">
            {topbeatmaps.beatmapsets.map((beatmapset, index) => (
              <BeatmapCard
                key={index}
                artist={beatmapset.artist}
                title={beatmapset.title}
                beatmaps={beatmapset.beatmaps}
                cover={beatmapset.covers.cover}
                creator={beatmapset.creator}
              />
            ))}
          </div>
        ) : (
          <div className="m-2 grid grid-cols-4 gap-4 text-wrap">
            {publicBeatmaps.beatmapsets.map((beatmapset, index) => (
              <BeatmapCard
                key={index}
                artist={beatmapset.artist}
                title={beatmapset.title}
                beatmaps={beatmapset.beatmaps}
                cover={beatmapset.covers.cover}
                creator={beatmapset.creator}
              />
            ))}
          </div>
        )}
      </div>
    </HydrateClient>
  );
}
