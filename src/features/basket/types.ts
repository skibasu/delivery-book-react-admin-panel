import { filteredBasketInitial } from "./initialState"

export enum MenuProductType {
    PIZZA = "PIZZA",
    DRINKS = "DRINKS",
    OTHERS = "OTHERS",
}

export interface BasketProduct {
    _id: string
    title: string
    price: number
    description: string
    picture: string
    type: MenuProductType
    counter: number
}
export interface BasketState {
    orders: BasketProduct[]
    filteredOrders: typeof filteredBasketInitial
}
