import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { ProfileState } from "@/features/profile/types"

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
    try {
        const req = await axios.get("/users/profile")
        return req.data
    } catch (error: any) {
        console.log("ERROR", error.response.data)
        return error.response.data
    }
})

export const getProfilePending = (state: ProfileState) => {
    state.loading = "pending"
    state.error = null
}
export const getProfileSuccess = (state: ProfileState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.profile = action.payload
        state.error = null
    }
}
export const getProfileRejected = (state: ProfileState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
