import { Order, OrdersState, OrderStatus } from "./types"

export const filteredDataInitial = {
    [OrderStatus.OPEN]: [] as Order[],
    [OrderStatus.SELECTED]: [] as Order[],
    [OrderStatus.PENDING]: [] as Order[],
    [OrderStatus.DONE]: [] as Order[],
    [OrderStatus.DRAFT]: [] as Order[],
}

export const initialState: OrdersState = {
    loading: "idle",
    socketOrderFormLoading: "idle",
    socketOrderFormError: null,
    socketuserFormLoading: "idle",
    socketUserFormError: null,
    error: null,
    data: [],
    filteredData: filteredDataInitial,
}
