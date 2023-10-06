import React, { useEffect, useState } from "react"
import { ReactComponent as BasketIcon } from "@/assets/svg/icon-basket.svg"
import { ReactComponent as BasketBorder } from "@/assets/borders/border.svg"
import { useAppSelector } from "@/hooks/useStore"
import ProductCart from "../ProductCart/ProductCart"
import { MenuProductType } from "@/features/basket/types"

const BasketMenu = () => {
    const { orders, filteredOrders } = useAppSelector((state) => state.basket)
    //  const [sortedBasket, setSortedBasket] = useState<{
    //      [key in keyof typeof MenuProductType]: BasketProduct[]
    //  }>({} as { [key in keyof typeof MenuProductType]: BasketProduct[] })

    useEffect(() => {}, [])
    return (
        <div className="w-full relative h-full">
            {/* basket icon */}
            <div className="absolute left-[21px] top-[-13px] [&>svg>path]:fill-textWhite">
                <BasketIcon />
            </div>
            {/* background border svg layout */}
            <div className="w-full h-full absolute left-0 top-0">
                <BasketBorder className="w-full h-full" />
            </div>
            <div className="w-full relative min-h-full max-h-full overflow-auto">
                {Object.keys(filteredOrders).length > 0 ? (
                    <div className="px-4x pt-6x w-full">
                        {Object.keys(filteredOrders).map((type) => {
                            return (
                                <div>
                                    <h2 className="font-payton tracking-[1.2px] text-sm text-textWhite mb-4x">
                                        #{type}
                                    </h2>
                                    {filteredOrders[
                                        type as MenuProductType
                                    ].map((order) => (
                                        <ProductCart
                                            {...order}
                                            addButton={false}
                                        />
                                    ))}
                                </div>
                            )
                        })}
                        <div className="flex border-t border-t-textWhite pt-4x items-center justify-between max-w-full mt-8x pb-6x">
                            <p className="px-4x text-textWhite">
                                Items: {orders.length}
                            </p>
                            <p className="px-4x text-textWhite">
                                Total: {orders.reduce((a, v) => a + v.price, 0)}{" "}
                                zł
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default BasketMenu
