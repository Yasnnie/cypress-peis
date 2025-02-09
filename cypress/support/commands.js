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