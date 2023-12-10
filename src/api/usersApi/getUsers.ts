import { UsersState } from "@/features/users/types"
import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (token: string | null) => {
        try {
            const req = await axios.get("/users", {
                headers: { Authorization: `Bearer ${token}` },
            })
            return req.data
        } catch (error: any) {
            console.log("ERROR", error.response.data)
            return error.response.data
        }
    }
)

export const getUsersPending = (state: UsersState) => {
    state.loading = "pending"
    state.error = null
}
export const getUsersSuccess = (state: UsersState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.data = action.payload
        state.error = null
    }
}
export const getUsersRejected = (state: UsersState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
