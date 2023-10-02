import { OrderAdress } from "@/features/orders/types"

// export type TAddOrderForm = Omit<
//     Order,
//     | "_id"
//     | "addedBy"
//     | "createdAt"
//     | "actions"
//     | "adress"
//     | "selectedBy"
//     | "products"
// >
export interface IAddOrderForm extends OrderAdress {
    title: string
    phoneNumber: string
    price: string
    paymentType: string
    status: string
    selectedBy: string
}
