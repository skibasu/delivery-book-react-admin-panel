import { UserPopulate } from "../users/types"

export interface ProfileState {
    loading: "idle" | "pending" | "succeeded" | "failed"
    error: ApiError | null
    profile: UserPopulate
}
