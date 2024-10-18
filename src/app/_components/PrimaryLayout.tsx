"use client";
import NavBar from "./NavigationBar";
import SideBar from "./SideBar";
import { Flame, House, Users } from "lucide-react";
import { useState } from "react";

export default function PrimaryLayout() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex flex-col">
      <NavBar setopenMenu={toggleMenu} />
      <div>
        <SideBar
          sidebarItems={[
            {
              name: "Home",
              href: "/",
              symbol: House,
            },
            {
              name: "Popular",
              href: "/popular",
              symbol: Flame,
            },
            {
              name: "Players",
              href: "/players",
              symbol: Users,
            },
          ]}
        />
      </div>
    </div>
  );
}
