import {
    getOrders,
    getOrdersPending,
    getOrdersRejected,
    getOrdersSuccess,
} from "@/api/ordersApi"
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { OrderStatus } from "./types"
import { filterOrders } from "@/helpers/helpers"
import { sortByKey } from "@/helpers/helpers"

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrder(state, { payload }) {
            state.data.push(payload)
            state.filteredData[payload.status as OrderStatus].unshift(payload)
        },
        updateOrder(state, { payload }) {
            // Update state of all Orders
            const updatedState = state.data.map((order) =>
                order._id !== payload._id ? order : { ...order, ...payload }
            )
            state.data = updatedState
            state.filteredData = filterOrders(updatedState)
        },
        deleteOrder(state, { payload }) {
            state.data = state.data.filter((order) => order._id !== payload._id)
            state.filteredData[payload.status as OrderStatus] =
                state.filteredData[payload.status as OrderStatus].filter(
                    (order) => order._id !== payload._id
                )
        },
        sortOrderByKey(state, { payload }) {
            const filteredData =
                state.filteredData[payload.boardType as OrderStatus]
            const sortedData = sortByKey(payload.key, filteredData, payload.asc)
            state.filteredData[payload.boardType as OrderStatus] = sortedData
        },
        updateSocketLoading(state, { payload }) {
            state.socketLoading = payload
        },
        updateSocketError(state, { payload }) {
            state.socketError = payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, getOrdersPending)
            .addCase(getOrders.fulfilled, getOrdersSuccess)
            .addCase(getOrders.rejected, getOrdersRejected)
    },
})

export const {
    addOrder,
    updateOrder,
    updateSocketLoading,
    updateSocketError,
    deleteOrder,
    sortOrderByKey,
} = ordersSlice.actions
export default ordersSlice.reducer
