import { BasketProduct, MenuProductType } from "@/features/basket/types"

export interface IAddProductsForm {
    category: MenuProductType
    products: BasketProduct[]
}
