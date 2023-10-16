import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Input, Textarea } from "@/components/ui"
import AppSelect from "../../AppSelect/AppSelect"
import { OrderStatus } from "@/features/orders/types"
import { EDataType } from "../../AppSelect/types"
import { IAddOrderForm } from "../../CustomAddOrderDialog/AddOrderForm/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSocketContext } from "@/contexts/SocketProvider"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addOrderSchema } from "./validations/createOrderSchem"
import {
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { removeAllProducts, updateBasket } from "@/features/basket/basketSlice"
import AddProductsButton from "../../CustomAddOrderDialog/AddProductsButton"
import CustomAddProductsDialog from "../../CustomAddProductsDialog/CustomAddProductsDialog"
import AddOrderButton from "../../CustomAddOrderDialog/SaveOrderButton"
import AddOrderFormMessage from "../../CustomAddOrderDialog/AddOrderForm/AddOrderFormMessage"

interface IForm {
    defaultValues: IAddOrderForm
    formType: "update" | "create"
    title: string
    orderId?: string
}

const Form: React.FC<IForm> = ({ defaultValues, formType, orderId, title }) => {
    const { socket } = useSocketContext()
    const { socketLoading } = useAppSelector((state) => state.orders)
    const { orders: basket } = useAppSelector((state) => state.basket)
    const dispatch = useAppDispatch()
    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        watch,
    } = useForm<IAddOrderForm>({
        resolver: yupResolver(addOrderSchema),
        mode: "onTouched",
        defaultValues,
    })
    const onSubmit = async (data: IAddOrderForm) => {
        const { city, flatNumber, streetName, houseNumber, note, ...rest } =
            data
        setValue("products", basket, {
            shouldValidate: true,
            shouldDirty: false,
            shouldTouch: false,
        })
        const formatedData = {
            ...rest,
            products: basket,
            adress: { city, flatNumber, streetName, houseNumber, note },
        }
        try {
            dispatch(updateSocketError(null))
            dispatch(updateSocketLoading("pending"))
            if (formType === "create") {
                socket?.emit("createOrder", formatedData)
            }
            if (formType === "update") {
                socket?.emit("updateOrder", { id: orderId, ...formatedData })
            }
        } catch (e: any) {
            console.log(e.message)
        }
    }

    const changeLoadingToIddle = () => {
        socketLoading === "succeeded" && dispatch(updateSocketLoading("idle"))
    }
    const inputCss = `w-full sm:w-[230px]`

    const status = watch("status")

    useEffect(() => {
        setValue(
            "price",
            String(basket.reduce((a, b) => a + b.price * b.counter, 0)),
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: false,
            }
        )
        basket.length &&
            setValue("products", basket, {
                shouldValidate: true,
                shouldDirty: false,
                shouldTouch: false,
            })

        //eslint-disable-next-line
    }, [basket])

    useEffect(() => {
        if (socketLoading === "succeeded") {
            reset(defaultValues)
            dispatch(removeAllProducts())
        }
        //eslint-disable-next-line
    }, [socketLoading])

    useEffect(() => {
        formType === "update" && dispatch(updateBasket(defaultValues.products))
        //eslint-disable-next-line
    }, [formType])

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-h3 mb-7.1x font-medium">{title}</h2>
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
                        onFocus={changeLoadingToIddle}
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
                        onFocus={changeLoadingToIddle}
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
                            onFocus={changeLoadingToIddle}
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
                            onFocus={changeLoadingToIddle}
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
                            onFocus={changeLoadingToIddle}
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
                        value={value || "Wrocław"}
                        className={inputCss}
                        onChange={(value) => onChange(value)}
                        onBlur={onBlur}
                        onFocus={changeLoadingToIddle}
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
                        defaultValue={value}
                        className="w-full"
                        onChange={(value) => onChange(value)}
                        onBlur={onBlur}
                        onFocus={changeLoadingToIddle}
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
                                onValueChange={(v) => {
                                    onChange(v)
                                    if (v !== OrderStatus.SELECTED) {
                                        setValue("selectedBy", null, {
                                            shouldDirty: true,
                                            shouldTouch: true,
                                            shouldValidate: true,
                                        })
                                    }
                                }}
                                name="status"
                                inputValue={value}
                                label="Status"
                                className="w-full"
                                wrapperClasses="w-[133px]"
                                dataType={EDataType.STATUSES}
                                onBlur={onBlur}
                                onFocus={changeLoadingToIddle}
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
                                onFocus={changeLoadingToIddle}
                                error={errors.selectedBy?.message}
                            />
                        )}
                    />
                ) : null}
            </div>

            <AddProductsButton />
            <CustomAddProductsDialog />

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
                            onFocus={changeLoadingToIddle}
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
                            onFocus={changeLoadingToIddle}
                        />
                    )}
                />
            </div>

            <AddOrderButton />

            <AddOrderFormMessage
                validationMessage={errors?.products?.message}
            />
        </form>
    )
}

export default Form