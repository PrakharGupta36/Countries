context("Clicks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("click", () => {
    for (let i = 0; i <= 249; i++) {
      cy.get(`#link${i}`).click({ multiple: true });
      cy.get("#button-details").click({ multiple: true });
    }
  });
});
