describe('Cadastro de Curos', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com",  "123deoliveira4")
    cy.visit("/academics/course/create/")
  });

  it('Todos os campos válidos', () => {

    cy.registrarCursoDefault();
    cy.contains('p', 'O curso foi cadastrado com sucesso.').should('be.visible');
  })


  it('Inválido - Sem o campo de nome', () => {

    cy.get("select[id = 'id_period']").select("MORNING")
    cy.get("input[id = 'id_number_of_periods']").type("7")
    cy.get("select[id = 'id_duration_type']").select("SEMESTER")
    cy.get("select[id = 'id_course_type']").select("Curso Superior de Tecnologia")
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'Nome: Este campo é obrigatório.').should('be.visible');
  })


  it('Inválido - Sem a duração do curso', () => {

    cy.get("input[id = 'id_name']").type("Curso teste grupo 6")
    cy.get("select[id = 'id_period']").select("MORNING")
    cy.get("input[id = 'id_number_of_periods']").type("7")
    cy.get("select[id = 'id_course_type']").select("Curso Superior de Tecnologia")
    cy.get("button").contains("Salvar").click()
    cy.contains('p', 'Tipo de duração: Este campo é obrigatório.').should('be.visible');
  })

  it('Quantidade de tempo por duração - Semestral', () => {

    cy.get("select[id = 'id_duration_type']").select("SEMESTER")
    cy.get("input[id='id_number_of_periods']").should('have.value', 7);
  })

  it('Quantidade de tempo por duração - Anual', () => {

    cy.get("select[id = 'id_duration_type']").select("YEAR")
    cy.get("input[id='id_number_of_periods']").should('have.value', 4);
  })
  
})