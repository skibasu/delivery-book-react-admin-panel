import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { ShiftsState } from "@/features/shifts/types"

export const getShifts = createAsyncThunk("shifts/getShift", async () => {
    const req = await axios.get("/shifts")

    return req.data
})

export const getShiftsPending = (state: ShiftsState) => {
    state.loading = "pending"
    state.error = null
}
export const getShiftsSuccess = (state: ShiftsState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.data = action.payload
    }
}
export const getShiftsRejected = (state: ShiftsState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
