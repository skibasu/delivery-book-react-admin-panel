import { cases as CASES } from "./cases"

describe("Login Form", () => {
    beforeEach(() => {
        //Visit page
        cy.visit("/")
        //Clear the Form
        cy.clearFields(["login-form-email", "login-form-password"])
    })
    it("Should have Login Form", () => {
        cy.getByID("login-form").should("have.length", 1).should("be.visible")
    })

    CASES.forEach(
        ({
            email,
            password,
            title,
            helpers: {
                labelEmailClass,
                labelPasswordClass,
                inputEmailClass,
                inputPasswordClass,
                isSubmitDisabled,
                logged,
            },
        }) => {
            it(title, () => {
                //Fill Email Input with text
                email && cy.getByID("login-form-email").focus().type(email)
                //Fill Password Input wit text
                password
                    ? cy.getByID("login-form-password").focus().type(password)
                    : cy.getByID("login-form-password").focus()

                //Check if Button Element has correct disabled attribute
                cy.getByID("login-form-submit").focus().should(isSubmitDisabled)

                //Check if validation error exist or not on the Email Label Element
                cy.getByID("login-form-email-parrent")
                    .find("label")
                    .should(labelEmailClass[0], labelEmailClass[1])

                //Check if validation error exist or not on the Email Input Element
                cy.getByID("login-form-email").should(
                    inputEmailClass[0],
                    inputEmailClass[1]
                )

                //Check if validation error exist or not on the Password Label Element
                cy.getByID("login-form-password-parrent")
                    .find("label")
                    .should(labelPasswordClass[0], labelPasswordClass[1])

                //Check if validation error exist or not on the Password Input Element
                cy.getByID("login-form-password").should(
                    inputPasswordClass[0],
                    inputPasswordClass[1]
                )
                //Click Log In
                if (logged) {
                    cy.loginSuccess()
                    cy.logOut()
                } else if (logged === false) {
                    cy.loginFailed()
                } else {
                    cy.loginNotAvailable()
                }
            })
        }
    )
})
