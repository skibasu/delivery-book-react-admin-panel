import React from "react"
import ReactDom from "react-dom"
import { EStatus, useDialogContext } from "@/contexts/DialogProvider"
import Dialog from "./Dialog"
import { AnimatePresence } from "framer-motion"

const CustomAddProductsDialog = () => {
    const { dialogAddProductsStatus } = useDialogContext()

    return ReactDom.createPortal(
        <AnimatePresence>
            {dialogAddProductsStatus === EStatus.OPEN ? <Dialog /> : null}
        </AnimatePresence>,

        document.getElementById("portal") as HTMLDivElement
    )
}

export default CustomAddProductsDialog
