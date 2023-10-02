import React, { useEffect } from "react"
import { ITableHeaders } from "../../types"
import BoardTableHeaders from "./BoardTableHeaders"
import BoardTableContent from "./BoardTableContent"
import { OrderStatus } from "@/features/orders/types"

interface IBoardTable {
    headers: ITableHeaders[]
    type: OrderStatus
}

// const sortByKey = (
//     key: keyof ITableContent,
//     array: ITableContent[],
//     asc?: true
// ) => {
//     return [
//         ...array.sort((a, b) => {
//             if (a[key] > b[key]) {
//                 return asc ? 1 : -1
//             } else if (a[key] < b[key]) {
//                 return asc ? -1 : 1
//             } else {
//                 return 0
//             }
//         }),
//     ]
// }
const BoardTable: React.FC<IBoardTable> = ({ type: boardType }) => {
    useEffect(() => {
        console.log(`Table ${boardType} was mounted`)
        return () => console.log(`Table ${boardType} was unmounted`)
        //eslint-disable-next-line
    }, [])
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
