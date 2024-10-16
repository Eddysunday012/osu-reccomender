import React from "react";
import NavBar from "./NavigationBar";
import "@/styles/globals.css";

describe("<NavBar />", () => {
  it("renders", () => {
    cy.mount(<NavBar openMenu={cy.stub().as("openMenu")} />);
  });

  it("Contains Login with osu!", () => {
    cy.mount(<NavBar openMenu={cy.stub().as("openMenu")} />);
    cy.contains("a[href='/api/auth/signin']", "Login with osu!");
  });

  it("Contains Search for beatmaps Input", () => {
    cy.mount(<NavBar openMenu={cy.stub().as("openMenu")} />);
    cy.get('input[placeholder="Search for beatmaps"]').should("exist");
    cy.get("#search").should("exist");
  });

  it("Should run search function when search button is clicked", () => {
    cy.mount(<NavBar openMenu={cy.stub().as("openMenu")} />);
    cy.get('input[placeholder="Search for beatmaps"]').type("test");
    cy.get("#search").invoke("removeAttr", "href").click();
  });

  it("Should have have a hamburger menu button", () => {
    cy.mount(<NavBar openMenu={cy.stub().as("openMenu")} />);
    cy.get("#openMenuButton").should("exist");
  });

  it("Should run openMenu function when hamburger menu button is clicked", () => {
    cy.mount(<NavBar openMenu={cy.stub().as("openMenu")} />);
    cy.get("#openMenuButton").click();
    cy.get("@openMenu").should("have.been.called");
  });
});

