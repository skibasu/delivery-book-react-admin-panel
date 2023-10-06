import React, { useRef } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
    //DialogClose,
} from "../ui"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import { Portal } from "@radix-ui/react-dialog"
import AddProductsForm from "../AddProductsForm/AddProductsForm"
import { useDialogContext } from "@/contexts/DialogProvider"
import BasketMenuInput from "../Basket/BasketMenuInput"
import BasketDialog from "../BasketDialog/BasketDialog"

interface IAdddOrderButtonDialog {
    title: string
}
const AddProductsDialog: React.FC<IAdddOrderButtonDialog> = ({ title }) => {
    const { setHeight } = useDialogContext()
    const ref = useRef<HTMLDivElement>() as any

    const { height } = useDialogContext()
    return (
        <>
            <Dialog modal={false}>
                <DialogTrigger asChild>
                    <div
                        className="px-3x py-6x [& path]]:stroke-storm"
                        ref={ref}
                    >
                        <div
                            className="w-[25px] h-[25px] m-auto [&:hover>svg>path]:stroke-successedH"
                            onClick={() => {
                                console.log("Add product")
                                const h =
                                    ref?.current?.parentElement.parentElement
                                        .parentElement.parentElement
                                        .clientHeight
                                setHeight(h || 0)
                            }}
                        >
                            <PlusIcon className="[&>path]:stroke-successed [&>path]:transition block w-full h-full" />
                        </div>
                    </div>
                </DialogTrigger>

                <Portal className="overflow-y-auto overflow-x-visible">
                    <DialogOverlay className="hidden" />
                    <DialogContent
                        onPointerDownOutside={(e) => {
                            e.preventDefault()
                            console.log("Onpointer")
                        }}
                        onInteractOutside={(e) => {
                            e.preventDefault()
                            console.log("Onpointer")
                        }}
                        className={`md:w-[500px] max-w-[500px] px-7x pt-[34px] pb-[50px] max-h-full overflow-y-auto block`}
                        style={{ height }}
                    >
                        <div className="relative max-w-full w-full h-full">
                            <BasketMenuInput className="absolute right-4 top-4" />
                            <DialogHeader className="mb-7.1x">
                                <DialogTitle>{title}</DialogTitle>
                            </DialogHeader>
                            {/* content */}
                            <AddProductsForm />{" "}
                        </div>
                    </DialogContent>
                </Portal>
            </Dialog>
            <BasketDialog />
        </>
    )
}

export default AddProductsDialog
