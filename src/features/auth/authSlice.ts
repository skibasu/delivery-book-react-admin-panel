import { createSlice } from "@reduxjs/toolkit"

import {
    logInUser,
    loginUserPending,
    logInUserRejected,
    loginUserSuccess,
    logoutUser,
    logoutUserPending,
    logoutUserRejected,
    logoutUserSuccess,
    refreshUser,
    refreshUserPending,
    refreshUserRejected,
    refreshUserSuccess,
} from "../../api/authApi"
import { initialState } from "./initialState"

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUserLocaly(state) {
            state._id = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logInUser.pending, loginUserPending)
            .addCase(logInUser.fulfilled, loginUserSuccess)
            .addCase(logInUser.rejected, logInUserRejected)

            .addCase(logoutUser.pending, logoutUserPending)
            .addCase(logoutUser.fulfilled, logoutUserSuccess)
            .addCase(logoutUser.rejected, logoutUserRejected)

            .addCase(refreshUser.pending, refreshUserPending)
            .addCase(refreshUser.fulfilled, refreshUserSuccess)
            .addCase(refreshUser.rejected, refreshUserRejected)
    },
})

export const { logoutUserLocaly } = authSlice.actions
export default authSlice.reducer
