import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { ShiftState } from "@/features/shift/types"

export const getShift = createAsyncThunk("shift/getShift", async () => {
    const req = await axios.get("/shifts/active")

    return req.data
})

export const getShiftPending = (state: ShiftState) => {
    state.loading = "pending"
    state.error = null
}
export const getShiftSuccess = (state: ShiftState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.data = action.payload[0]
    }
}
export const getShiftRejected = (state: ShiftState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
