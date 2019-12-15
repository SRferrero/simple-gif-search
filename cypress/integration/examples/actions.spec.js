/// <reference types="Cypress" />

context('Search gif', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('We can search any word and we will get results', () => {
    // https://on.cypress.io/type
    cy.get('.mat-input-element')
      .type('party')
      .should('have.value', 'party');

    cy.get('.mat-card')
      .should('be.visible')
  })
})
