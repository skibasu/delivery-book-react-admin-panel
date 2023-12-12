import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import { instancePublic as axios } from "../../axios"
import { AuthState } from "../../features/auth/types"
import { getCookie } from "@/helpers/helpers"

export const refreshUser = createAsyncThunk("auth/refreshUser", async () => {
    const req = await axios.get("/auth/refresh")

    return req.data
})

export const refreshUserPending = (state: AuthState) => {
    state.loading = "pending"
    state.error = null
}
export const refreshUserSuccess = (state: AuthState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state._id = getCookie("_id")
        state.timeOut.token = Number(getCookie("token")) || 0
        state.timeOut.refresh = Number(getCookie("refresh")) || 0
        state.error = null
    }
}
export const refreshUserRejected = (state: AuthState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
