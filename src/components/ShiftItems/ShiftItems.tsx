import React from "react"
import { SelectItem } from "../ui"
import { ShiftHistory } from "@/features/shifts/types"
interface IShiftHistoryItem extends ShiftHistory {
    isHidden: boolean
}
interface IShiftItems {
    items: IShiftHistoryItem[]
}
const ShiftItems: React.FC<IShiftItems> = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                const { title, _id: id, isHidden } = item
                return (
                    <div
                        key={id}
                        className={
                            isHidden
                                ? "hidden"
                                : "relative z-10 bg-textWhite py-4x border-b border-b-customGrayLight translate-y-0 transition-all duration-0 hover:duration-150 hover:shadow-md hover:z-20 hover:rounded-sm hover:translate-y-[-2px]"
                        }
                    >
                        <SelectItem
                            value={id}
                            key={id}
                            className="cursor-pointer"
                        >
                            <div className="flex items-center">
                                <div className="text-sm pl-4x">
                                    <p className="m0 capitalize">{title}</p>
                                </div>
                            </div>
                        </SelectItem>
                    </div>
                )
            })}
        </>
    )
}

export default ShiftItems
