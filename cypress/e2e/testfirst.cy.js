/// <reference types="cypress" />

describe("Our First test suite", () => {
  it("visit url", () => {
    cy.visit("/");
    cy.contains(/forms/i).click(); // case insensitivity
    cy.contains("Form Layouts").click();
    cy.get("input");
    cy.get("#inputEmail1");
    cy.get('[id="inputEmail1"]');
    cy.get('input[id="inputEmail1"]');
  });

  it("Second test", () => {
    cy.visit("/");
    cy.contains(/forms/i).click(); // case insensitivity
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signin1"]');
    cy.contains('[status="warning"]', "Sign in");

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it.only("Second test", () => {
    cy.visit("/");
    cy.contains(/forms/i).click(); // case insensitivity
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "using the grid").find('[for="inputEmail1"]').should('contain','email')
  
  });
});
