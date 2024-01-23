import {
    getShifts,
    getShiftsPending,
    getShiftsRejected,
    getShiftsSuccess,
} from "@/api/shiftsApi"
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"

const shiftsSlice = createSlice({
    name: "shifts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getShifts.pending, getShiftsPending)
            .addCase(getShifts.fulfilled, getShiftsSuccess)
            .addCase(getShifts.rejected, getShiftsRejected)
    },
})

export default shiftsSlice.reducer
