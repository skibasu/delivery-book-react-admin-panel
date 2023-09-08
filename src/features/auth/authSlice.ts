import { createSlice } from "@reduxjs/toolkit"

import {
    logInUser,
    loginUserPending,
    logInUserRejected,
    loginUserSuccess,
} from "../../api/authApi"
import { initialState } from "./initialState"

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOutUser(state) {
            state.token = null
            state._id = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logInUser.pending, loginUserPending)
            .addCase(logInUser.fulfilled, loginUserSuccess)
            .addCase(logInUser.rejected, logInUserRejected)
    },
})

export const { logOutUser } = authSlice.actions
export default authSlice.reducer
