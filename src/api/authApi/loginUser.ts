import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import { instancePublic as axios } from "../../axios"
import { AuthState, Credentials } from "../../features/auth/types"
import { getCookie } from "@/helpers/helpers"

export const logInUser = createAsyncThunk(
    "auth/logInUser",
    async (credentials: Credentials) => {
        try {
            const req = await axios.post("/auth/signin", credentials)
            return req.data
        } catch (error: any) {
            return error.response.data
        }
    }
)

export const loginUserPending = (state: AuthState) => {
    state.loading = "pending"
    state.error = null
}
export const loginUserSuccess = (state: AuthState, action: AnyAction) => {
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
export const logInUserRejected = (state: AuthState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
