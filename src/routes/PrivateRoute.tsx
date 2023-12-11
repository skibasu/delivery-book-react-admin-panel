import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks/useStore"

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { _id } = useAppSelector((state) => state.auth)

    if (!_id) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}

export default PrivateRoute
