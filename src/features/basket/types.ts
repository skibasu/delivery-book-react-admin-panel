import { filteredBasketInitial } from "./initialState"

export enum MenuProductType {
    PIZZA = "PIZZA",
    DRINKS = "DRINKS",
    OTHERS = "OTHERS",
}

export interface BasketProduct {
    title: string
    price: number
    description: string
    picture?: string
    type: MenuProductType
}
export interface BasketState {
    orders: BasketProduct[]
    filteredOrders: typeof filteredBasketInitial
}
