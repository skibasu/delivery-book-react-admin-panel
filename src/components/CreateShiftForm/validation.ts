/* eslint-disable no-useless-escape */
import * as yup from "yup"

export const shiftSchema = yup
    .object({
        title: yup
            .string()
            .required("Title is required.")
            .min(5, "Title is to short.")
            .max(80, "Title is to long"),
    })
    .required()
