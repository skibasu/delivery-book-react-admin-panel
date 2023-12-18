import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { AuthState } from "../../features/auth/types"

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    const req = await axios.post("/auth/logout")
    return req.data
    //  } catch (error: any) {
    //      return error.response.data
    //  }
})

export const logoutUserPending = (state: AuthState) => {
    state.loading = "pending"
    state.error = null
}
export const logoutUserSuccess = (state: AuthState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state._id = null
        state.error = null
    }
}
export const logoutUserRejected = (state: AuthState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
