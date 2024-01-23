import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import ordrersReducer from "./features/orders/ordersSlice"
import usersReducer from "./features/users/usersSlice"
import basketReducer from "./features/basket/basketSlice"
import menuReducer from "./features/menu/menuSlice"
import profileReducer from "./features/profile/profileSlice"
import shiftReducer from "./features/shift/shiftSlice"
import shiftsReducer from "./features/shifts/shiftsSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        shift: shiftReducer,
        shifts: shiftsReducer,
        orders: ordrersReducer,
        users: usersReducer,
        profile: profileReducer,
        basket: basketReducer,
        menu: menuReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
