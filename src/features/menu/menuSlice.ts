import {
    getMenu,
    getMenuPending,
    getMenuRejected,
    getMenuSuccess,
} from "@/api/menuApi/getMenu"
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMenu.pending, getMenuPending)
            .addCase(getMenu.fulfilled, getMenuSuccess)
            .addCase(getMenu.rejected, getMenuRejected)
    },
})

export default menuSlice.reducer
