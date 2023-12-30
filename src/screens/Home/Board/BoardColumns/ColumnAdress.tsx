import { AddUserForm } from "@/components/AddUserForm/AddUserForm"
import { OrderAdress, OrderStatus } from "@/features/orders/types"

import { cn } from "@/lib/utils"

import React from "react"

interface IColumnAdress {
    boardType: OrderStatus
    className?: string
    adress: OrderAdress
    title: string
    orderId: string
}

const ColumnAdress: React.FC<IColumnAdress> = ({
    boardType,
    className,
    adress,
    title,
    orderId,
}) => {
    const isUserIconVisible = () =>
        boardType === OrderStatus.OPEN || boardType === OrderStatus.DRAFT
            ? true
            : false
    const cssClassesBasedOnType = () =>
        isUserIconVisible()
            ? ["flex-[0_0_85%] max-w-[85%]", "flex-[0_0_15%] max-w-[15%]"]
            : ["flex-[0,0,100%] max-w-[100%] ", ""]
    return (
        <div
            className={`${
                className ? className + " " : ""
            }grow px-6y py-7.1x flex flex-col justify-center`}
        >
            <div className={`flex items-center justify-between`}>
                <div className={cssClassesBasedOnType()[0]}>
                    <h3 className="text-sm capitalize font-medium mb-2x">
                        {title}
                    </h3>
                    <p className="max-w-full">
                        ul.
                        <span className="capitalize inline-block">
                            {` ${adress?.streetName} ${adress?.houseNumber} / ${adress?.flatNumber}`}
                        </span>
                    </p>
                    <p className="max-w-full capitalize">{adress?.city}</p>
                </div>
                {boardType === OrderStatus.OPEN ||
                boardType === OrderStatus.DRAFT ? (
                    <div
                        className={cn(
                            "justify-center px-2x cursor-pointer",
                            cssClassesBasedOnType()[1]
                        )}
                    >
                        <AddUserForm orderId={orderId} />
                    </div>
                ) : null}
            </div>
            {!!adress.note ? (
                <div className="border-t border-t-customGray pt-4x text-orange mt-1y overflow-hidden">
                    {adress.note}
                </div>
            ) : null}
        </div>
    )
}

export default ColumnAdress
