// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.getByID('greeting')
         */
        getByID(value: string): Chainable<any>

        clearFields(value: string[]): Chainable<void>
        loginSuccess(): Chainable<void>
        loginFailed(): Chainable<void>
        loginNotAvailable(): Chainable<void>
        logout(): Chainable<void>
    }
}
