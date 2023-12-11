import { logoutUser } from "@/api/authApi"
import { useAppDispatch } from "@/hooks/useStore"
import React from "react"

export const LogoutButton = () => {
    const dispatch = useAppDispatch()

    return (
        <button
            className="text-textWhite p-2y bg-sweetGrass"
            onClick={() => dispatch(logoutUser())}
        >
            LogOut
        </button>
    )
}
