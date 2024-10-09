import React from "react";
import NavBar from "./NavigationBar";
import "@/styles/globals.css";

describe("<NavBar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavBar />);
  });

  it("contains login & connect osu account buttons", () => {
    cy.mount(<NavBar />);
    cy.contains("button", "Login");
    cy.contains("button", "Connect osu! Account");
  });
});

