import { OrderStatus } from "@/features/orders/types"
import * as yup from "yup"
import {
    decimalNumberRegex,
    localNumberMobilePlRegex,
    nunberWithOptionalLetterOnTheEnd,
    otherNumbersRegex,
    phoneNumberMobilePlRegex,
} from "./regukar-expresions"

export const addOrderSchema = yup
    .object()
    .shape({
        title: yup
            .string()
            .required("First name is required")
            .min(3, "First name is to short.")
            .max(30, "First name is to long."),
        phoneNumber: yup
            .string()
            .required("Phone number is required")
            .matches(
                otherNumbersRegex,
                "Phone number shoul be in range 4-12 digits"
            ),
        // .matches(phoneNumberMobilePlRegex, "Is not valid phone number."),

        prefix: yup.string().required("Prefix is required"),
        price: yup
            .string()
            .required("Price is required")
            .matches(decimalNumberRegex, "Price should be a number"),
        paymentType: yup.string().required("Type of payment is required"),
        status: yup.string().required("Status is required."),
        selectedBy: yup.string().notRequired().default(""),
        streetName: yup
            .string()
            .required("Street name is required.")
            .min(3, "Street name is to short.")
            .max(30, "Street name is to long."),
        houseNumber: yup
            .string()
            .required("House number is required.")
            .matches(
                nunberWithOptionalLetterOnTheEnd,
                "House number doesn't look correct."
            ),

        flatNumber: yup
            .string()
            .required("Flat number is required.")
            .matches(
                nunberWithOptionalLetterOnTheEnd,
                "Flat number doesn't look correct."
            ),
        city: yup
            .string()
            .required("City is required")
            .min(2, "City is to short.")
            .max(9, "City is to long."),
        note: yup.string().max(500, "Note is to long."),
        products: yup
            .array()
            .required("Basket is empty. Add products in tio basket.")
            .min(1, "Basket is empty. Add products in tio basket."),
    })
    .when((values, schema) => {
        const { status, prefix } = values[0]
        if (prefix === "+48") {
            return schema.shape({
                phoneNumber: yup
                    .string()
                    .required("Phone number is required")
                    .test(
                        "isMobileOrLocal",
                        "Is not valid polish phone number",
                        (value) =>
                            phoneNumberMobilePlRegex.test(value) ||
                            localNumberMobilePlRegex.test(value)
                    ),
            })
        }
        if (status === OrderStatus.SELECTED) {
            return schema.shape({
                selectedBy: yup
                    .string()
                    .required("Driver is required for status SELECTED.")
                    .min(24, "Driver should be MongoID hex string.")
                    .max(24, "Driver should be MongoID hex string."),
            })
        } else {
            return schema
        }
    })
    .required()
