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
} from "../../api/authApi"
import { initialState } from "./initialState"

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //   logOutUser(state) {
        //       state._id = null
        //   },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logInUser.pending, loginUserPending)
            .addCase(logInUser.fulfilled, loginUserSuccess)
            .addCase(logInUser.rejected, logInUserRejected)

            .addCase(logoutUser.pending, logoutUserPending)
            .addCase(logoutUser.fulfilled, logoutUserSuccess)
            .addCase(logoutUser.rejected, logoutUserRejected)
    },
})

//export const { logOutUser } = authSlice.actions
export default authSlice.reducer
