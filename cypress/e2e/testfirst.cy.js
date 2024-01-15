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

  it("invoke command ", () => {
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

  it.only("web tables", () => {
    cy.visit("/");
    cy.contains(/forms/i).click(); // case insensitivity
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click()

    cy.get('tbody').contains('tr','Larry').then(tableROw => {

      cy.wrap(tableROw).find('.nb-edit').click({ force:true })
      cy.wrap(tableROw).find('[placeholder="Age"]').clear().type('25')
      cy.wrap(tableROw).find('.nb-checkmark').click({ force:true })
      cy.wrap(tableROw).find('td').eq(6).should('contain', '25')

    })

  })

  



});
