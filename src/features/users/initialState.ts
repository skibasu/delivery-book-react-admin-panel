import { AuthState } from "../auth/types"

export const initialState: AuthState = {
    _id: null,
    token: null,
    loading: "idle",
    error: null,
}
