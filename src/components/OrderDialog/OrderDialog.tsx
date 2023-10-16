import React, { useEffect, useMemo } from "react"
import ReactDom from "react-dom"
import {
    EDialogType,
    EStatus,
    useDialogContext,
} from "@/contexts/DialogProvider"
import BasketDialog from "../BasketDialog/BasketDialog"
import CloseButton from "../CloseButton/CloseButton"
import Form from "./Form/Form"
import { OrderStatus, PaymentType } from "@/features/orders/types"
import { BasketProduct } from "@/features/basket/types"
import { IAddOrderForm } from "../CustomAddOrderDialog/AddOrderForm/types"

const OrderDialog = () => {
    const emptyValues: IAddOrderForm = {
        title: "",
        phoneNumber: "",
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
    }

    const {
        dialogAddOrderStatus,
        dialogAddProductsStatus,
        close,
        formType,
        orderForUpdate,
    } = useDialogContext()

    const currentOrder = useMemo(() => {
        return {
            title: orderForUpdate?.title || "",
            phoneNumber: orderForUpdate?.phoneNumber || "",
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

    useEffect(() => {
        console.log(currentOrder)
    }, [currentOrder])
    if (dialogAddOrderStatus === EStatus.OPEN) {
        return ReactDom.createPortal(
            <>
                <div
                    data-state={dialogAddOrderStatus}
                    className="fixed bg-black/80 backdrop-blur-sm h-full w-full z-[10] left-0 top-0 right-0 bottom-0"
                ></div>

                <div
                    className={`fixed flex items-center z-20 left-[50%]  top-[50%]  translate-x-[-50%] translate-y-[-50%] shadow-lg z-20 max-h-[820px]`}
                    style={{ height: "calc(100vh - 60px)" }}
                >
                    <CloseButton
                        className="absolute right-4x top-4x z-[51]"
                        onClick={() => close(EDialogType.ORDER, true)}
                    />
                    <div
                        className="md:w-[500px] max-w-[500px] px-7x pt-[34px] pb-[20px] h-full max-h-full overflow-y-auto z-50 bg-white rounded-lg bg-textWhite shadow-lg scrollbar scrollbar-w-[2px] scrollbar-thumb-storm/80 scrollbar-track-transparent"
                        data-products-status={dialogAddProductsStatus}
                        data-order-status={dialogAddOrderStatus}
                    >
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
                    {dialogAddProductsStatus === EStatus.CLOSE ? (
                        <BasketDialog />
                    ) : null}
                </div>
            </>,
            document.getElementById("portal") as HTMLDivElement
        )
    }
    return null
}

export default OrderDialog
