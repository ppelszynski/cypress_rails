describe('First cypress test', function() {
  it('root path opens home page', function() {
    cy.visit('/')

    cy.contains("Home page")
  })
})

