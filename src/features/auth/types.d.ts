import { ApiError } from "../../types/types"

export interface AuthState {
    _id: string | null
    timeOut: IExpires
    loading: "idle" | "pending" | "succeeded" | "failed"
    error: ApiError | null
}
export interface IExpires {
    token: number
    refresh: number
}
export type Expires = {
    timeOut: IExpires
}
export type Credentials = Pick<User, "email" | "password">

export type SignInResponse = Pick<AuthState, "_id"> & Expires
