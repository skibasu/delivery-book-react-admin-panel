import React from "react"
import { Button } from "@/components/ui"
import { ReactComponent as BasketIcon } from "@/assets/svg/icon-basket.svg"
import { EStatus, useDialogContext } from "@/contexts/DialogProvider"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { updateSocketLoading } from "@/features/orders/ordersSlice"

const AddProductsButton = () => {
    const dispatch = useAppDispatch()
    const { socketLoading } = useAppSelector((state) => state.orders)
    const { setDialogAddProductsStatus } = useDialogContext()
    const changeLoadingToIddle = () => {
        socketLoading === "succeeded" && dispatch(updateSocketLoading("idle"))
    }

    return (
        <Button
            type="button"
            className="mb-7x mt-2x"
            size="sm"
            onClick={() => {
                changeLoadingToIddle()
                setDialogAddProductsStatus(EStatus.OPEN)
            }}
            variant="secondary"
        >
            <span className="flex flex-row-reverse w-full justify-between items-center ">
                <span className="block ml-[13px]">Add Products</span>
                <BasketIcon
                    className="[&>path]:fill-textWhite translate-y-[-3px]"
                    width="16px"
                    height="16px"
                />
            </span>
        </Button>
    )
}

export default AddProductsButton
