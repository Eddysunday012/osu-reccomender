import React from "react";
import NavBar from "./NavigationBar";
import "@/styles/globals.css";

describe("<NavBar />", () => {
  it("renders", () => {
    cy.mount(<NavBar />);
  });

  it("Contains Login with osu!", () => {
    cy.mount(<NavBar />);
    cy.contains("a[href='/api/auth/signin']", "Login with osu!");
  });

  it("Contains Search for beatmaps Input", () => {
    cy.mount(<NavBar />);
    cy.get('input[placeholder="Search for beatmaps"]').should("exist");
    cy.get("#search").should("exist");
  });

  it("Should run search function when search button is clicked", () => {
    cy.mount(<NavBar />);
    cy.get('input[placeholder="Search for beatmaps"]').type("test");
    cy.get("#search").invoke("removeAttr", "href").click();
  });
});
