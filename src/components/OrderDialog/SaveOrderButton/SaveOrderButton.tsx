import React from "react"
import { Button } from "@/components/ui"
import { ReactComponent as Spinner } from "@/assets/svg/icon-spinner.svg"
import { useAppSelector } from "@/hooks/useStore"

const AddOrderButton = () => {
    const { socketLoading: loading } = useAppSelector((state) => state.orders)

    return (
        <Button
            size="full"
            className="mt-6x relative disabled:opacity-1"
            disabled={loading === "pending"}
        >
            Save
            {loading === "pending" ? (
                <Spinner className="absolute right-7x inset-y-2/4 -translate-y-1/2 w-[20px] h-[20px]" />
            ) : null}
        </Button>
    )
}

export default AddOrderButton
