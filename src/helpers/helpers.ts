import { filteredDataInitial } from "@/features/orders/initialState"
import { FilteredData, Order } from "@/features/orders/types"

export const filterOrders = (orders: Order[]): FilteredData => {
    const data: any = {}
    Object.keys(filteredDataInitial).forEach((key) => {
        data[key] = orders.filter((order) => order.status === key)
    })
    console.log(data)
    return data as FilteredData
}
