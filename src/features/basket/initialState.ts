import { BasketProduct, BasketState, MenuProductType } from "./types"

export const filteredBasketInitial = {
    [MenuProductType.PIZZA]: [] as BasketProduct[],
    [MenuProductType.DRINKS]: [] as BasketProduct[],
    [MenuProductType.OTHERS]: [] as BasketProduct[],
}

export const initialState: BasketState = {
    orders: [],
    filteredOrders: filteredBasketInitial,
}
