import { BasketProduct } from "@/features/basket/types"
import { filteredMenuInitial } from "@/features/menu/initialState"
import { FilteredMenu } from "@/features/menu/types"
import { filteredDataInitial } from "@/features/orders/initialState"
import { FilteredData, Order } from "@/features/orders/types"

export const filterOrders = (orders: Order[]): FilteredData => {
    const data: any = {}
    Object.keys(filteredDataInitial).forEach((key) => {
        data[key] = orders.filter((order) => order.status === key)
    })

    return data as FilteredData
}

export const filterMenu = (menu: BasketProduct[]): FilteredMenu => {
    const data: any = {}
    Object.keys(filteredMenuInitial).forEach((key) => {
        data[key] = menu.filter((item) => item.type === key)
    })

    return data as FilteredMenu
}
