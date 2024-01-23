import axios from "@/axios"
import { useShiftContext } from "@/contexts/ShiftProvider"
import { Shift } from "@/features/shift/types"
import React, { useEffect, useState } from "react"

const ShiftDetails = () => {
    const [details, setDetails] = useState<Shift>({} as Shift)
    const { shiftId } = useShiftContext()
    const getShiftDetails = async (shiftId: string) => {
        const { data } = await axios.get(`/shifts/${shiftId}`)
        setDetails(data)
        return data
    }
    useEffect(() => {
        if (!shiftId) return
        getShiftDetails(shiftId)
    }, [shiftId])
    return Object.keys(details).length > 0 ? (
        <div>
            <h2 className="text-h5 mb-7x">History</h2>
            <h2 className="text-h5 mb-4x">{details.title}</h2>
            <div className="flex justify-between">
                <p className="text-medium">Started At</p>
                <p>{details.createdAt}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-medium">Ended At</p>
                <p>{details.updatedAt}</p>
            </div>
        </div>
    ) : (
        <div>
            <h2 className="text-h5 mb-7x">History</h2>
            <p>Select shift for details</p>
        </div>
    )
}

export default ShiftDetails
