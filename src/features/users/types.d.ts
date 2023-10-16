export enum UserRoles {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    DRIVER = "DRIVER",
}

export interface User {
    _id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    role: UserRoles | UserRoles[]
    avatar?: string
    password?: string
}

export type UserPopulate = Omit<User, "password">

export interface UsersState {
    loading: "idle" | "pending" | "succeeded" | "failed"
    error: ApiError | null
    socketLoading: "idle" | "pending" | "succeeded" | "failed"
    socketError: ApiError | null
    data: UserPopulate[]
}
