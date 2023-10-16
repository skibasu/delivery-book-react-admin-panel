import { BasketProduct, MenuProductType } from "../basket/types"
import { filteredMenuInitial } from "./initialState"

export type Loading = "idle" | "pending" | "succeeded" | "failed"
export interface MenuState {
    loading: Loading
    error: ApiError | null
    menu: BasketProduct[]
    filteredMenu: typeof filteredMenuInitial
}

export type FilteredMenu = {
    [key in keyof typeof MenuProductType]: BasketProduct[]
}
