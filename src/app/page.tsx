import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { HydrateClient, api } from "~/trpc/server";
import "@/styles/globals.css";

export default async function Home() {
  const session = await getServerAuthSession();
  let beatmap = undefined;
  if (session) {
    beatmap = await api.osu.getUserBeatmaps({ id: "4637488" });
  }
  return (
    <HydrateClient>
      <div className="flex h-full w-full flex-col items-start justify-center bg-[#4C3A4B] text-white">
        {session ? (
          <div>{JSON.stringify(beatmap)}</div>
        ) : (
          <div>Nothing here yet</div>
        )}
      </div>
    </HydrateClient>
  );
}
