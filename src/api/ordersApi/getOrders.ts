import { OrdersState } from "@/features/orders/types"
import { filterOrders } from "@/helpers/helpers"
import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
    const req = await axios.get("/orders")
    return req.data
})

export const getOrdersPending = (state: OrdersState) => {
    state.loading = "pending"
    state.error = null
}
export const getOrdersSuccess = (state: OrdersState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.data = action.payload
        state.filteredData = filterOrders(action.payload)
        state.error = null
    }
}
export const getOrdersRejected = (state: OrdersState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
