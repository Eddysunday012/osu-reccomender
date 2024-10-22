import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import "@/styles/globals.css";

export default async function Popular() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#4C3A4B] text-white">
        <div>HELLO WORLD</div>
      </div>
    </HydrateClient>
  );
}
