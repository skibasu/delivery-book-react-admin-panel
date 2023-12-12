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

export const getCookie = (cname: string) => {
    const name = `${cname}=`
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return null
}
export const eraseCookie = (name: string) => {
    document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}
