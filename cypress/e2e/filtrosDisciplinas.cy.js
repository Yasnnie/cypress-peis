describe('Filtros disciplinas', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4")
    cy.visit("/academics/subjects/list/")
  });

  it('Filtrar por nome não existente', () => {
    cy.get("input[name='search']").type("inexistente {enter}")
    cy.contains("td", "Nenhuma disciplina encontrada.").should("be.visible")
  })

  it('Filtrar por nome  existente', () => {
    cy.get("input[name='search']").type("Informática Básica {enter}")
    cy.contains("td", "Informática Básica").should("be.visible")
  })

  it('Filtrar por curso', () => {
    cy.get("select[name='courses']").find('option')
    .contains("Curso teste grupo 6 - Matutino")
    .eq(0)
    .then(option => {
      cy.get("select[name='courses']").select(option.val());
    });
    cy.get("button").contains("Filtrar").click()
    cy.contains("td", "Curso teste grupo 6").should("be.visible")
  })

  it('Filtrar por duração', () => {
    cy.get("select[name='subject_type']").select('SEMESTER');
    cy.get("button").contains("Filtrar").click()
    cy.contains("td", "Semestral").should("be.visible")
  })

  
})