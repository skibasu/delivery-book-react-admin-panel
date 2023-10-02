import React from "react"
import { BasicStatuses } from "../AppSelect/types"

interface IStatusBadge {
    label: BasicStatuses
}
const StatusBadge: React.FC<IStatusBadge> = ({ label }) => {
    return <div className="font-payton tracking-[1.2px] text-sm">{label}</div>
}

export default StatusBadge
