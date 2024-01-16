import { Order } from "../orders/types"
import { UserPopulate } from "../users/types"

export interface Shift {
    title: string | null
    createdBy: UserPopulate | null
    isActive: boolean
    createdAt: number
    orders: Order[]
}

export interface ShiftState {
    loading: Loading
    error: ApiError | null
    socketLoading: Loading
    socketError: ApiError | null
    data: Shift
}
