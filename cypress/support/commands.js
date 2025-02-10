// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';



Cypress.Commands.add("login", (email, password) => {
    cy.visit("/accounts/login/")
    cy.get("input[id = 'id_login']").type(email)
    cy.get("input[id = 'id_password']").type(password)
    cy.get("button").contains("Entrar").click()
   
})

Cypress.Commands.add("registrarCursoDefault", () => {
    cy.visit("/academics/course/create/")
    cy.get("input[id = 'id_name']").type("Curso teste grupo 6")
    cy.get("select[id = 'id_period']").select("MORNING")
    cy.get("input[id = 'id_number_of_periods']").type("7")
    cy.get("select[id = 'id_duration_type']").select("SEMESTER")
    cy.get("select[id = 'id_course_type']").select("Curso Superior de Tecnologia")
    cy.get("button").contains("Salvar").click()
})

Cypress.Commands.add("registrarDisciplinaDefault", () => {
    cy.visit("/academics/subjects/create/");
    
    
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
})

Cypress.Commands.add("registrarProfessorDefault", () => {
    cy.visit('/people/teacher/create/')
    cy.get('input[id="photoAlt"]').selectFile('cypress/fixtures/image.png')
    cy.get("input[id = 'id_name']").type("Professor Grupo 6")
    cy.get("input[id = 'id_code']").type(Date.now())
    cy.get("select[id = 'id_campus']").select("Pau dos Ferros")
    cy.get("input[id = 'id_email']").type(`grupo6${Date.now()}@email.com`)
    cy.get("button").contains("Salvar").click()
})

Cypress.Commands.add("registrarAlunoDefault", () => {
    const matricula = Date.now()
    cy.visit('/people/student/create/')
    cy.get('input[id="id_image"]').selectFile('cypress/fixtures/image.png')
    cy.get('input[id="id_name"]').type("Aluno Teste 6")
    cy.get("input[id = 'id_email']").type(`grupo6${Date.now()}@email.com`)
    cy.get("input[id = 'id_registration']").type(matricula)
    cy.registrarDiscentesInformacoesGerais()
    cy.get("button").contains("Salvar").click()

    return cy.wrap(matricula)
})


Cypress.Commands.add("registrarDiscentesInformacoesGerais", () => {
    cy.get("select[id='id_course']")
    .find('option')
    .contains("Curso teste grupo 6 - Matutino")
    .eq(0)
    .then(option => {
      cy.get("select[id='id_course']").select(option.val());
    });
    cy.get("input[id = 'id_reference_period']").type(1)
    cy.get("label[for = 'sector_NAPNE']").click()
    cy.get("div").contains("Deficiência Visual - Baixa Visão").find("label").click()
    cy.get("textarea[id = 'id_personal_history']").type("História")
    cy.get("textarea[id = 'id_specific_necessities']").type("Necessidades Especificas")
    cy.get("textarea[id = 'id_abilities']").type("Aptidão Apresentadas")
    cy.get("textarea[id = 'id_dificulties']").type("Dificuldades Apresentadas")
    cy.get("textarea[id = 'id_general_necessitie']").type("Outras necessidades educacionais especificas do(a) estudante")
    cy.get("textarea[id = 'id_creation_reasons']").type("Questões Geradoras para criação do pei/Adaptações")
})