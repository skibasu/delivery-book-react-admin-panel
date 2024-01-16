import {
    getShift,
    getShiftPending,
    getShiftRejected,
    getShiftSuccess,
} from "@/api/shiftApi"
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"

const shiftSlice = createSlice({
    name: "shift",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getShift.pending, getShiftPending)
            .addCase(getShift.fulfilled, getShiftSuccess)
            .addCase(getShift.rejected, getShiftRejected)
    },
})

export default shiftSlice.reducer
