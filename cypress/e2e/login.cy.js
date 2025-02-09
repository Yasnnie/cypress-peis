describe('Login', () => {
  it('Login Professor', () => {
    cy.login("tester_professor@gmail.com", "123deoliveira4")
    cy.url().should("contain", "/")

  })

  it('Login Coordenador', () => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4")
    cy.url().should("contain", "/")
  })

})