import { useEffect, useState } from "react"
import { ToasterToast, useToast } from "@/components/ui/use-toast"

// export enum EToastMessages {
//     ORDER_UPDATED = "Order updated",
//     ORDER_SAVED = "Order saved",
//     DRIVER_ADDED = "Driver selected, order moved into SELECTED tab",
// }
export const useShowToast = () => {
    const { toast } = useToast()
    const [message, setMessage] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const setToast = (title: string, description?: string) => {
        setMessage(title)
        setDescription(description || "")
    }

    useEffect(() => {
        const desc: Pick<ToasterToast, "title" | "description"> = {}
        if (!message) {
            return
        } else {
            desc.title = message
            if (description) {
                desc.description = description
            }
            toast(desc)
            setToast("", "")
        }

        //eslint-disable-next-line
    }, [message])
    return { setToast }
}
