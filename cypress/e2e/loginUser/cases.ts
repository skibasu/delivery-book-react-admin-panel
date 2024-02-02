import { IData } from "./types"

export const cases: IData[] = [
    {
        email: "admin@admin.com",
        password: "Admin1!_",
        title: "Should log in",
        helpers: {
            labelEmailClass: ["not.have.class", "!text-hellFire"],
            inputEmailClass: ["not.have.class", "!border-hellFire"],
            labelPasswordClass: ["not.have.class", "!text-hellFire"],
            inputPasswordClass: ["not.have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
            logged: true,
        },
    }, //Poprawne dane

    {
        email: "admin@admin.com",
        password: "",
        title: "Should have validations password error",

        helpers: {
            labelEmailClass: ["not.have.class", "!text-hellFire"],
            inputEmailClass: ["not.have.class", "!border-hellFire"],
            labelPasswordClass: ["have.class", "!text-hellFire"],
            inputPasswordClass: ["have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
        },
    }, //Brak  hasla
    {
        email: "",
        password: "Admin1!_",
        title: "Should have validations login required error",
        helpers: {
            labelEmailClass: ["have.class", "!text-hellFire"],
            inputEmailClass: ["have.class", "!border-hellFire"],
            labelPasswordClass: ["not.have.class", "!text-hellFire"],
            inputPasswordClass: ["not.have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
        },
    }, //Brak loginu

    {
        email: "a_new@admi.com",
        password: "Admin1!_",
        title: "Should have 401 invalid credentials error",
        helpers: {
            labelEmailClass: ["not.have.class", "!text-hellFire"],
            inputEmailClass: ["not.have.class", "!border-hellFire"],
            labelPasswordClass: ["not.have.class", "!text-hellFire"],
            inputPasswordClass: ["not.have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
            logged: false,
        },
    }, //Bledny login - Bad Credentials
    {
        email: "a_new@admin.com",
        password: "Adm1239&^_",
        title: "Should have 401 invalid credentials error",
        helpers: {
            labelEmailClass: ["not.have.class", "!text-hellFire"],
            inputEmailClass: ["not.have.class", "!border-hellFire"],
            labelPasswordClass: ["not.have.class", "!text-hellFire"],
            inputPasswordClass: ["not.have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
            logged: false,
        },
    }, //Bledne hasło - Bad Credentials

    {
        email: "xxx@sss",
        password: "77yhgfff!!!",
        title: "Should have validations login format error",
        helpers: {
            labelEmailClass: ["have.class", "!text-hellFire"],
            inputEmailClass: ["have.class", "!border-hellFire"],
            labelPasswordClass: ["not.have.class", "!text-hellFire"],
            inputPasswordClass: ["not.have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
        },
    }, //Zly format loginu
    {
        email: "",
        password: "",
        title: "Should have validations login and email required errors",
        helpers: {
            labelEmailClass: ["have.class", "!text-hellFire"],
            inputEmailClass: ["have.class", "!border-hellFire"],
            labelPasswordClass: ["have.class", "!text-hellFire"],
            inputPasswordClass: ["have.class", "!border-hellFire"],
            isSubmitDisabled: "not.be.disabled",
        },
    }, //Brak hasla i loginu
]
