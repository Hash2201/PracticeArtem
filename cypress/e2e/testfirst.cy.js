/// <reference types="cypress"/>
describe('Our First test suite', () => {
  it('visit url', () => {

    cy.visit('/')
    cy.contains(/forms/i).click() // case insensitivity
    cy.contains('Form Layouts').click()
    cy.get('input')
    cy.get('#inputEmail1')
    cy.get('[id="inputEmail1"]')
    cy.get('input[id="inputEmail1"]')




  })
})