import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { arrOfStatuses } from "../labels/tabs"
import { tableHeaders } from "../labels/headers"
import BoardTable from "../BoardTable/BoardTable"
import { OrderStatus } from "@/features/orders/types"

const BoardTabs = () => {
    return (
        <div className="w-full">
            <Tabs
                defaultValue={OrderStatus.OPEN}
                className="w-full h-full flex flex-col"
            >
                <TabsList className="w-full font-payton grow-0">
                    {arrOfStatuses.map((status) => (
                        <TabsTrigger
                            key={status}
                            value={status}
                            className="grow text-lg tracking-[1.6px] uppercase h-[40px]"
                        >
                            {status}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {arrOfStatuses.map((status) => (
                    <TabsContent value={status} key={status} className="grow">
                        <BoardTable headers={tableHeaders} type={status} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default BoardTabs
