import React, { useEffect, useRef } from "react"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import { useDialogContext } from "@/contexts/DialogProvider"

const AddProductsButton = () => {
    const { setHeight } = useDialogContext()
    const ref = useRef<HTMLDivElement>() as any

    useEffect(() => {
        console.log("Add buton current", ref.current)
    }, [])
    return (
        <div className="px-3x py-6x [& path]]:stroke-storm" ref={ref}>
            <div
                className="w-[25px] h-[25px] m-auto cursor-pointer [&:hover>svg>path]:stroke-successedH"
                onClick={() => console.log("Add product")}
            >
                <PlusIcon className="[&>path]:stroke-successed [&>path]:transition block w-full h-full" />
            </div>
        </div>
    )
}

export default AddProductsButton
