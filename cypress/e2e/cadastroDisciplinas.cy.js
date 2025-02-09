describe('Cadastro de Disciplinas', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4");

  })

  it('Inválido - Todos os campos nulos', () => {
    cy.visit("/academics/subjects/create/");
    cy.contains("button", "Salvar").click()
    cy.get("input[name = 'name']")
      .then(($input) => {
        expect($input[0].validationMessage).to.exist;
      });
  })

  it('Todos os campos válidos', () => {
    cy.registrarCursoDefault()
    cy.registrarDisciplinaDefault()
    cy.contains('p', 'Disciplina criada com sucesso!').should('be.visible');
  })


})