import React, { useEffect, useMemo } from "react"
import { usePresence, useAnimate, AnimationSequence } from "framer-motion"
import { EDialogType, useDialogContext } from "@/contexts/DialogProvider"
import { OrderStatus, PaymentType } from "@/features/orders/types"
import CloseButton from "../CloseButton/CloseButton"
import Form from "./Form/Form"
import { BasketProduct } from "@/features/basket/types"
import { IAddOrderForm } from "./types"
import useLockedBody from "@/hooks/useLockedBody"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { updateSocketLoading } from "@/features/orders/ordersSlice"

const Dialog = () => {
    const { close, formType, orderForUpdate } = useDialogContext()
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()
    const { setLocked } = useLockedBody()
    const { socketLoading } = useAppSelector((state) => state.orders)
    const dispatch = useAppDispatch()

    const emptyValues: IAddOrderForm = useMemo(
        () => ({
            title: "",
            phoneNumber: "",
            prefix: "+48",
            price: "",
            paymentType: PaymentType.CASH,
            status: OrderStatus.OPEN,
            selectedBy: null,
            streetName: "",
            houseNumber: "",
            flatNumber: "",
            city: "Wrocław",
            note: "",
            products: [] as BasketProduct[],
        }),
        []
    )
    const currentOrder = useMemo(() => {
        return {
            title: orderForUpdate?.title || "",
            phoneNumber: orderForUpdate?.phoneNumber.number || "",
            prefix: orderForUpdate?.phoneNumber.prefix || "",
            price: "",
            paymentType: orderForUpdate?.paymentType || "",
            status: orderForUpdate?.status || "",
            selectedBy: orderForUpdate?.selectedBy?._id || null,
            streetName: orderForUpdate?.adress?.streetName || "",
            houseNumber: orderForUpdate?.adress?.houseNumber || "",
            flatNumber: orderForUpdate?.adress?.flatNumber || "",
            city: orderForUpdate?.adress?.city || "",
            note: orderForUpdate?.adress?.note || "",
            products: orderForUpdate?.products || [],
        }
    }, [orderForUpdate])

    const changeLoadingToIddle = () => {
        socketLoading === "succeeded" && dispatch(updateSocketLoading("idle"))
    }
    useEffect(() => {
        const sequenceIn = [
            ["#bg", { opacity: [0, 1] }, { duration: 0.3 }],
            [
                "#form",
                { opacity: [0, 1], y: ["-55%", "-50%"], x: ["-50%", "-50%"] },
                { duration: 0.3 },
            ],
        ] as AnimationSequence
        const sequenceOut = [
            [
                "#form",
                { opacity: [1, 0], y: ["-50%", "-55%"], x: ["-50%", "-50%"] },
                { duration: 0.1 },
            ],
            ["#bg", { opacity: [1, 0] }, { duration: 0.3, at: "-0.1" }],
        ] as AnimationSequence
        if (isPresent) {
            setLocked(true)
            const initialAnimation = async () => {
                await animate(sequenceIn)
            }
            initialAnimation()
        } else {
            const exitAnimation = async () => {
                await animate(sequenceOut)
                safeToRemove()
                changeLoadingToIddle()
                setLocked(false)
            }
            exitAnimation()
        }
        //eslint-disable-next-line
    }, [isPresent])

    return (
        <div ref={scope} key="dialog">
            <div
                id="bg"
                className="fixed bg-black/80 backdrop-blur-sm h-full w-full z-[10] left-0 top-0 right-0 bottom-0 z-50"
            ></div>
            <div
                id="form"
                className={`fixed flex items-center z-20 left-[50%]  top-[50%]  translate-x-[-50%] translate-y-[-50%] shadow-lg z-20 max-h-[820px]`}
                style={{ height: "calc(100vh - 60px)" }}
            >
                <CloseButton
                    className="absolute right-4x top-4x z-[51]"
                    onClick={() => close(EDialogType.ORDER, true)}
                />
                <div className="md:w-[500px] max-w-[500px] px-7x pt-[34px] pb-[20px] h-full max-h-full overflow-y-auto z-50 bg-white rounded-lg bg-textWhite shadow-lg scrollbar scrollbar-w-[2px] scrollbar-thumb-storm/80 scrollbar-track-transparent">
                    {formType ? (
                        <Form
                            title={
                                formType === "create"
                                    ? "Add Order"
                                    : "Update Order"
                            }
                            defaultValues={
                                formType === "create"
                                    ? emptyValues
                                    : currentOrder
                            }
                            formType={formType}
                            orderId={
                                formType === "create"
                                    ? undefined
                                    : orderForUpdate?._id
                            }
                        />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Dialog
