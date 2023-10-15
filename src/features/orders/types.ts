import { BasketProduct } from "../basket/types"
import { UserPopulate } from "../users/types"

export enum PaymentType {
    CARD = "CARD",
    ONLINE = "ONLINE",
    CASH = "CASH",
    PAYED = "PAYED",
}

export enum OrderStatus {
    DRAFT = "DRAFT",
    PENDING = "PENDING",
    OPEN = "OPEN",
    DONE = "DONE",
    SELECTED = "SELECTED",
}

export interface OrderAdress {
    streetName: string
    houseNumber: string
    flatNumber: string
    city: string
    note?: string
}
export interface Actions {
    editable: boolean
    deletable: boolean
}
export interface Order {
    _id: string
    title: string
    adress: OrderAdress
    phoneNumber: string
    products: BasketProduct[]
    price: string
    paymentType: PaymentType
    selectedBy: UserPopulate
    status: OrderStatus
    addedBy: UserPopulate
    createdAt: number
    actions: Actions
}

export type FilteredData = { [key in keyof typeof OrderStatus]: Order[] }
export type Loading = "idle" | "pending" | "succeeded" | "failed"

export interface OrdersState {
    loading: Loading
    error: ApiError | null
    socketLoading: Loading
    socketError: ApiError | null
    data: Order[]
    filteredData: FilteredData
}
