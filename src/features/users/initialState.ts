import { UsersState } from "./types"

export const initialState: UsersState = {
    loading: "idle",
    error: null,
    socketLoading: "idle",
    socketError: null,
    data: [],
}
