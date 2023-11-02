import React, { useEffect } from "react"
import { ReactComponent as BasketIcon } from "@/assets/svg/icon-basket.svg"
import { ReactComponent as BasketBorder } from "@/assets/borders/border.svg"
import { useAppSelector } from "@/hooks/useStore"
import ProductCart from "../ProductCart/ProductCart"
import { MenuProductType } from "@/features/basket/types"
import {
    usePresence,
    useAnimate,
    AnimationSequence,
    stagger,
} from "framer-motion"

const BasketMenu = () => {
    const { orders, filteredOrders } = useAppSelector((state) => state.basket)
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()
    useEffect(() => {
        const sequenceIn = [
            [
                "#icon",
                { opacity: [0, 1], scale: [2, 1] },
                { opacity: { duration: 0.15 }, duration: 0.5 },
            ],
            ["#path", { pathLength: [0, 1] }, { duration: 0.5, at: "<" }],
            ["#summary", { opacity: [0, 1] }, { duration: 0.3, at: "<" }],
            [
                ".cart",
                { opacity: [0, 1] },
                { duration: 0.5, delay: stagger(0.1) },
            ],
        ] as AnimationSequence
        const sequenceOut = [
            [scope.current, { opacity: [1, 0] }, { duration: 0.3 }],
        ] as AnimationSequence
        if (isPresent) {
            const initialAnimation = async () => {
                await animate(sequenceIn)
            }
            initialAnimation()
        } else {
            const exitAnimation = async () => {
                await animate(sequenceOut)
                safeToRemove!()
            }
            exitAnimation()
        }
        //eslint-disable-next-line
    }, [isPresent])

    return (
        <div ref={scope} className="w-full relative h-full pt-4x flex flex-col">
            {/* basket icon */}
            <div className="absolute left-[21px] top-[-13px] [&>svg>path]:fill-textWhite">
                <BasketIcon id="icon" />
            </div>
            {/* background border svg layout */}
            <div className="w-full h-full absolute left-0 top-0">
                <BasketBorder className="w-full h-full" id="border" />
            </div>

            <div className="w-full relative overflow-y-auto grow scrollbar scrollbar-h-0y scrollbar-thumb-textWhite scrollbar-track-transparent scrollbar-w-[2px]">
                {Object.keys(filteredOrders).length > 0 ? (
                    <div className="px-4x pt-6x w-full">
                        {Object.keys(filteredOrders).map((type) => {
                            return filteredOrders[type as MenuProductType]
                                .length > 0 ? (
                                <div key={type}>
                                    <h2 className="font-payton tracking-[1.2px] text-sm text-textWhite mb-4x">
                                        #{type}
                                    </h2>
                                    {filteredOrders[
                                        type as MenuProductType
                                    ].map((order) => (
                                        <ProductCart
                                            key={order._id}
                                            {...order}
                                            addButton={false}
                                        />
                                    ))}
                                </div>
                            ) : null
                        })}
                    </div>
                ) : null}
            </div>
            <div id="summary" className="max-w-full mt-4x px-4x opacity-0">
                <div className="w-full flex items-center justify-between border-t border-t-textWhite pt-4x pb-7x">
                    <p className="px-4x text-textWhite">
                        Items: {orders.reduce((a, v) => a + v.counter, 0)}
                    </p>
                    <p className="px-4x text-textWhite">
                        Total:{" "}
                        {orders.reduce((a, v) => a + v.price * v.counter, 0)} zł
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BasketMenu
