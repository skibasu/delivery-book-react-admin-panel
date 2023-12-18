import {
    getProfile,
    getProfilePending,
    getProfileRejected,
    getProfileSuccess,
} from "@/api/profileApi"
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, getProfilePending)
            .addCase(getProfile.fulfilled, getProfileSuccess)
            .addCase(getProfile.rejected, getProfileRejected)
    },
})

export default profileSlice.reducer
