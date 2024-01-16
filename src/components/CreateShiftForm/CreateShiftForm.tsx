import React, { useEffect } from "react"
import { Button, Input } from "../ui"

import { Controller, useForm } from "react-hook-form"

//import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
// import {
//     updateSocketError,
//     updateSocketLoading,
// } from "@/features/orders/ordersSlice"
//import { useSocketContext } from "@/contexts/SocketProvider"

//import { ReactComponent as Spinner } from "@/assets/svg/icon-spinner.svg"
import { shiftSchema } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"

interface IForm {
    title: string
}
interface IAddOrderForm {
    orderId: string
}
const defaultValues: IForm = {
    title: String(new Date()),
}
export const AddUserForm: React.FC<IAddOrderForm> = ({ orderId }) => {
    //  const { socketLoading } = useAppSelector((state) => state.orders)
    //  const dispatch = useAppDispatch()
    //  const { socket } = useSocketContext()

    const {
        control,
        handleSubmit,

        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(shiftSchema),
        mode: "onSubmit",
        defaultValues,
    })

    const onSubmit = async (data: IForm) => {
        try {
            console.log(data)
            // dispatch(updateSocketError(null))
            //dispatch(updateSocketLoading("pending"))

            //socket?.emit("updateOrder", { id: orderId, ...formatedData })
        } catch (e: any) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        return () => {
            // dispatch(updateSocketLoading("idle"))
            //reset({ selectedBy: "" })
        }

        //eslint-disable-next-line
    }, [])

    return (
        <form>
            <Controller
                name="title"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        error={errors.title?.message}
                        placeholder="Title"
                        label="Title"
                        name="title"
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <Button
                onClick={() => handleSubmit(onSubmit)()}
                className={`relative text-left disabled:opacity`}
                size="sm"
                // disabled={socketLoading === "pending" || !Boolean(selectedBy)}
            >
                <span className="px-4x">Save</span>
                {/* {socketLoading === "pending" ? (
                    <Spinner className="w-[10px] h-[10px] absolute right-3x inset-y-2/4 -translate-y-1/2" />
                ) : null} */}
            </Button>
        </form>
    )
}
