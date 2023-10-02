/* eslint-disable no-useless-escape */
import * as yup from "yup"

export const addOrderSchema = yup
    .object({
        title: yup.string().required("firstName is required").min(3),
        phoneNumber: yup.string().required(" phoneNumber is required").min(3),
        //   products: yup.string().required("products is required").min(3),
        price: yup.string().required("price is required").min(3),
        paymentType: yup.string().required("paymentType is required").min(3),
        status: yup.string().required("status is required").min(3),
        selectedBy: yup.string().required("status is required").min(3),
        streetName: yup.string().required("status is required").min(3),
        houseNumber: yup.string().required("status is required").min(3),
        flatNumber: yup.string().required("status is required").min(3),
        city: yup.string().required("status is required").min(3),
        note: yup.string().required("status is required").min(3),
    })
    .required()
