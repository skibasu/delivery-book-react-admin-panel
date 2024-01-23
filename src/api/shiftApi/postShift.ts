import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { PostShift, ShiftState } from "@/features/shift/types"

export const postShift = createAsyncThunk(
    "shift/createShift",
    async (payload: PostShift) => {
        const req = await axios.post("/shifts", payload)

        return req.data
    }
)

export const postShiftPending = (state: ShiftState) => {
    state.loading = "pending"
    state.error = null
}
export const postShiftSuccess = (state: ShiftState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.data = action.payload
    }
}
export const postShiftRejected = (state: ShiftState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
