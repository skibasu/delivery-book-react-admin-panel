import React from "react"
import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
} from "../ui"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import AddOrderForm from "../AddOrderForm/AddOrderForm"
import { DialogClose, Portal } from "@radix-ui/react-dialog"
import { X } from "lucide-react"

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
                <DialogOverlay />
                <DialogContent
                    onPointerDownOutside={(e) => {
                        e.preventDefault()
                        console.log("Onpointer")
                    }}
                    onInteractOutside={(e) => {
                        e.preventDefault()
                        console.log("Onpointer")
                    }}
                    className="md:w-[500px] max-w-[500px] px-7x pt-[34px] pb-[50px] max-h-full overflow-auto block"
                >
                    <DialogClose asChild={true}>
                        <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                    </DialogClose>
                    <DialogHeader className="mb-7.1x">
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
