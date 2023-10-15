import { OrderStatus } from "@/features/orders/types"
import * as yup from "yup"

export const addOrderSchema = yup
    .object()
    .shape({
        title: yup
            .string()
            .required("First name is required")
            .min(3, "First name is to short."),
        phoneNumber: yup
            .string()
            .required("Phone number is required")
            .min(3, "Phone number is to short."),
        price: yup.string().required("Price is required"),
        paymentType: yup.string().required("Type of payment is required"),
        status: yup.string().required("Status is required."),
        selectedBy: yup.string().notRequired().default(""),
        streetName: yup
            .string()
            .required("Street name is required.")
            .min(3, "Street name is to short."),
        houseNumber: yup.string().required("House number is required.").min(1),
        flatNumber: yup.string().required("Flat number is required.").min(1),
        city: yup
            .string()
            .required("City is required")
            .min(3, "City is to short."),
        note: yup.string(),
        products: yup
            .array()
            .required("Basket is empty. Add products in tio basket.")
            .min(1, "Basket is empty. Add products in tio basket."),
    })
    .when((values, schema) => {
        const { status } = values[0]
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
