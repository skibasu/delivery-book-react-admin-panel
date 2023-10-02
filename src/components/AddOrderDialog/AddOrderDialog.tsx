import React from "react"
import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import AddOrderForm from "../AddOrderForm/AddOrderForm"
import { Portal } from "@radix-ui/react-dialog"

interface IAdddOrderButtonDialog {
    title: string
}
const AddOrderDialog: React.FC<IAdddOrderButtonDialog> = ({ title }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="ml-auto mr-[88px]">
                    <span className="flex w-full justify-between items-center">
                        <span className="block mr-[13px]">Add Order</span>
                        <PlusIcon />
                    </span>
                </Button>
            </DialogTrigger>
            <Portal className="overflow-auto">
                <DialogContent className="md:w-[500px] max-w-[500px] px-7x pt-[34px] pb-[50px] max-h-full overflow-scroll">
                    <DialogHeader className="mb-7.1">
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    {/* content */}
                    <AddOrderForm />
                </DialogContent>
            </Portal>
        </Dialog>
    )
}

export default AddOrderDialog
