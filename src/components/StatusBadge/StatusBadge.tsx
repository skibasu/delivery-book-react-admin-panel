import React from "react"
import { BasicStatuses } from "../AppSelect/types"
import { MenuProductType } from "@/features/basket/types"

interface IStatusBadge {
    label: BasicStatuses | MenuProductType
}
const StatusBadge: React.FC<IStatusBadge> = ({ label }) => {
    return <div className="font-payton tracking-[1.2px] text-sm">{label}</div>
}

export default StatusBadge
