import React from "react"
import { SelectItem } from "../ui"
import { MenuProductType } from "@/features/basket/types"
import StatusBadge from "../StatusBadge/StatusBadge"

interface CategoriesItem {
    category: MenuProductType
    isHidden: boolean
}
interface ICategoriessItems {
    items: CategoriesItem[]
}

const StatusesItems: React.FC<ICategoriessItems> = ({ items: categories }) => {
    return (
        <>
            {categories.map(({ category, isHidden }) => {
                return (
                    <div
                        key={category}
                        className={
                            isHidden
                                ? "hidden"
                                : "px-0y relative z-10 bg-textWhite py-4x border-b border-b-customGrayLight translate-y-0 transition-all duration-0 hover:duration-150 hover:bg-navy hover:shadow-md hover:z-20 hover:rounded-sm hover:translate-y-[-2px]"
                        }
                    >
                        <SelectItem
                            value={category as string}
                            key={category}
                            className="cursor-pointer"
                        >
                            <StatusBadge label={category} />
                        </SelectItem>
                    </div>
                )
            })}
        </>
    )
}

export default StatusesItems
