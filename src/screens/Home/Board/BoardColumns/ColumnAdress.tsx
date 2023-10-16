import { OrderAdress, OrderStatus } from "@/features/orders/types"
import { ReactComponent as AddUserIcon } from "@/assets/svg/icon-add-user.svg"

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
    return (
        <div
            className={`${
                className ? className + " " : ""
            }grow px-6y py-7.1x flex flex-col justify-center`}
        >
            <div className={`flex items-center justify-between w-full`}>
                <div className={`shrink-0`}>
                    <p>
                        ul. {adress?.streetName} {adress?.houseNumber} /{" "}
                        {adress?.flatNumber}
                    </p>
                    <p>{adress?.city}</p>
                </div>
                {boardType === OrderStatus.OPEN ||
                boardType === OrderStatus.DRAFT ? (
                    <div className="shrink-0 grow-0 cursor-pointer">
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
