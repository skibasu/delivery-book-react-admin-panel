import React from "react"
import { ReactComponent as EditIcon } from "@/assets/svg/icon-edit.svg"
import { ReactComponent as DeleteIcon } from "@/assets/svg/icon-trash.svg"
import { useDialogContext } from "@/contexts/DialogProvider"
import { Order } from "@/features/orders/types"
import CustomAddOrderDialog from "@/components/CustomAddOrderDialog/CustomAddOrderDialog"

interface IColumnActions {
    editable: boolean
    deletable: boolean
    className: string
    order: Order
}
const ColumnActions: React.FC<IColumnActions> = ({
    editable,
    deletable,
    className,
    order,
}) => {
    const { setOrderForUpdate } = useDialogContext()
    return (
        <div
            className={`${
                className ? className + " " : ""
            }flex justify-center items-center px-6y py-7.1x`}
        >
            {editable ? (
                <div
                    onClick={() => {
                        setOrderForUpdate(order)
                    }}
                    className="p-0y cursor-pointer"
                >
                    <EditIcon />
                    <CustomAddOrderDialog />
                </div>
            ) : null}
            {deletable ? (
                <div
                    onClick={() => console.log("deleted")}
                    className="p-0y cursor-pointer"
                >
                    <DeleteIcon />
                </div>
            ) : null}
        </div>
    )
}

export default ColumnActions
