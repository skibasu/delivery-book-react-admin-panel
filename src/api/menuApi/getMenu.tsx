import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import axios from "../../axios"
import { MenuState } from "@/features/menu/types"
import { filterMenu } from "@/helpers/helpers"

export const getMenu = createAsyncThunk(
    "menu/getMenu",
    async (token: string) => {
        try {
            const req = await axios.get("/products", {
                headers: { Authorization: `Bearer ${token}` },
            })
            return req.data
        } catch (error: any) {
            console.log("ERROR", error.response.data)
            return error.response.data
        }
    }
)

export const getMenuPending = (state: MenuState) => {
    state.loading = "pending"
    state.error = null
}
export const getMenuSuccess = (state: MenuState, action: AnyAction) => {
    state.loading = "succeeded"

    if (action.payload.error) {
        state.error = action.payload
    } else {
        state.menu = action.payload
        state.filteredMenu = filterMenu(action.payload)
        state.error = null
    }
}
export const getMenuRejected = (state: MenuState) => {
    state.loading = "idle"
    state.error = {
        message: "Rejected",
        error: "Rejected",
        statusCode: 411,
    }
}
