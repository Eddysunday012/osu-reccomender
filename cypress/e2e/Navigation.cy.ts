describe("Testing main navigation of the page", () => {
  it("should just render home page when visiting the site", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[placeholder="Search for beatmaps"]').should("exist");
    cy.get("#search").should("exist");
  });

  it("should renavigate to Home when clicking on Home", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should renavigate to Popular when clicking on Home", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/popular"]').click();
    cy.url().should("eq", "http://localhost:3000/popular");
  });

  it("should renavigate to Players when clicking on Home", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/players"]').click();
    cy.url().should("eq", "http://localhost:3000/players");
  });

  it("should search with proper search params", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[placeholder="Search for beatmaps"]').type("test");
    cy.get("#search").click();
    cy.url().should("eq", "http://localhost:3000/?search=test");
  });

  it("should navigate to search from url", () => {
    cy.visit("http://localhost:3000/?search=test");
    cy.get("input").should("have.value", "test");
  });
});
