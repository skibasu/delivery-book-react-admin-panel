import { Order } from "../orders/types"
import { UserPopulate } from "../users/types"

export interface Shift {
    _id: string
    title: string | null
    createdBy: UserPopulate | null
    isActive: boolean
    createdAt: number
    updatedAt: number
    orders: Order[]
}

export interface ShiftState {
    loading: Loading
    error: ApiError | null
    socketLoading: Loading
    socketError: ApiError | null
    data: Shift
}

export interface PostShift {
    title: string
}
