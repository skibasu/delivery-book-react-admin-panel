import { BasketProduct, MenuProductType } from "../basket/types"
import { MenuState } from "./types"

export const filteredMenuInitial = {
    [MenuProductType.PIZZA]: [] as Omit<BasketProduct, "counter">[],
    [MenuProductType.DRINKS]: [] as Omit<BasketProduct, "counter">[],
    [MenuProductType.OTHERS]: [] as Omit<BasketProduct, "counter">[],
}

export const initialState: MenuState = {
    loading: "idle",
    error: null,
    menu: [],
    filteredMenu: filteredMenuInitial,
}
