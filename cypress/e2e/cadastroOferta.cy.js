describe('Cadastro de Oferta', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4");
    cy.registrarCursoDefault()
    cy.registrarDisciplinaDefault()
    cy.registrarProfessorDefault()
    cy.visit('/academics/offers/create/')
  });

  it('Todos os campos válidos', () => {
    cy.get("select[id='id_course']")
      .find('option')
      .contains("Curso teste grupo 6 - Matutino")
      .eq(0)
      .then(option => {
        cy.get("select[id='id_course']").select(option.val());
      });
    cy.get("select[id = 'id_subject']").find('option')
      .contains("Informática Básica")
      .eq(0)
      .then(option => {
        cy.get("select[id='id_subject']").select(option.val());
      });
    cy.get("div").contains("Professor Grupo 6").first().find("label").click()
    cy.get("select[id = 'id_status']").select("Aberta")
    cy.get("input[id = 'id_year']").type(2025)
    cy.get("select[id = 'id_semester']").select("1")
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'Oferta criada com sucesso!').should('be.visible');
   

  })
})