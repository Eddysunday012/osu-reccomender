describe("Testing login and authentication", () => {
  it("should login with osu!", () => {
    cy.intercept("POST", "http://localhost:3000/api/auth/signin/osu", {
      fixture: "session.json",
    });
    cy.visit("http://localhost:3000");
    cy.get('a[href="/api/auth/signin"]').click();
    cy.get("button").contains("Sign in with Osu!").click();
  });
});
