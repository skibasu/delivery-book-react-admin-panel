import React from "react"
import ReactDom from "react-dom"
import { AnimatePresence } from "framer-motion"
import { useAppSelector } from "@/hooks/useStore"
import Dialog from "./Dialog"

const BasketDialog = () => {
    const { orders } = useAppSelector((state) => state.basket)

    return ReactDom.createPortal(
        <AnimatePresence>
            {orders.length > 0 ? <Dialog /> : null}
        </AnimatePresence>,

        document.getElementById("portal") as HTMLDivElement
    )
}

export default BasketDialog
