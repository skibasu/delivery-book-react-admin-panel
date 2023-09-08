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
