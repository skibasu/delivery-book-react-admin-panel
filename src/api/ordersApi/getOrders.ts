import { OrdersState } from "@/features/orders/types"
import { filterOrders } from "@/helpers/helpers"
import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"

export const getOrders = createAsyncThunk(
    "orders/getOrders",
    async (token: string | null) => {
        console.log("getOreders")
        try {
            const req = await axios.get("/orders", {
                headers: { Authorization: `Bearer ${token}` },
            })
            return req.data
        } catch (error: any) {
            console.log("ERROR", error.response.data)
            return error.response.data
        }
    }
)

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
