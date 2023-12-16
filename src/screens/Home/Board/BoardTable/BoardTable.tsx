import React from "react"
import { ITableHeaders } from "../../types"
import BoardTableHeaders from "./BoardTableHeaders"
import BoardTableContent from "./BoardTableContent"
import { OrderStatus } from "@/features/orders/types"

interface IBoardTable {
    headers: ITableHeaders[]
    type: OrderStatus
}

const BoardTable: React.FC<IBoardTable> = ({ type: boardType }) => {
    return (
        <div>
            {/* Table Headers*/}
            <BoardTableHeaders boardType={boardType} />
            {/* Table Content*/}
            <BoardTableContent boardType={boardType} />
        </div>
    )
}

export default BoardTable
