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

  it("Second test", () => {
    cy.visit("/");
    cy.contains(/forms/i).click(); // case insensitivity
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "using the grid").find('[for="inputEmail1"]').should('contain','email')
  
  });

  it.only("invoke command ", () => {
    cy.visit("/");
    cy.contains(/forms/i).click(); // case insensitivity
    cy.contains("Form Layouts").click();

    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');
    // assertion

    //assertion in jquery style 
    cy.get('[for="exampleInputEmail1"]').then(label => {
      expect(label.text()).to.equal('Email address')

    })

    //wrap method 
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
      expect(text).to.equal('Email address')
    })

    cy.contains('nb-card','Basic form')
                  .find('nb-checkbox')
                  .click()
                  .find('.custom-checkbox')
                  .invoke('attr','class')
                  .should('contain', 'checked')


  });

  



});
