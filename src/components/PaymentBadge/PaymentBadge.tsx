import { PaymentType } from "@/features/orders/types"
import React from "react"
import { cn } from "@/lib/utils"

interface IPaymentBadge {
    label: PaymentType
    variant: "small" | "medium" | "large"
    className?: string
}
const PaymentBadge: React.FC<IPaymentBadge> = ({
    label,
    variant,
    className,
}) => {
    let classNameV = ""
    if (variant === "small") {
        classNameV = "px-2x py-0y font-sm"
    }
    if (variant === "medium") {
        classNameV = "px-4x py-1x font-sm"
    }
    if (variant === "large") {
        classNameV = "px-4x py-1x font-sm"
    }
    return (
        <div
            className={cn(
                `bg-${label.toLowerCase()} rounded-sm font-payton uppercase tracking-[1.4px] inline-flex items-center justify-center`,
                classNameV,
                className
            )}
        >
            {label}
        </div>
    )
}

export default PaymentBadge
