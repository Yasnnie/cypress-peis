describe('Excluir Docente', () => {
  beforeEach(() => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4")
    cy.visit('/people/teacher/list/')
  });

  it('Excluir Professor', () => {
      cy.get("input[id = 'id_name']").type("Professor Grupo 6 {enter}")
      cy.get("td span button")
      .first()
      .invoke("attr", "data-modal-id")
      .then((modalId) => {
        cy.log("O data-modal-id é:", modalId);

        cy.get(`button[data-modal-id='${modalId}']`).click();
        cy.get(`div[id='${modalId}'] button`).contains("Confirmar").click();
        cy.contains("p", "O professor foi excluído com sucesso.").should("be.visible")
      });

  })

  it('Excluir Professor associado a oferta.', () => {
      cy.get("input[id = 'id_name']").type("Professor Tester {enter}")
      cy.get("td span button")
      .first()
      .invoke("attr", "data-modal-id")
      .then((modalId) => {
        cy.log("O data-modal-id é:", modalId);

        cy.get(`button[data-modal-id='${modalId}']`).click();
        cy.get(`div[id='${modalId}'] button`).contains("Confirmar").click();
        cy.contains("p", "O professor não pode ser excluído pois está associado a alguma oferta.").should("be.visible")
      });

  })

})