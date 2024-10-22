import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { getServerAuthSession } from "~/server/auth";

export default async function NavBar() {
  const session = await getServerAuthSession();

  return (
    <nav className="navbar h-15 w-full bg-[#3B2738] p-5">
      <div className="flex flex-row items-center justify-between">
        <SearchBar />
        {session ? (
          <div>
            <Link href="/api/auth/signout">
              <Avatar>
                <AvatarImage src={session.user?.image ?? undefined} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        ) : (
          <Button variant="outline" id="search" asChild>
            <Link href="/api/auth/signin">Login with osu!</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
