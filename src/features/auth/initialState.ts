import { getCookie } from "@/helpers/helpers"
import { AuthState } from "./types"

export const initialState: AuthState = {
    _id: getCookie("_id"),
    timeOut: {
        token: Number(getCookie("token")) || 0,
        refresh: Number(getCookie("refresh")) || 0,
    },
    loading: "idle",
    error: null,
}
