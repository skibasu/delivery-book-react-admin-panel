import React from "react"

import BoardTable from "../Board/BoardTable/BoardTable"
import { tableContent, tableHeaders } from "../Board/BoardTable/tempContent"
import BoardTabs from "./BoardTabs/BoardsTabs"

const Board = () => {
    return (
        <section className="w-full">
            <BoardTabs />
            <BoardTable headers={tableHeaders} tableContent={tableContent} />
        </section>
    )
}

export default Board
