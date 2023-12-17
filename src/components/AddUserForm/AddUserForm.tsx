import React, { useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui"
import { ReactComponent as AddUserIcon } from "@/assets/svg/icon-add-user.svg"
import AppSelect from "../AppSelect/AppSelect"
import { Controller, useForm } from "react-hook-form"
import { EDataType } from "../AppSelect/types"
import { useAppDispatch } from "@/hooks/useStore"
import {
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { useSocketContext } from "@/contexts/SocketProvider"
import { OrderStatus } from "@/features/orders/types"

interface IForm {
    selectedBy: string | null
}
interface IAddOrderForm {
    orderId: string
}
const defaultValues = {
    selectedBy: null,
}
export const AddUserForm: React.FC<IAddOrderForm> = ({ orderId }) => {
    const dispatch = useAppDispatch()
    const { socket } = useSocketContext()

    const {
        control,
        handleSubmit,

        //reset,
        formState: { errors },
    } = useForm<IForm>({
        //resolver: yupResolver(addOrderSchema),
        mode: "onTouched",
        defaultValues,
    })
    const onSubmit = async (data: IForm) => {
        console.log(data)
        const formatedData = { ...data, status: OrderStatus.SELECTED }
        try {
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("pending"))

            socket?.emit("updateOrder", { id: orderId, ...formatedData })
        } catch (e: any) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        return () => {
            dispatch(updateSocketLoading("idle"))
        }
        //eslint-disable-next-line
    }, [])
    return (
        <Popover>
            <PopoverTrigger asChild>
                <AddUserIcon />
            </PopoverTrigger>
            <PopoverContent>
                <Controller
                    name="selectedBy"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <AppSelect
                            onBlur={onBlur}
                            onValueChange={(v) => {
                                onChange(v)
                                handleSubmit(onSubmit)()
                            }}
                            name="selectedBy"
                            inputValue={value || ""}
                            label="Drivers"
                            placeholder="Select Driver"
                            className="w-full"
                            labelClassName=" mb-6y"
                            wrapperClasses="grow max-w-[303px]"
                            dataType={EDataType.USERS}
                            onFocus={() => {
                                console.log("focus")
                            }}
                            error={errors.selectedBy?.message}
                        />
                    )}
                />
            </PopoverContent>
        </Popover>
    )
}
