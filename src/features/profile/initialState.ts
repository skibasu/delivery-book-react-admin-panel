import { UserPopulate } from "../users/types"
import { ProfileState } from "./types"

export const initialState: ProfileState = {
    loading: "idle",
    error: null,
    profile: {} as UserPopulate,
}
