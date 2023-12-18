import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks/useStore"
import { TableSettingsProvider } from "@/contexts/TableSettingsProvider"

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { _id } = useAppSelector((state) => state.auth)

    if (!_id) {
        return <Navigate to="/login" replace />
    }

    return <TableSettingsProvider>{children} </TableSettingsProvider>
}

export default PrivateRoute
