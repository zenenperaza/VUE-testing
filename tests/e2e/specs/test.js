// https://docs.cypress.io/api/table-of-contents

describe('Counter Feature', () => {
  it('User can Acces to page', () => {
    cy.visit('/')
    cy.contains('h1', 'Counter App')
  })
  it('User can increment counter', () => {
    cy.visit('/')
    cy.get('#counter-info').contains('0')
    cy.contains('button', 'Incrementar').click()
    cy.get('#counter-info').contains('1')
  })




})

