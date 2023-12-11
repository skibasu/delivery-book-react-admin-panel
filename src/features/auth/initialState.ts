import { AuthState } from "./types"
console.log(document)
export const initialState: AuthState = {
    _id: document.cookie.replace("_id=", ""),
    token: document.cookie.replace("_id=", ""),
    loading: "idle",
    error: null,
}
