import { Order } from "../orders/types"
import { ShiftState } from "./types"
export const initialState: ShiftState = {
    loading: "idle",
    socketLoading: "idle",
    socketError: null,
    error: null,
    data: {
        _id: "",
        title: null,
        createdBy: null,
        updatedAt: 0,
        isActive: false,
        createdAt: 0,
        orders: [] as Order[],
    },
}
