import React from "react"
import { BasicStatuses } from "../AppSelect/types"
import StatusBadge from "../StatusBadge/StatusBadge"
import { SelectItem } from "../ui"

interface StatusItem {
    status: BasicStatuses
    isHidden: boolean
}
interface IStatusesItems {
    items: StatusItem[]
}
const StatusesItems: React.FC<IStatusesItems> = ({ items: statuses }) => {
    return (
        <>
            {statuses.map(({ status, isHidden }) => {
                return (
                    <div
                        key={status}
                        className={
                            isHidden
                                ? "hidden"
                                : "relative z-10 bg-textWhite py-4x border-b border-b-customGrayLight translate-y-0 transition-all duration-0 hover:duration-150 hover:shadow-md hover:z-20 hover:rounded-sm hover:translate-y-[-2px]"
                        }
                    >
                        <SelectItem
                            value={status as string}
                            key={status}
                            className="cursor-pointer"
                        >
                            <StatusBadge label={status} />
                        </SelectItem>
                    </div>
                )
            })}
        </>
    )
}

export default StatusesItems
