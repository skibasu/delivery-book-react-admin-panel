import React, { useState } from "react"

import { MenuProductType } from "@/features/basket/types"
import AppSelect from "../AppSelect/AppSelect"
import { EDataType } from "../AppSelect/types"
import { menu } from "@/menu"
import ProductCart from "@/components/ProductCart/ProductCart"

const AddProductsForm = () => {
    const [category, setCategory] = useState<MenuProductType>(
        MenuProductType.PIZZA
    )

    return (
        <div>
            <AppSelect
                onBlur={() => {
                    console.log("blur")
                }}
                onValueChange={(v) => setCategory(v as MenuProductType)}
                name="category"
                inputValue={category}
                label="Category"
                className="w-full"
                wrapperClasses="w-full sm:w-[230px]"
                dataType={EDataType.CATEGORY}
            />

            <div>
                {menu[category].map((props) => {
                    return <ProductCart addButton={true} {...props} />
                })}
            </div>
        </div>
    )
}

export default AddProductsForm
