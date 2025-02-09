describe('PEIs', () => {

  it('Visualizar PEI - Professor', () => {
    cy.login("tester_professor@gmail.com", "123deoliveira4")
    cy.get("td span a").first().click();
    cy.contains("p", "Detalhes do PEI").should("be.visible")

  })

  it('Editar - Professor', () => {
    cy.login("tester_professor@gmail.com", "123deoliveira4")
    cy.get("td span a").eq(1).click();

    cy.get("textarea[id = 'id_adapted_objective']").type("Objetivos Adptados")
    cy.get("textarea[id = 'id_adapted_content']").type("Conteúdos Adaptados")
    cy.get("textarea[id = 'id_adapted_methodology']").type("Metodologias adaptadas")
    cy.get("textarea[id = 'id_adapted_resources']").type("Recursos didáticos adaptados")
    cy.get("textarea[id = 'id_adapted_assessments']").type("Avaliações Adaptadas")
    cy.get("button").contains("Salvar").click()
    cy.contains("p", "O PEI foi atualizado com sucesso.").should("be.visible")

  })

  it('Adicionar Parecer - Professor', () => {
    cy.login("tester_professor@gmail.com", "123deoliveira4")
    cy.get("select[name='status']").select("Preenchido")
    cy.get("button").contains("Filtrar").click()
    cy.get("td span a").eq(1).click();
    cy.get("li[id='tab-parecer']").click()

    cy.get("textarea[id='id_academic_opinion_1']").type("Primeiro Parecer")
    cy.get("button").contains("Salvar").click({force: true})

    cy.contains("p","O PEI foi atualizado com sucesso.").should("be.visible")

  })

  it('Comentar PEI - Coordenador', () => {
    const date = Date.now()
    cy.login("tester_coordinator@gmail.com", "123deoliveira4");
    cy.get("input[name='search']").type('Aluno Teste 6 {enter}')
    cy.get("td span a").first().click();
    cy.get("textarea[name='text'][placeholder='Escreva um comentário aqui!']")
    .type(`Comentário teste ${date}`);
    cy.get("button").contains("Enviar comentário").click()
    cy.get("pre").contains(`Comentário teste ${date}`).should("be.visible")
  })

  it('Gerar PEI', () => {
    cy.login("tester_coordinator@gmail.com", "123deoliveira4");
    cy.registrarAlunoDefault()
    cy.visit('/academics/offers/list/')
    cy.get("tr")
    .contains("Curso teste grupo 6")
    .parent("tr")
    .find('a') 
    .first() 
    .click();

    cy.get("input[id = 'studentSearch']").type("Aluno Teste 6")

    cy.contains("div","Aluno Teste 6").first().find("label").click()
    cy.contains("button", "Incluir").click()
    cy.visit("/")
    cy.get("input[name='search']").type('Aluno Teste 6 {enter}')
    cy.get("td").contains("Aluno Teste 6").should("be.visible")

  })


})