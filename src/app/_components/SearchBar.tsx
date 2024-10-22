"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  return (
    <form className="m-1">
      <div className="flex flex-row gap-4">
        <Input
          className=""
          type="text"
          placeholder="Search for beatmaps"
          value={search ? search : searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button id="search" variant="outline" asChild>
          <Link href={`?search=${searchInput}`}>
            <Search className="stroke-[#F472B6]" />
          </Link>
        </Button>
      </div>
    </form>
  );
}
