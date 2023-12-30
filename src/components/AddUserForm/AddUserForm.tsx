import React, { useEffect } from "react"
import { Button, Popover, PopoverContent, PopoverTrigger } from "../ui"
import { ReactComponent as AddUserIcon } from "@/assets/svg/icon-add-user.svg"
import AppSelect from "../AppSelect/AppSelect"
import { Controller, useForm } from "react-hook-form"
import { EDataType } from "../AppSelect/types"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import {
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { useSocketContext } from "@/contexts/SocketProvider"
import { OrderStatus } from "@/features/orders/types"
import { ReactComponent as Spinner } from "@/assets/svg/icon-spinner.svg"
import { driverSchema } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"

interface IForm {
    selectedBy: string
}
interface IAddOrderForm {
    orderId: string
}
const defaultValues: IForm = {
    selectedBy: "",
}
export const AddUserForm: React.FC<IAddOrderForm> = ({ orderId }) => {
    const { socketLoading } = useAppSelector((state) => state.orders)
    const dispatch = useAppDispatch()
    const { socket } = useSocketContext()

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(driverSchema),
        mode: "onSubmit",
        defaultValues,
    })
    const selectedBy = watch("selectedBy")
    const onSubmit = async (data: IForm) => {
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
            reset({ selectedBy: "" })
        }

        //eslint-disable-next-line
    }, [])

    return (
        <Popover modal={true}>
            <PopoverTrigger>
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
                            }}
                            name="selectedBy"
                            inputValue={value}
                            label="Drivers"
                            placeholder="Select Driver"
                            className="w-full"
                            labelClassName=" mb-6y"
                            wrapperClasses="grow max-w-[303px]"
                            dataType={EDataType.USERS}
                            onFocus={() => {}}
                            error={errors.selectedBy?.message}
                        />
                    )}
                />
                <Button
                    onClick={() => handleSubmit(onSubmit)()}
                    className={`relative text-left disabled:opacity-${
                        socketLoading === "pending" ? "100" : "50"
                    }`}
                    size="sm"
                    disabled={
                        socketLoading === "pending" || !Boolean(selectedBy)
                    }
                >
                    <span className="px-4x">Save</span>
                    {socketLoading === "pending" ? (
                        <Spinner className="w-[10px] h-[10px] absolute right-3x inset-y-2/4 -translate-y-1/2" />
                    ) : null}
                </Button>
            </PopoverContent>
        </Popover>
    )
}
