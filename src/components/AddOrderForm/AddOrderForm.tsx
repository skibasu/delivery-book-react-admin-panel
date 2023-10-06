import React from "react"
import { Controller, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../hooks/useStore"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input, Textarea } from "@/components/ui"
import { ReactComponent as ErrorIcon } from "@/assets/svg/icon-error.svg"
import { IAddOrderForm } from "./types"
import { addOrderSchema } from "./validation"
import AddOrderButton from "../AddOrderDialog/AddOrderButton/AddOrderButton"
import { useSocketContext } from "@/contexts/SocketProvider"
import {
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { OrderStatus, PaymentType } from "@/features/orders/types"
import AppSelect from "../AppSelect/AppSelect"
import { EDataType } from "../AppSelect/types"
import BasketInput from "../Basket/BasketInput"

const AddOrderForm: React.FC = () => {
    const { socket } = useSocketContext()
    const { socketError: error } = useAppSelector((state) => state.orders)
    const dispatch = useAppDispatch()
    const defaultValues: IAddOrderForm = {
        title: "",
        phoneNumber: "",
        price: "",
        paymentType: PaymentType.CASH,
        status: OrderStatus.OPEN,
        selectedBy: "",
        streetName: "",
        houseNumber: "",
        flatNumber: "",
        city: "",
        note: "",
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IAddOrderForm>({
        resolver: yupResolver(addOrderSchema),
        mode: "onTouched",
        defaultValues,
    })
    const onSubmit = async (data: IAddOrderForm) => {
        console.log("Submiting", data)
        try {
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("pending"))
            socket?.emit("createOrder", data)
        } catch (e: any) {
            console.log(e.message)
        }
    }
    const inputCss = `w-full sm:w-[230px]`

    const status = watch("status")

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="title"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        error={errors.title?.message}
                        placeholder="Customer name or title"
                        label="Customer name / order title"
                        name="title"
                        value={value}
                        className={inputCss}
                        onChange={(value) => onChange(value)}
                        onBlur={onBlur}
                    />
                )}
            />
            <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        error={errors.phoneNumber?.message}
                        placeholder="Phone number"
                        label="Phone number"
                        name="phoneNumber"
                        value={value}
                        className={inputCss}
                        onChange={(value) => onChange(value)}
                    />
                )}
            />
            <div className="flex justify-between wrap">
                <Controller
                    name="streetName"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.streetName?.message}
                            placeholder="Street name"
                            label="Street name"
                            name="streetName"
                            value={value}
                            className={inputCss}
                            onChange={(value) => onChange(value)}
                            onBlur={onBlur}
                        />
                    )}
                />
                <Controller
                    name="houseNumber"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.houseNumber?.message}
                            placeholder="House number"
                            label="House number"
                            name="houseNumber"
                            value={value}
                            className="w-[92px] ml-1y"
                            onChange={(value) => onChange(value)}
                            onBlur={onBlur}
                        />
                    )}
                />
                <Controller
                    name="flatNumber"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.flatNumber?.message}
                            placeholder="Flat number"
                            label="Flat number"
                            name="flatNumber"
                            value={value}
                            className="w-[80px] ml-1y"
                            onChange={(value) => onChange(value)}
                            onBlur={onBlur}
                        />
                    )}
                />
            </div>
            <Controller
                name="city"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        error={errors.city?.message}
                        placeholder="City"
                        label="City"
                        name="city"
                        value={value}
                        className={inputCss}
                        onChange={(value) => onChange(value)}
                        onBlur={onBlur}
                    />
                )}
            />
            <Controller
                name="note"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Textarea
                        error={errors.note?.message}
                        placeholder="Note"
                        label="Note"
                        name="note"
                        value={value}
                        className="w-full"
                        onChange={(value) => onChange(value)}
                        onBlur={onBlur}
                    />
                )}
            />
            <div className="flex wrap w-full justify-between">
                <Controller
                    name="status"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <AppSelect
                                onValueChange={onChange}
                                name="status"
                                inputValue={value}
                                label="Status"
                                className="w-full"
                                wrapperClasses="w-[133px]"
                                dataType={EDataType.STATUSES}
                                onBlur={onBlur}
                            />
                        )
                    }}
                />
                {status === OrderStatus.SELECTED ? (
                    <Controller
                        name="selectedBy"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <AppSelect
                                onBlur={onBlur}
                                onValueChange={onChange}
                                name="selectedBy"
                                inputValue={value || ""}
                                label="Driver"
                                className="w-full"
                                wrapperClasses="grow max-w-[303px]"
                                dataType={EDataType.USERS}
                            />
                        )}
                    />
                ) : null}
            </div>
            <BasketInput />
            <div className="flex wrap w-full justify-between">
                <Controller
                    name="paymentType"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <AppSelect
                            onBlur={onBlur}
                            onValueChange={onChange}
                            name="payment"
                            inputValue={value}
                            label="Payment"
                            className="w-full"
                            wrapperClasses="w-[133px]"
                            dataType={EDataType.PAYMENTS}
                        />
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            error={errors.price?.message}
                            placeholder="000.00 zł"
                            label="Price"
                            name="price"
                            value={value}
                            className="w-[107px]"
                            wrapperClasses="grow max-w-[303px]"
                            onChange={(value) => onChange(value)}
                        />
                    )}
                />
            </div>

            <AddOrderButton />

            {error ? (
                <div className="flex w-full items-center h-errorSpacer">
                    <ErrorIcon className="mr-2x w-[14px] h-[14px]" />
                    <p className="text-2sm text-hellFire">{error.message}</p>
                </div>
            ) : (
                <span className="block h-errorSpacer"></span>
            )}
        </form>
    )
}

export default AddOrderForm
