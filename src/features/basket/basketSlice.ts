import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "./initialState"
import { MenuProductType } from "./types"

const authSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductToBasket(state, payload) {
            const { orders, filteredOrders } = state
            const { payload: item } = payload
            orders.push(item)
            console.log(payload.type, filteredOrders)
            filteredOrders[item.type as MenuProductType].push(item)
        },
    },
})

export const { addProductToBasket } = authSlice.actions
export default authSlice.reducer
