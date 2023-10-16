import React, { useEffect, useState } from "react"

import { MenuProductType } from "@/features/basket/types"
import AppSelect from "../../AppSelect/AppSelect"
import { EDataType } from "../../AppSelect/types"
import ProductCart from "@/components/ProductCart/ProductCart"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getMenu } from "@/api/menuApi/getMenu"

const AddProductsForm = () => {
    const { token } = useAppSelector((state) => state.auth)
    const { filteredMenu } = useAppSelector((state) => state.menu)
    const dispatch = useAppDispatch()
    const [category, setCategory] = useState<MenuProductType>(
        MenuProductType.PIZZA
    )
    useEffect(() => {
        dispatch(getMenu(token || ""))
        //eslint-disable-next-line
    }, [])
    return (
        <div className="flex flex-col max-h-full">
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
                onFocus={() => {}}
            />

            <div className="grow overflow-y-auto px-7x -mx-7x pb-6x">
                {filteredMenu[category].map((props) => {
                    return (
                        <ProductCart
                            key={props._id}
                            addButton={true}
                            {...props}
                            counter={1}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AddProductsForm
