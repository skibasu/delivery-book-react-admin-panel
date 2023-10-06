import React from "react"
import { cn } from "@/lib/utils"
import { ReactComponent as BasketIcon } from "@/assets/svg/icon-basket.svg"
import AddProductsDialog from "../AddProductsDialog/AddProductsDialog"

interface IbasketInput {
    className?: string
}

const BasketInput: React.FC<IbasketInput> = ({ className }) => {
    return (
        <div>
            <p className="block pb-3x">Products list</p>
            <div
                className={cn(
                    "w-full border border-storm relative bg-textWhite rounded-sm mt-6x",
                    className
                )}
            >
                <span className="block w-[27px] h-[1px] bg-textWhite absolute left-[10px] top-[-1px]"></span>
                <span className="absolute left-[15px] top-[-13px]">
                    <BasketIcon />
                </span>
                <AddProductsDialog title="Add products" />
            </div>
            <span className="block h-inputSpacer"></span>
        </div>
    )
}

export default BasketInput
