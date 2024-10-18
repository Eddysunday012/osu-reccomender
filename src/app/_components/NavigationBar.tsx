"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <nav className="navbar h-15 w-full bg-[#3B2738] p-5">
      <div className="flex flex-row items-center justify-between">
        <form className="m-1">
          <div className="flex flex-row gap-4">
            <Input
              className=""
              type="text"
              placeholder="Search for beatmaps"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button id="search" variant="outline" asChild>
              <Link href={`/search/${searchInput}`}>
                <Search className="stroke-[#F472B6]" />
              </Link>
            </Button>
          </div>
        </form>
        <Button variant="outline" asChild>
          <Link href="/api/auth/signin">Login with osu!</Link>
        </Button>
      </div>
    </nav>
  );
}
