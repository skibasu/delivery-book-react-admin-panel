/* eslint-disable no-useless-escape */
import * as yup from "yup"

export const authSchema = yup
    .object({
        email: yup
            .string()
            .required("Email is required")
            .matches(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                "Email is invalid"
            ),
        password: yup.string().required("Password is required"),
    })
    .required()
