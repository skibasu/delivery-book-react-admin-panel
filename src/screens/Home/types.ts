import { Order } from "@/features/orders/types"

export interface ITableHeaders {
    width: string
    label: string
    sort: boolean
    key: keyof Pick<
        Order,
        | "selectedBy"
        | "adress"
        | "products"
        | "phoneNumber"
        | "paymentType"
        | "createdAt"
        | "price"
        | "actions"
    >
}

export enum SocketType {
    CREATE_ORDER = "createOrder",
    UPDATE_ORDER = "updateOrder",
    ROOM_IN = "room_in",
}
