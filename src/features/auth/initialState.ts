import { AuthState } from "./types"

export const initialState: AuthState = {
    _id: document.cookie.replace("_id=", ""),
    timeOut: { token: 0, refresh: 0 },
    loading: "idle",
    error: null,
}
