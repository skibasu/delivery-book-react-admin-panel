import { OrderStatus } from "@/features/orders/types"
import React, { useState } from "react"
import { tableHeaders } from "../labels/headers"
import { ReactComponent as SortIcon } from "@/assets/svg/icon-sort.svg"
import { useDispatch } from "react-redux"
import { sortOrderByKey } from "@/features/orders/ordersSlice"
interface IBoardTableHeaders {
    boardType: OrderStatus
}
const BoardTableHeaders: React.FC<IBoardTableHeaders> = ({ boardType }) => {
    const [isASC, setIsASC] = useState<boolean>(false)
    const dispatch = useDispatch()
    return (
        <div className="w-full flex bg-customGrayLight rounded-sm mt-8x mb-7x [&>*:first-child]:border-l-0 shrink-0">
            {tableHeaders.map(({ label, sort, key, width }, i) => {
                if (
                    key === "selectedBy" &&
                    (boardType === OrderStatus.OPEN ||
                        boardType === OrderStatus.DRAFT)
                ) {
                    return null
                }
                return (
                    <div
                        key={key}
                        className={`border-l border-textWhite h-[44px] px-6y py-1y flex justify-between items-center text-sm font-medium${
                            width ? " " + width : ""
                        }`}
                    >
                        <span>{label}</span>
                        {sort ? (
                            <span
                                className="block w-[10px] h-[10px]"
                                onClick={() => {
                                    console.log("sort")
                                    setIsASC(!isASC)
                                    dispatch(
                                        sortOrderByKey({
                                            boardType,
                                            key,
                                            asc: isASC,
                                        })
                                    )
                                }}
                            >
                                <SortIcon />
                            </span>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}

export default BoardTableHeaders
