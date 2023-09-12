import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Board = () => {
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
                <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Board
