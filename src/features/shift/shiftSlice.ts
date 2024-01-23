import {
    getShift,
    getShiftPending,
    getShiftRejected,
    getShiftSuccess,
    postShift,
    postShiftPending,
    postShiftRejected,
    postShiftSuccess,
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

            .addCase(postShift.pending, postShiftPending)
            .addCase(postShift.fulfilled, postShiftSuccess)
            .addCase(postShift.rejected, postShiftRejected)
    },
})

export default shiftSlice.reducer
