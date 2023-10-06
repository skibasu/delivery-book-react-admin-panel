import { OrderAdress } from "@/features/orders/types"

export interface IAddOrderForm extends OrderAdress {
    title: string
    phoneNumber: string
    price: string
    paymentType: string
    status: string
    selectedBy: string | null
}
