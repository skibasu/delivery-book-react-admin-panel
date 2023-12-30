import { useEffect, useState } from "react"
import { ToasterToast, useToast } from "@/components/ui/use-toast"
import { ReactComponent as SuccessIcon } from "@/assets/svg/icon-success.svg"
import { ReactComponent as DeletedIcon } from "@/assets/svg/icon-deleted.svg"
// export enum EToastMessages {
//     ORDER_UPDATED = "Order updated",
//     ORDER_SAVED = "Order saved",
//     DRIVER_ADDED = "Driver selected, order moved into SELECTED tab",
// }
export type TVariant = "updated" | "added" | "deleted"
export const useShowToast = () => {
    const { toast } = useToast()
    const [message, setMessage] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [variant, setVariant] = useState<TVariant | null>(null)

    const setToast = (
        title: string,
        description?: string,
        variant?: TVariant
    ) => {
        setMessage(title)
        setDescription(description || "")
        if (variant) {
            setVariant(variant)
        }
    }

    useEffect(() => {
        const desc: Pick<ToasterToast, "title" | "description" | "icon"> = {}
        if (!message) {
            return
        } else {
            desc.title = message
            if (description) {
                desc.description = description
            }
            if (variant) {
                if (variant === "added" || variant === "updated") {
                    desc.icon = SuccessIcon
                }
                if (variant === "deleted") {
                    desc.icon = DeletedIcon
                }
            }

            toast(desc)
            setToast("", "")
        }

        //eslint-disable-next-line
    }, [message])
    return { setToast }
}
