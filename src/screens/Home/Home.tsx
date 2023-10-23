import { useSocketContext } from "@/contexts/SocketProvider"
import {
    addOrder,
    updateOrder,
    deleteOrder,
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { useAppDispatch } from "@/hooks/useStore"
import React, { useEffect } from "react"
import Board from "./Board/Board"
//import { useAppSelector } from "../../hooks/useStore"

const Home: React.FC = () => {
    // const { token } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    const { socket } = useSocketContext()
    useEffect(() => {
        socket?.on("joinRoom", (value) => {
            console.log(value) // true
        })
        socket?.on("exception", (value) => {
            dispatch(updateSocketError(value))
            dispatch(updateSocketLoading("failed"))
        })
        socket?.on("createOrder", (value: any) => {
            dispatch(addOrder(value))
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("succeeded"))
        })
        socket?.on("updateOrder", (value: any) => {
            dispatch(updateOrder(value))
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("succeeded"))
        })
        socket?.on("deleteOrder", (value) => {
            dispatch(deleteOrder(value))
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("succeeded"))
        })
        return () => {
            socket?.off("exception")
            socket?.off("createOrder")
            socket?.off("updateOrder")
            socket?.off("deleteOrder")
            socket?.off("joinRoom")
        }
        //eslint-disable-next-line
    }, [])
    return (
        <section className="pt-[113px] lg:max-w-[1200px] w-full mx-auto px-7x grow">
            <Board />
        </section>
    )
}

export default Home
