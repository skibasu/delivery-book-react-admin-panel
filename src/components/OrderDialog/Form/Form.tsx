import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Input, Textarea } from "@/components/ui"
import AppSelect from "../../AppSelect/AppSelect"
import { OrderStatus } from "@/features/orders/types"
import { EDataType } from "../../AppSelect/types"
import { IAddOrderForm } from "../types"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSocketContext } from "@/contexts/SocketProvider"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addOrderSchema } from "./validations/createOrderSchem"
import {
    updateSocketError,
    updateSocketLoading,
} from "@/features/orders/ordersSlice"
import { removeAllProducts, updateBasket } from "@/features/basket/basketSlice"
import AddProductsButton from "../AddProductsButton/AddProductsButton"
import AddOrderButton from "../SaveOrderButton/SaveOrderButton"
import AddOrderFormMessage from "../AddOrderForm/AddOrderFormMessage"
import PhoneNumberInput from "@/components/PhoneNumberInput/PhoneNumberInput"
import { usePhoneNumberContext } from "@/contexts/PhoneNumberProvider"
import { countries } from "@/components/PhoneNumberInput/countries"

import { EDialogType, useDialogContext } from "@/contexts/DialogProvider"
import { useShowToast } from "@/hooks/useShowToast"
import {
    decimalRegex,
    firstSpaceRegex,
    lastSpaceRegex,
    noDoubleSpacesRegex,
} from "./validations/regukar-expresions"

interface IForm {
    defaultValues: IAddOrderForm
    formType: "update" | "create"
    title: string
    orderId?: string
}

const Form: React.FC<IForm> = ({ defaultValues, formType, orderId, title }) => {
    const { setToast } = useShowToast()
    const { socket } = useSocketContext()
    const { close } = useDialogContext()
    const { socketLoading } = useAppSelector((state) => state.orders)
    const { orders: basket } = useAppSelector((state) => state.basket)
    const {
        currentCountry: { prefix },
        setCurrentCountry,
    } = usePhoneNumberContext()

    const onEnterKeyHandler = (
        e: React.KeyboardEvent<HTMLInputElement>,
        name: keyof IAddOrderForm
    ) => {
        if (e.key === "Enter") {
            onFocusInputElem(name)
        }
    }
    const onFocusInputElem = (name: keyof IAddOrderForm) => {
        const nextElem = document.querySelector(
            `[name=${name}]`
        ) as HTMLInputElement
        nextElem && nextElem.focus()
    }
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
    const [prevValues, setPrevValues] = useState<IAddOrderForm>(defaultValues)
    const onSubmit = async (data: IAddOrderForm) => {
        const currentData = JSON.stringify(data)
        const prevData = JSON.stringify(defaultValues)
        if (formType === "update" && currentData === prevData) {
            setToast("Nothing has changed", undefined, "rejected")
            return
        }
        const {
            city,
            flatNumber,
            streetName,
            houseNumber,
            note,
            phoneNumber,
            prefix,
            ...rest
        } = data
        setValue("products", basket, {
            shouldValidate: true,
            shouldDirty: false,
            shouldTouch: false,
        })
        const formatedData = {
            ...rest,
            price: +data.price || 0,
            phoneNumber: { prefix, number: phoneNumber },
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
                setPrevValues(data)
                socket?.emit("updateOrder", { id: orderId, ...formatedData })
            }
        } catch (e: any) {
            console.log(e.message)
        }
    }
    const trimValuesOnBlur = (key: keyof IAddOrderForm, value: string) => {
        setValue(
            key,
            value
                .replace(noDoubleSpacesRegex, " ")
                .replace(firstSpaceRegex, "")
                .replace(lastSpaceRegex, ""),
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        )
    }
    const trimPriceOnChange = (value: string) => {
        let trimedValue = value.replace(decimalRegex, "")
        const dotIndex = trimedValue.indexOf(".")
        if (dotIndex !== -1) {
            const decimalPlaces = trimedValue.length - dotIndex - 1
            if (decimalPlaces > 2) {
                trimedValue = trimedValue.substring(0, dotIndex + 3)
            }
            if (dotIndex === 0) {
                trimedValue = `0${trimedValue}`
            }
        }
        return trimedValue
    }
    const changeLoadingToIddle = () => {
        socketLoading === "succeeded" && dispatch(updateSocketLoading("idle"))
    }
    const inputCss = `w-full sm:w-[230px]`

    const status = watch("status")

    useEffect(() => {
        if (status !== OrderStatus.SELECTED) {
            setValue("selectedBy", null, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
            })
        }
        //eslint-disable-next-line
    }, [status])

    useEffect(() => {
        const sum = String(
            basket.reduce((a, b) => a + b.price * b.counter, 0) || ""
        )
        setValue("price", sum, {
            shouldValidate: sum ? true : false,
            shouldDirty: sum ? true : false,
            shouldTouch: false,
        })
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
            reset(prevValues)

            if (formType === "create") {
                dispatch(removeAllProducts())
            } else if (formType === "update") {
                dispatch(removeAllProducts())
                close(EDialogType.ORDER)
            }
        }
        //eslint-disable-next-line
    }, [socketLoading])
    useEffect(() => {
        if (formType === "update" && defaultValues.prefix) {
            const country = countries.find(
                (c) => c.prefix === defaultValues.prefix
            )
            country && setCurrentCountry(country)
        }
        return () => setCurrentCountry(countries[0])
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        onFocusInputElem("title")
        formType === "update" &&
            basket.length === 0 &&
            dispatch(updateBasket(defaultValues.products))
        //eslint-disable-next-line
    }, [formType])

    useEffect(() => {
        setValue("prefix", prefix, {
            shouldValidate: true,
            shouldDirty: false,
            shouldTouch: false,
        })

        //eslint-disable-next-line
    }, [prefix])
    return (
        <form
            className="w-full"
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => {
                const input = e.target as HTMLInputElement | HTMLTextAreaElement
                if (e.code === "Enter" && input.name !== "note") {
                    e.preventDefault()
                }
            }}
        >
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
                        onChange={onChange}
                        onBlur={() => {
                            trimValuesOnBlur("title", value)
                            onBlur()
                        }}
                        onFocus={changeLoadingToIddle}
                        onKeyDown={(e) => onEnterKeyHandler(e, "phoneNumber")}
                    />
                )}
            />

            <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <PhoneNumberInput
                        error={errors.phoneNumber?.message || ""}
                        value={value}
                        onChange={(e) =>
                            onChange(e.target.value.replace(/[^0-9]/g, ""))
                        }
                        label="Phone number"
                        name="phoneNumber"
                        onBlur={onBlur}
                        onFocus={changeLoadingToIddle}
                        onKeyDown={(e) => onEnterKeyHandler(e, "streetName")}
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
                            placeholder="Street"
                            label="Street"
                            name="streetName"
                            value={value}
                            className={inputCss}
                            onChange={onChange}
                            onBlur={() => {
                                trimValuesOnBlur("streetName", value)
                                onBlur()
                            }}
                            onFocus={changeLoadingToIddle}
                            onKeyDown={(e) =>
                                onEnterKeyHandler(e, "houseNumber")
                            }
                        />
                    )}
                />
                <Controller
                    name="houseNumber"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.houseNumber?.message}
                            placeholder="0A"
                            label="Number"
                            name="houseNumber"
                            value={value.toUpperCase()}
                            className="w-[92px]"
                            onChange={onChange}
                            onBlur={() => {
                                trimValuesOnBlur("houseNumber", value)
                                onBlur()
                            }}
                            onFocus={changeLoadingToIddle}
                            onKeyDown={(e) =>
                                onEnterKeyHandler(e, "flatNumber")
                            }
                        />
                    )}
                />
                <Controller
                    name="flatNumber"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.flatNumber?.message}
                            placeholder="0A"
                            label="Flat number"
                            name="flatNumber"
                            value={value.toUpperCase()}
                            className="w-[80px]"
                            onChange={onChange}
                            onBlur={() => {
                                trimValuesOnBlur("flatNumber", value)
                                onBlur()
                            }}
                            onFocus={changeLoadingToIddle}
                            onKeyDown={(e) => onEnterKeyHandler(e, "city")}
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
                        onChange={onChange}
                        onBlur={() => {
                            trimValuesOnBlur("city", value)
                            onBlur()
                        }}
                        onFocus={changeLoadingToIddle}
                        onKeyDown={(e) => onEnterKeyHandler(e, "note")}
                    />
                )}
            />
            <Controller
                name="note"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Textarea
                        error={errors.note?.message}
                        placeholder="Note ..."
                        label="Note"
                        name="note"
                        value={value}
                        className="w-full h-[45px]"
                        onChange={onChange}
                        onBlur={() => {
                            trimValuesOnBlur("note", value || "")
                            onBlur()
                        }}
                        onFocus={changeLoadingToIddle}
                    />
                )}
            />
            <div className="flex wrap w-full justify-between">
                <Controller
                    name="status"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <AppSelect
                            onValueChange={(v) => onChange(v)}
                            name="status"
                            inputValue={value}
                            label="Status"
                            className="w-full"
                            wrapperClasses="w-[133px]"
                            dataType={EDataType.STATUSES}
                            onBlur={onBlur}
                            onFocus={changeLoadingToIddle}
                        />
                    )}
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
                            placeholder="00.00"
                            label="Price"
                            name="price"
                            value={value}
                            className="w-[107px]"
                            wrapperClasses="grow max-w-[303px]"
                            onChange={(e) => {
                                const value = trimPriceOnChange(e.target.value)
                                console.log(value)
                                onChange(value)
                            }}
                            onFocus={changeLoadingToIddle}
                        />
                    )}
                />
            </div>

            <AddOrderButton />

            <AddOrderFormMessage
                validationMessages={[
                    errors?.title?.message || "",
                    errors.phoneNumber?.message || "",
                    errors.streetName?.message || "",
                    errors.houseNumber?.message || "",
                    errors.flatNumber?.message || "",
                    errors.city?.message || "",
                    errors.note?.message || "",
                    errors?.products?.message || "",
                    errors.price?.message || "",
                ]}
            />
        </form>
    )
}

export default Form
