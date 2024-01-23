/* eslint-disable no-useless-escape */
import * as yup from "yup"

export const shiftHistorySchema = yup
    .object({
        shiftId: yup
            .string()
            .required("Shift ID is required.")
            .min(24, "Shift ID should be MongoID hex string.")
            .max(24, "Shift ID should be MongoID hex string."),
    })
    .required()
