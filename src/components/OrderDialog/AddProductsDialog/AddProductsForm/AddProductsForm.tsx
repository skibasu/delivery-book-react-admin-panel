import React, { useState } from "react"

import { MenuProductType } from "@/features/basket/types"
import AppSelect from "../../../AppSelect/AppSelect"
import { EDataType } from "../../../AppSelect/types"
import ProductCart from "@/components/ProductCart/ProductCart"
import { useAppSelector } from "@/hooks/useStore"
import { ReactComponent as SpinnerIcon } from "@/assets/svg/icon-spinner-storm.svg"

const AddProductsForm = () => {
    const { filteredMenu, loading } = useAppSelector((state) => state.menu)
    const [category, setCategory] = useState<MenuProductType>(
        MenuProductType.PIZZA
    )

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

            <div className="grow overflow-y-auto px-7x -mx-7x pb-6x scrollbar srollbar-h-1y scrollbar-thumb-storm scrollbar-track-textWhite scrollbar-w-[2px]">
                {loading === "pending" ? (
                    <SpinnerIcon
                        width="24px"
                        height="24px"
                        className="mx-auto my-auto"
                    />
                ) : null}
                {filteredMenu[category].length > 0
                    ? filteredMenu[category].map((props) => {
                          return (
                              <ProductCart
                                  key={props._id}
                                  addButton={true}
                                  {...props}
                                  counter={1}
                              />
                          )
                      })
                    : null}
            </div>
        </div>
    )
}

export default AddProductsForm
