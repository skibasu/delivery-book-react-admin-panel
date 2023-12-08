import React from "react"
import ReactDOM from "react-dom"

import Dialog from "./Dialog"
import { AnimatePresence } from "framer-motion"
import { EStatus, useDialogContext } from "@/contexts/DialogProvider"
import { PhoneNumberProvider } from "@/contexts/PhoneNumberProvider"

const OrderDialog = () => {
    const { dialogAddOrderStatus } = useDialogContext()

    return ReactDOM.createPortal(
        <PhoneNumberProvider>
            <AnimatePresence>
                {dialogAddOrderStatus === EStatus.OPEN ? <Dialog /> : null}
            </AnimatePresence>
        </PhoneNumberProvider>,

        document.getElementById("portal") as HTMLDivElement
    )
}

export default OrderDialog
