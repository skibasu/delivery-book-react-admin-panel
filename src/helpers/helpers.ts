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

export const setIDCookie = (v: string) => {
    const d = new Date()
    d.setTime(d.getTime() + 43200)

    document.cookie = `_id=${v};expires=${d.toUTCString()};`
}
export const getIDCookie = () => {
    const arrOfCookies = document.cookie.split(";")
    const idWithPrefix = arrOfCookies.find((c) => c.match(/^_id=.*$/))

    return idWithPrefix?.replace("_id=", "") || ""
}
