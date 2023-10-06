import React from "react"
import { ReactComponent as BasketIcon } from "@/assets/svg/icon-basket.svg"
import { useAppSelector } from "@/hooks/useStore"
import ProductCart from "../ProductCart/ProductCart"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface IbasketInput {
    className?: string
}

const BasketMenuInput: React.FC<IbasketInput> = ({ className }) => {
    const { orders } = useAppSelector((state) => state.basket)
    return (
        <Popover>
            <PopoverTrigger>
                <span className="cursor-pointer">
                    <BasketIcon />
                </span>
            </PopoverTrigger>
            <PopoverContent hideWhenDetached={false}>
                <div className="w-full border border-storm relative bg-textWhite rounded-sm p-2x">
                    <span className="block w-[27px] h-[1px] bg-textWhite absolute left-[10px] top-[-1px]"></span>
                    <div>
                        {orders.map((order) => {
                            return <ProductCart {...order} addButton={false} />
                        })}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default BasketMenuInput
