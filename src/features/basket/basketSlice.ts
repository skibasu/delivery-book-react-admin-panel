import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "./initialState"
import { BasketProduct, MenuProductType } from "./types"

const authSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductToBasket(state, payload) {
            const { orders, filteredOrders } = state
            const { payload: item } = payload

            const itemExist = orders.find((order) => order._id === item._id)

            if (itemExist) {
                state.orders = orders.map(({ _id, counter, ...rest }) =>
                    _id === item._id
                        ? { ...item, counter: counter + 1 }
                        : { _id, counter, ...rest }
                )
                state.filteredOrders[item.type as MenuProductType] =
                    filteredOrders[item.type as MenuProductType].map(
                        ({ _id, counter, ...rest }) =>
                            _id === item._id
                                ? { ...item, counter: counter + 1 }
                                : { _id, counter, ...rest }
                    )
            } else {
                orders.push(item)
                filteredOrders[item.type as MenuProductType].push(item)
            }
        },
        removeProductfromBasket(state, payload) {
            const { orders, filteredOrders } = state
            const { payload: item } = payload

            state.orders = orders.filter(({ _id }) => _id !== item._id)
            state.filteredOrders[item.type as MenuProductType] = filteredOrders[
                item.type as MenuProductType
            ].filter(({ _id }) => _id !== item._id)
        },
        addOneProduct(state, payload) {
            const { orders, filteredOrders } = state
            const { payload: item } = payload

            state.orders = orders.map(({ counter, _id, ...rest }) => {
                if (_id === item._id) {
                    return { ...rest, _id, counter: counter + 1 }
                } else {
                    return { ...rest, _id, counter }
                }
            })

            state.filteredOrders[item.type as MenuProductType] = filteredOrders[
                item.type as MenuProductType
            ].map(({ _id, counter, ...rest }) => {
                if (_id === item._id) {
                    return { ...rest, _id, counter: counter + 1 }
                } else {
                    return { ...rest, _id, counter }
                }
            })
        },
        removeAllProducts(state) {
            const { filteredOrders } = state
            state.orders = []
            for (let key in filteredOrders) {
                filteredOrders[key as MenuProductType] = []
            }
        },
        removeOneProduct(state, payload) {
            const { orders, filteredOrders } = state
            const { payload: item } = payload

            state.orders = orders.map(({ counter, _id, ...rest }) => {
                if (_id === item._id) {
                    return {
                        ...rest,
                        _id,
                        counter: counter > 1 ? counter - 1 : counter,
                    }
                } else {
                    return { ...rest, _id, counter }
                }
            })

            state.filteredOrders[item.type as MenuProductType] = filteredOrders[
                item.type as MenuProductType
            ].map(({ _id, counter, ...rest }) => {
                if (_id === item._id) {
                    return {
                        ...rest,
                        _id,
                        counter: counter > 1 ? counter - 1 : counter,
                    }
                } else {
                    return { ...rest, _id, counter }
                }
            })
        },
        updateBasket(state, payload) {
            const { payload: items } = payload
            state.orders = items

            items.forEach((item: BasketProduct) => {
                state.filteredOrders[item.type as MenuProductType].push(item)
            })
        },
    },
})

export const {
    addProductToBasket,
    removeProductfromBasket,
    removeOneProduct,
    addOneProduct,
    removeAllProducts,
    updateBasket,
} = authSlice.actions
export default authSlice.reducer
