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
        addShiftOrders(state, { payload }) {
            state.data = payload
            state.filteredData = filterOrders(payload)
        },
        addOrder(state, { payload: { data: payload, asc, activeKey } }) {
            state.data.push(payload)

            state.filteredData[payload.status as OrderStatus] = sortByKey(
                activeKey,
                [...state.filteredData[payload.status as OrderStatus], payload],
                asc
            )
        },
        updateOrder(state, { payload: { data: payload, asc, activeKey } }) {
            // Update state of all Orders
            const updatedState = state.data.map((order) =>
                order._id !== payload._id ? order : { ...order, ...payload }
            )

            state.data = updatedState
            state.filteredData = filterOrders(updatedState)

            state.filteredData[payload.status as OrderStatus] = sortByKey(
                activeKey,
                [...state.filteredData[payload.status as OrderStatus]],
                asc
            )
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
    addShiftOrders,
    addOrder,
    updateOrder,
    updateSocketLoading,
    updateSocketError,
    deleteOrder,
    sortOrderByKey,
} = ordersSlice.actions
export default ordersSlice.reducer
