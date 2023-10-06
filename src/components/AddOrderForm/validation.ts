import { OrderStatus } from "@/features/orders/types"
import * as yup from "yup"

export const addOrderSchema = yup
    .object()
    .shape({
        title: yup.string().required("firstName is required").min(3),
        phoneNumber: yup.string().required(" phoneNumber is required").min(3),
        //   products: yup.string().required("products is required").min(3),
        price: yup.string().required("price is required").min(3),
        paymentType: yup.string().required("paymentType is required").min(3),
        status: yup.string().required("status is required").min(3),
        selectedBy: yup.string().notRequired().default(""),
        streetName: yup.string().required("status is required").min(3),
        houseNumber: yup.string().required("status is required").min(3),
        flatNumber: yup.string().required("status is required").min(3),
        city: yup.string().required("status is required").min(3),
        note: yup.string().required("status is required").min(3),
    })
    .when((values, schema) => {
        const { status } = values[0]
        if (status === OrderStatus.SELECTED) {
            return schema.shape({
                selectedBy: yup.string().required().min(24).max(24),
            })
        } else {
            return schema
        }
    })
    .required()

//  {
//      title: yup.string().required("firstName is required").min(3),
//      phoneNumber: yup.string().required(" phoneNumber is required").min(3),
//      //   products: yup.string().required("products is required").min(3),
//      price: yup.string().required("price is required").min(3),
//      paymentType: yup.string().required("paymentType is required").min(3),
//      status: yup.string().required("status is required").min(3),
//      selectedBy: yup.string().notRequired(),
//      streetName: yup.string().required("status is required").min(3),
//      houseNumber: yup.string().required("status is required").min(3),
//      flatNumber: yup.string().required("status is required").min(3),
//      city: yup.string().required("status is required").min(3),
//      note: yup.string().required("status is required").min(3),
//  }
