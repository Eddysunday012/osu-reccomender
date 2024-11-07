import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { HydrateClient, api } from "~/trpc/server";
import "@/styles/globals.css";

export default async function Home() {
  const session = await getServerAuthSession();
  let topbeatmaps = undefined;
  const publicBeatmaps = await api.osu.getBeatmaps();
  if (session) {
    topbeatmaps = await api.osu.getUserTopBeatmapsets();
  }
  return (
    <HydrateClient>
      <div className="flex h-full w-full flex-col items-start justify-center bg-[#4C3A4B] text-white">
        {session ? (
          <>
            <div>{JSON.stringify(topbeatmaps)}</div>
          </>
        ) : (
          <div>{JSON.stringify(publicBeatmaps)}</div>
        )}
      </div>
    </HydrateClient>
  );
}
