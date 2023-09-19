import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tableContent, tableHeaders } from "../BoardTable/tempContent"
import BoardTable, { EBoardType } from "../BoardTable/BoardTable"

const BoardTabs = () => {
    return (
        <section className="w-full">
            <Tabs defaultValue="Open" className="w-full">
                <TabsList className="w-full font-payton ">
                    <TabsTrigger
                        value="Open"
                        className="grow text-lg tracking-[1.6px] uppercase h-[40px]"
                    >
                        Open
                    </TabsTrigger>
                    <TabsTrigger
                        value="Selected"
                        className="grow text-lg tracking-[1.6px] uppercase h-[40px]"
                    >
                        Selected
                    </TabsTrigger>
                    <TabsTrigger
                        value="Pending"
                        className="grow text-lg tracking-[1.6px] uppercase h-[40px]"
                    >
                        Pending
                    </TabsTrigger>
                    <TabsTrigger
                        value="Done"
                        className="grow text-lg tracking-[1.6px] uppercase h-[40px]"
                    >
                        Done
                    </TabsTrigger>
                    <TabsTrigger
                        value="Drafts"
                        className="grow text-lg tracking-[1.6px] uppercase"
                    >
                        Drafts
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="Open">
                    <BoardTable
                        headers={tableHeaders}
                        tableContent={tableContent}
                        type={EBoardType.OPEN}
                    />
                </TabsContent>
                <TabsContent value="Selected">
                    <BoardTable
                        headers={tableHeaders}
                        tableContent={tableContent}
                        type={EBoardType.SELECTED}
                    />
                </TabsContent>
                <TabsContent value="Pending">
                    <BoardTable
                        headers={tableHeaders}
                        tableContent={tableContent}
                        type={EBoardType.PENDING}
                    />
                </TabsContent>
                <TabsContent value="Done">
                    <BoardTable
                        headers={tableHeaders}
                        tableContent={tableContent}
                        type={EBoardType.DONE}
                    />
                </TabsContent>
                <TabsContent value="Drafts">
                    <BoardTable
                        headers={tableHeaders}
                        tableContent={tableContent}
                        type={EBoardType.DRAFTS}
                    />
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default BoardTabs
