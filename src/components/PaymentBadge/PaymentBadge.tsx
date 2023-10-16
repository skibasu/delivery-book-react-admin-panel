import { PaymentType } from "@/features/orders/types"
import React from "react"
import { cn } from "@/lib/utils"

interface IPaymentBadge {
    label: PaymentType
    variant: "small" | "medium" | "large"
}
const PaymentBadge: React.FC<IPaymentBadge> = ({ label, variant }) => {
    let className = ""
    if (variant === "small") {
        className = "px-2x py-0y font-sm"
    }
    if (variant === "medium") {
        className = "px-4x py-1x font-sm"
    }
    if (variant === "large") {
        className = "px-4x py-1x font-sm"
    }
    return (
        <div
            className={cn(
                `bg-${label.toLowerCase()} rounded-sm font-payton uppercase tracking-[1.4px] inline-flex items-center justify-center`,
                className
            )}
        >
            {label}
        </div>
    )
}

export default PaymentBadge
