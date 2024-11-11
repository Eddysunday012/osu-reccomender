"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import Image from "next/image";

interface sideBarObj {
  name: string;
  href: string;
  symbol: string;
}

interface SideBarProps {
  sidebarItems: sideBarObj[];
}

export default function SideBar({ sidebarItems }: SideBarProps) {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="min-h-full max-w-full flex-none flex-col gap-2 bg-[#3B2738] text-[#F472B6]">
      <div className="flex h-20 w-full items-center justify-start">
        <Button id="openMenuButton" variant="ghost" onClick={toggleMenu}>
          <Menu width={36} height={36} />
        </Button>
      </div>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                openMenu
                  ? "my-2 mr-10 flex w-full justify-start gap-2"
                  : "my-2 flex w-full justify-center gap-2",
              )}
            >
              <Image
                src={item.symbol}
                className="fill-[#F472B6]"
                width={36}
                height={36}
                alt={item.name}
              />
              {openMenu && item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
