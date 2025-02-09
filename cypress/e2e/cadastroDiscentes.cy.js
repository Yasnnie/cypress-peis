describe('Cadastro de Discente', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4");
    cy.visit('/people/student/create/')
  });

  it('Todos os campos válidos', () => {
    cy.get('input[id="id_image"]').selectFile('cypress/fixtures/image.png')
    cy.get('input[id="id_name"]').type("Aluno Teste 6")
    cy.get("input[id = 'id_email']").type(`grupo6${Date.now()}@email.com`)
    cy.get("input[id = 'id_registration']").type(Date.now())
    cy.registrarDiscentesInformacoesGerais()
    cy.get("button").contains("Salvar").click()

    cy.contains("p", "estudante Aluno Teste 6 cadastrado com sucesso").should("be.visible")
  })



  it('Inválido - Email já existente', () => {
    cy.get('input[id="id_image"]').selectFile('cypress/fixtures/image.png')
    cy.get('input[id="id_name"]').type("Aluno Teste 6")
    cy.get("input[id = 'id_email']").type(`grupo61739138664963@email.com`)
    cy.get("input[id = 'id_registration']").type(Date.now())

    cy.registrarDiscentesInformacoesGerais()
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'E-mail: Aluno com este E-mail já existe.').should('be.visible');
  })

  it('Inválido - Matrícula já existente', () => {
    cy.get('input[id="id_image"]').selectFile('cypress/fixtures/image.png')
    cy.get('input[id="id_name"]').type("Aluno Teste 6")
    cy.get("input[id = 'id_email']").type(`grupo6${Date.now()}@email.com`)
    cy.get("input[id = 'id_registration']").type("1739138664963")

    cy.registrarDiscentesInformacoesGerais()
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'Matrícula: Aluno com este Matrícula já existe.').should('be.visible');
  })

})