import { PaymentType } from "@/features/orders/types"
import React from "react"

interface IColumnPayment {
    payment: PaymentType
    className?: string
}
const ColumnPayment: React.FC<IColumnPayment> = ({ className, payment }) => {
    return (
        <div
            className={`${
                className ? className + " " : ""
            }flex justify-center items-center px-6y py-7.1x`}
        >
            <div
                className={`bg-${payment.toLowerCase()} px-4x py-1x rounded-sm font-payton font-sm uppercase tracking-[1.4px] inline-flex items-center justify-center`}
            >
                {payment}
            </div>
        </div>
    )
}

export default ColumnPayment
