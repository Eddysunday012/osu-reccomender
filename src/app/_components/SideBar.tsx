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
    <div className="flex h-screen flex-col bg-[#3B2738]">
      <div className="flex h-20 w-full items-center justify-start gap-2">
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
                "my-1 mr-10 flex w-full justify-start gap-2",
              )}
            >
              <Image src={item.symbol} width={36} height={36} alt={item.name} />
              {openMenu && item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
