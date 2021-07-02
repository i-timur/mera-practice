// init_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('index.html', () => {
  it('to be loaded', () => {
    cy.request('http://localhost:5000/')
      .then(response => {
        expect(response.status).to.be.equal(200)
      })

  })
})