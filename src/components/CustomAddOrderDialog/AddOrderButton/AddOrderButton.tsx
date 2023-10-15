import React from "react"
import { Button } from "@/components/ui"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import { EStatus, useDialogContext } from "@/contexts/DialogProvider"

const AddProductsButton = () => {
    const { setDialogAddOrderStatus } = useDialogContext()

    return (
        <Button
            type="button"
            className="ml-auto mr-7.1x"
            size="sm"
            onClick={() => {
                setDialogAddOrderStatus(EStatus.OPEN)
            }}
        >
            <span className="flex w-full justify-between items-center ">
                <span className="block mr-[13px]">Add Order</span>
                <PlusIcon />
            </span>
        </Button>
    )
}

export default AddProductsButton
