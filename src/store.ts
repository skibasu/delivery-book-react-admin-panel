import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import ordrersReducer from "./features/orders/ordersSlice"
import usersReducer from "./features/users/usersSlice"
import basketReducer from "./features/basket/basketSlice"
import menuReducer from "./features/menu/menuSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        orders: ordrersReducer,
        users: usersReducer,
        basket: basketReducer,
        menu: menuReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
