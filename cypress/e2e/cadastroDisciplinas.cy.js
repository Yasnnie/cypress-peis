describe('Cadastro de Disciplinas', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4")
    cy.visit("/academics/subjects/create/")
  });

  it('Todos os campos nulos', () => {
    cy.contains("button", "Salvar").click()
    cy.get("input[name = 'name']")
      .then(($input) => {
        expect($input[0].validationMessage).to.exist;
      });
  })

  it('Todos os campos válidos', () => {
    cy.get("input[name = 'name']").type("Informática Básica")
    cy.contains('div', 'Curso teste grupo 6').first()
      .find('label')
      .click();

    cy.get("label[for = 'Semestral']").click()

    cy.get("textarea[id = 'id_objective']").type("Objetivos")
    cy.get("textarea[id = 'id_content']").type("Conteúdo")
    cy.get("textarea[id = 'id_methodology']").type("Metodologias")
    cy.get("textarea[id = 'id_resources']").type("Recursos didáticos")
    cy.get("textarea[id = 'id_assessments']").type("Avaliações")

    cy.contains("button", "Salvar").click()
    cy.contains('p', 'Disciplina criada com sucesso!').should('be.visible');
  })


})