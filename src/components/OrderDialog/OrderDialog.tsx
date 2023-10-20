import React from "react"
import ReactDOM from "react-dom"

import Dialog from "./Dialog"
import { AnimatePresence } from "framer-motion"
import { EStatus, useDialogContext } from "@/contexts/DialogProvider"

const OrderDialog = () => {
    const { dialogAddOrderStatus } = useDialogContext()

    return ReactDOM.createPortal(
        <AnimatePresence>
            {dialogAddOrderStatus === EStatus.OPEN ? <Dialog /> : null}
        </AnimatePresence>,

        document.getElementById("portal") as HTMLDivElement
    )
}

export default OrderDialog
