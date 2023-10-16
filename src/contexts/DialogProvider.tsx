import { removeAllProducts } from "@/features/basket/basketSlice"
import { Order } from "@/features/orders/types"
import { useAppDispatch } from "@/hooks/useStore"
import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useState,
} from "react"
export enum EStatus {
    OPEN = "open",
    CLOSE = "close",
}
export enum EDialogType {
    PRODUCTS = "PRODUCTS",
    ORDER = "ORDER",
}

interface IProps {
    close: (type: EDialogType, clean?: boolean) => void
    formType: "create" | "update" | undefined
    setFormType: Dispatch<"create" | "update">
    orderForUpdate: Order | undefined
    setOrderForUpdate: Dispatch<Order>
    dialogAddOrderStatus: EStatus
    dialogAddProductsStatus: EStatus
    setDialogAddOrderStatus: Dispatch<EStatus>
    setDialogAddProductsStatus: Dispatch<EStatus>
}

const DialogContext = createContext<IProps>({} as IProps)

const DialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch()

    const [dialogAddOrderStatus, setDialogAddOrderStatus] = useState<EStatus>(
        EStatus.CLOSE
    )
    const [dialogAddProductsStatus, setDialogAddProductsStatus] =
        useState<EStatus>(EStatus.CLOSE)

    const [orderForUpdate, setOrderForUpdate] = useState<Order>()
    const [formType, setFormType] = useState<"create" | "update" | undefined>()

    const close = (type: EDialogType, clean?: boolean) => {
        clean && dispatch(removeAllProducts())
        if (type === EDialogType.PRODUCTS) {
            setDialogAddProductsStatus(EStatus.CLOSE)
        } else if (type === EDialogType.ORDER) {
            setDialogAddOrderStatus(EStatus.CLOSE)
        } else {
            return
        }
    }

    return (
        <DialogContext.Provider
            value={{
                close,
                formType,
                setFormType,
                orderForUpdate,
                setOrderForUpdate,
                dialogAddOrderStatus,
                dialogAddProductsStatus,
                setDialogAddOrderStatus,
                setDialogAddProductsStatus,
            }}
        >
            {children}
        </DialogContext.Provider>
    )
}

const useDialogContext = () => useContext(DialogContext)

export { DialogProvider, useDialogContext }
