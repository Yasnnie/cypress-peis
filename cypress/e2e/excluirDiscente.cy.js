describe('Excluir Discente', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4")
    cy.visit('/people/student/list/')
  });

  it('Excluir Aluno Associado a uma oferta', () => {
      cy.get("input[name = 'search']").type("Aluno Teste 6 {enter}")
      cy.get("td span button")
      .first()
      .invoke("attr", "data-modal-id")
      .then((modalId) => {
        cy.log("O data-modal-id é:", modalId);

        cy.get(`button[data-modal-id='${modalId}']`).click();
        cy.get(`div[id='${modalId}'] button`).contains("Confirmar").click();
        cy.contains("p", "Não é possível excluir o aluno, pois ele possui ofertas associadas.").should("be.visible")
      });
    

  })

  it('Excluir Aluno', () => {
    cy.registrarAlunoDefault().then((matricula) => {
      cy.visit('/people/student/list/')
      cy.get("input[name='search']").type(`${matricula} {enter}`)
  
      cy.get("td span button")
        .first()
        .invoke("attr", "data-modal-id")
        .then((modalId) => {
          cy.log("O data-modal-id é:", modalId);
  
          cy.get(`button[data-modal-id='${modalId}']`).click();
          cy.get(`div[id='${modalId}'] button`).contains("Confirmar").click();
          cy.contains("p", "O aluno foi excluído com sucesso.").should("be.visible");
        });
    });
  });
  
})