import { ApiError } from "../../types/types"

export interface AuthState {
    _id: string | null
    token: string | null
    loading: "idle" | "pending" | "succeeded" | "failed"
    error: ApiError | null
}
export type Credentials = Pick<User, "email" | "password">

export type SignInResponse = Pick<AuthState, "_id" | "token">
