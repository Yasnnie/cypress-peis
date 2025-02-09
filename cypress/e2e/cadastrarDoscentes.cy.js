import 'cypress-file-upload';

describe('Cadastrar Doscentes', () => {

  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4")
    cy.visit('/people/teacher/create/')
  })

  it('Todos os campos nulos', () => {
    cy.get("button").contains("Salvar").click()
    cy.get("input[id = 'id_name']")
    .then(($input) => {
      expect($input[0].validationMessage).to.exist;
    });
 
  })

  it('Todos os campos válidos', () => {
    cy.registrarProfessorDefault()
    cy.contains('p', 'O professor foi cadastrado com sucesso.').should('be.visible');
  })

  it('Inválido - Email já existente', () => {
    cy.get('input[id="photoAlt"]').selectFile('cypress/fixtures/image.png')
    cy.get("input[id = 'id_name']").type("Professor Grupo 6")
    cy.get("input[id = 'id_code']").type(Date.now())
    cy.get("select[id = 'id_campus']").select("Pau dos Ferros")
    cy.get("input[id = 'id_email']").type("grupo6@email.com")
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'E-mail: Professor com este E-mail já existe.').should('be.visible');
  })

  it('Inválido - Matrícula já existente', () => {
    cy.get('input[id="photoAlt"]').selectFile('cypress/fixtures/image.png')
    cy.get("input[id = 'id_name']").type("Professor Grupo 6")
    cy.get("input[id = 'id_code']").type("20221094040070")
    cy.get("select[id = 'id_campus']").select("Pau dos Ferros")
    cy.get("input[id = 'id_email']").type(`grupo6${Date.now()}@email.com`)
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'Matrícula: Professor com este Matrícula já existe.').should('be.visible');
  })


  it('Inválido - Doscente sem foto', () => {
    cy.get("input[id = 'id_name']").type("Professor Grupo 6")
    cy.get("input[id = 'id_code']").type(Date.now())
    cy.get("select[id = 'id_campus']").select("Pau dos Ferros")
    cy.get("input[id = 'id_email']").type(`grupo6${Date.now()}@email.com`)
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'Imagem: Este campo é obrigatório.').should('be.visible');
  })



})