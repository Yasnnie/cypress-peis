describe('Doscentes', () => {

  beforeEach(()=>{
    cy.login("tester_coordinator@gmail.com",  "123deoliveira4")
  })

  it('Filtros', () => {
    cy.visit('/people/teacher/list/')
  })

  it('Cadastrar Professor', () => {
    cy.visit('/people/teacher/create/')
    cy.get("input[id = 'id_name']").type("grupo")
  })
})