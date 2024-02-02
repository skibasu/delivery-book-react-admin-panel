// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />

// load https://github.com/NoriSte/cypress-wait-until
// which adds "cy.waitUntil" command
// note that this 3rd party module includes TypeScript "types"
// file that correctly adds "waitUntil" to the Cypress Chainer namespace
require("cypress-wait-until")

Cypress.Commands.add("loginSuccess", () => {
    cy.intercept("POST", "http://localhost:3000/auth/signin").as("loginApiCall")

    cy.getByID("login-form-submit").as("submit").click()

    cy.getByID("login-form-spinner").should("be.visible")
    cy.get("@submit").should("be.disabled")
    cy.wait("@loginApiCall").its("response.statusCode").should("eq", 200)

    cy.location("pathname").should("eq", "/")
})

Cypress.Commands.add("loginFailed", () => {
    cy.intercept("POST", "http://localhost:3000/auth/signin").as("loginApiCall")

    cy.getByID("login-form-submit").as("submit").click()

    cy.getByID("login-form-spinner").should("be.visible")
    cy.get("@submit").should("be.disabled")
    cy.wait("@loginApiCall").its("response.statusCode").should("eq", 401)

    cy.getByID("login-form-error").should("be.visible")
    cy.location("pathname").should("eq", "/login")
})

Cypress.Commands.add("loginNotAvailable", () => {
    cy.getByID("login-form-submit").click()

    cy.getByID("login-form-spinner").should("not.exist")
    cy.getByID("login-form-error").should("not.exist")
    cy.location("pathname").should("eq", "/login")
})
Cypress.Commands.add("logOut", () => {
    cy.intercept("POST", "http://localhost:3000/auth/logout").as(
        "logoutApiCall"
    )

    cy.getByID("logout").click()
    cy.wait("@logoutApiCall").its("response.statusCode").should("eq", 200)
    cy.location("pathname").should("eq", "/login")
})
Cypress.Commands.add("getByID", (id: string) => {
    return cy.get(`[data-cy="${id}"]`)
})

Cypress.Commands.add("clearFields", (fields: string[]) => {
    fields.forEach((field) => {
        cy.getByID(field).clear()
    })
})
