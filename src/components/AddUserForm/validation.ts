/* eslint-disable no-useless-escape */
import * as yup from "yup"

export const driverSchema = yup
    .object({
        selectedBy: yup
            .string()
            .min(24, "Driver should be MongoID hex string.")
            .max(24, "Driver should be MongoID hex string.")
            .default(""),
    })
    .required()
