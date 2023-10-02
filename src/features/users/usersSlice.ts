import {
    getUsers,
    getUsersPending,
    getUsersRejected,
    getUsersSuccess,
} from "@/api/usersApi"
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, { payload }) {
            state.data.push(payload)
        },
        updateUsers(state, { payload }) {
            // Update state of all Orders
            const updatedState = state.data.map((order) =>
                order._id !== payload._id ? order : { ...order, ...payload }
            )
            state.data = updatedState
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
            .addCase(getUsers.pending, getUsersPending)
            .addCase(getUsers.fulfilled, getUsersSuccess)
            .addCase(getUsers.rejected, getUsersRejected)
    },
})

export const { addUser, updateUsers, updateSocketLoading, updateSocketError } =
    usersSlice.actions
export default usersSlice.reducer
