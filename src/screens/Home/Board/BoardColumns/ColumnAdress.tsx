import { OrderAdress, OrderStatus } from "@/features/orders/types"
import { ReactComponent as AddUserIcon } from "@/assets/svg/icon-add-user.svg"
import { cn } from "@/lib/utils"

import React from "react"
interface IColumnAdress {
    boardType: OrderStatus
    className?: string
    adress: OrderAdress
}

const ColumnAdress: React.FC<IColumnAdress> = ({
    boardType,
    className,
    adress,
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
                    <p className="max-w-full">
                        ul. {adress?.streetName} {adress?.houseNumber} /{" "}
                        {adress?.flatNumber}
                    </p>
                    <p className="max-w-full">{adress?.city}</p>
                </div>
                {boardType === OrderStatus.OPEN ||
                boardType === OrderStatus.DRAFT ? (
                    <div
                        className={cn(
                            "justify-center px-2x cursor-pointer",
                            cssClassesBasedOnType()[1]
                        )}
                    >
                        <AddUserIcon />
                    </div>
                ) : null}
            </div>
            {!!adress.note ? (
                <div className="border-t border-t-customGray pt-4x text-orange mt-1y">
                    {adress.note}
                </div>
            ) : null}
        </div>
    )
}

export default ColumnAdress
