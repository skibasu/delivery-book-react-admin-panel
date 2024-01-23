import React from "react"
import { Button } from "../ui"
import { useAppSelector } from "@/hooks/useStore"

const CurrentShiftTitle = () => {
    const { title } = useAppSelector((state) => state.shift.data)
    return (
        <div className="mb-7x">
            <h2 className="text-h5 mb-4x">Current shift :</h2>
            <p className="mb-7.1x pl-3x">{title}</p>
            <Button size="sm">Save</Button>
        </div>
    )
}

export default CurrentShiftTitle
