import { useSocketContext } from "@/contexts/SocketProvider"
import {
    addOrder,
    updateOrder,
    deleteOrder,
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import React, { useEffect } from "react"
import Board from "./Board/Board"
import { refreshUser } from "@/api/authApi"
import {
    ISortState,
    useTableSettingsContext,
} from "@/contexts/TableSettingsProvider"

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { timeOut } = useAppSelector((state) => state.auth)
    const { socket } = useSocketContext()
    const {
        getSortSettings,

        getActiveKey,
    } = useTableSettingsContext()

    useEffect(() => {
        socket?.on("joinRoom", (value) => {
            console.log(value) // true
        })
        socket?.on("exception", (value) => {
            dispatch(updateSocketError(value))
            dispatch(updateSocketLoading("failed"))
        })
        socket?.on("createOrder", (value: any) => {
            const activeKey = getActiveKey(value.status)
            const asc = getSortSettings(value.status)[
                activeKey as keyof ISortState
            ]

            dispatch(addOrder({ data: value, activeKey, asc }))
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("succeeded"))
        })
        socket?.on("updateOrder", (value: any) => {
            const activeKey = getActiveKey(value.status)
            const asc = getSortSettings(value.status)[
                activeKey as keyof ISortState
            ]

            dispatch(updateOrder({ data: value, activeKey, asc }))
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("succeeded"))
        })
        socket?.on("deleteOrder", (value) => {
            dispatch(deleteOrder(value))
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("succeeded"))
        })
        socket?.on("connect", () => {
            console.log("Socket connected")
        })

        return () => {
            socket?.off("exception")
            socket?.off("createOrder")
            socket?.off("updateOrder")
            socket?.off("deleteOrder")
            socket?.off("joinRoom")
        }
        //eslint-disable-next-line
    }, [socket, timeOut.token])
    useEffect(() => {
        const currentDate = new Date().getTime()
        const tm = timeOut.token - currentDate

        const timer = setTimeout(() => {
            socket?.off("exception")
            socket?.off("createOrder")
            socket?.off("updateOrder")
            socket?.off("deleteOrder")
            socket?.off("joinRoom")
            dispatch(refreshUser())
        }, tm)
        return () => clearTimeout(timer)
        //eslint-disable-next-line
    }, [timeOut.token])
    return (
        <section className="pt-[113px] lg:max-w-[1200px] w-full mx-auto px-7x grow">
            <Board />
        </section>
    )
}

export default Home
