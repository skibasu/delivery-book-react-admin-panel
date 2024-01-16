import { Order } from "../orders/types"
import { ShiftState } from "./types"
export const initialState: ShiftState = {
    loading: "idle",
    socketLoading: "idle",
    socketError: null,
    error: null,
    data: {
        title: null,
        createdBy: null,
        isActive: false,
        createdAt: 0,
        orders: [] as Order[],
    },
}
