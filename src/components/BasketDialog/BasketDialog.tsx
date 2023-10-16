import React from "react"
import BasketMenu from "../Basket/BasketMenu"
import { useAppSelector } from "@/hooks/useStore"

const BasketDialog: React.FC = () => {
    const { orders } = useAppSelector((state) => state.basket)
    return orders.length > 0 ? (
        <div
            className={`absolute top-0 right-[-370px]  w-[352px] z-[100] h-full max-h-full`}
        >
            <BasketMenu />
        </div>
    ) : null
}

export default BasketDialog
