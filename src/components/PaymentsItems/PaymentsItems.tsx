import React from "react"
import { SelectItem } from "../ui"
import { PaymentType } from "@/features/orders/types"
import PaymentBadge from "../PaymentBadge/PaymentBadge"

interface PaymentsItem {
    payment: PaymentType
    isHidden: boolean
}
interface IPaymentsItems {
    items: PaymentsItem[]
}

const PaymentItems: React.FC<IPaymentsItems> = ({ items: payments }) => {
    return (
        <>
            {payments.map(({ payment, isHidden }) => {
                return (
                    <div
                        key={payment}
                        className={
                            isHidden
                                ? "hidden"
                                : "relative z-10 bg-textWhite py-4x border-b border-b-customGrayLight "
                        }
                    >
                        <SelectItem
                            value={payment as string}
                            key={payment}
                            className="cursor-pointer  flex flex-col items-start"
                        >
                            <div className="px-2x">
                                <PaymentBadge
                                    variant="small"
                                    label={payment}
                                    className="translate-y-0 transition-all duration-0 hover:duration-150 hover:shadow-md hover:z-20 hover:rounded-sm hover:translate-y-[-2px]"
                                />
                            </div>
                        </SelectItem>
                    </div>
                )
            })}
        </>
    )
}

export default PaymentItems
