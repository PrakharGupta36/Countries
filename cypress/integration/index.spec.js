context("Clicks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("click", () => {
    for (let i = 0; i <= 30; i++) {
      cy.get("#load").click({ multiple: true });
    }
  });
});
