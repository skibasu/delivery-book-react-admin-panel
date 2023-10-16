import React from "react"
import { ReactComponent as CloseIcon } from "@/assets/svg/icon-close.svg"
import { cn } from "@/lib/utils"

interface ICloseButton {
    className: string
    onClick: () => void
}

const CloseButton: React.FC<ICloseButton> = ({ className, onClick }) => {
    return (
        <div
            className={cn(
                "transition duration-300 opacity-50 cursor-pointer hover:opacity-80",
                className
            )}
            onClick={onClick}
        >
            <CloseIcon />
        </div>
    )
}

export default CloseButton
