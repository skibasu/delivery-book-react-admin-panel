import React, { useEffect } from "react"
import { ReactComponent as EditIcon } from "@/assets/svg/icon-edit.svg"
import { ReactComponent as DeleteIcon } from "@/assets/svg/icon-trash.svg"
import { EStatus, useDialogContext } from "@/contexts/DialogProvider"
import { Order } from "@/features/orders/types"
import { useAppDispatch } from "@/hooks/useStore"
import {
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { useSocketContext } from "@/contexts/SocketProvider"

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
    const { socket } = useSocketContext()
    const dispatch = useAppDispatch()
    const { setOrderForUpdate, setFormType, setDialogAddOrderStatus } =
        useDialogContext()

    useEffect(() => {
        return () => {
            dispatch(updateSocketLoading("idle"))
        }
        //eslint-disable-next-line
    }, [])
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
                        setFormType("update")
                        setDialogAddOrderStatus(EStatus.OPEN)
                    }}
                    className="p-0y cursor-pointer"
                >
                    <EditIcon />
                </div>
            ) : null}
            {deletable ? (
                <div
                    onClick={() => {
                        try {
                            dispatch(updateSocketError(null))
                            dispatch(updateSocketLoading("pending"))
                            socket?.emit("deleteOrder", { id: order._id })
                        } catch (e: any) {
                            console.log(e.message)
                        }
                    }}
                    className="p-0y cursor-pointer"
                >
                    <DeleteIcon />
                </div>
            ) : null}
        </div>
    )
}

export default ColumnActions
