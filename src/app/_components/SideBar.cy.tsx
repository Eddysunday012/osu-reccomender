import React from "react";
import SideBar from "./SideBar";
import "@/styles/globals.css";
import { House, Flame, Users } from "lucide-react";

describe("<SideBar />", () => {
  const sidebarItems = [
    {
      name: "Home",
      href: "/",
      symbol: "/HouseIcon.svg",
    },
    {
      name: "Popular",
      href: "/popular",
      symbol: "/FlameIcon.svg",
    },
    {
      name: "Players",
      href: "/players",
      symbol: "/UsersIcon.svg",
    },
  ];
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideBar sidebarItems={sidebarItems} />);
  });

  it("should have all 3 icons", () => {
    cy.mount(<SideBar sidebarItems={sidebarItems} />);
    sidebarItems.forEach((item) => {
      cy.contains("a", item.name).should("exist");
    });
  });

  it("Should have have a hamburger menu button", () => {
    cy.mount(<SideBar sidebarItems={sidebarItems} />);
    cy.get("#openMenuButton").should("exist");
  });

  it("Should run openMenu function when hamburger menu button is clicked", () => {
    cy.mount(<SideBar sidebarItems={sidebarItems} />);
    cy.get("#openMenuButton").click();
    sidebarItems.forEach((item) => {
      cy.contains("a", item.name).should("not.exist");
    });
  });
});

