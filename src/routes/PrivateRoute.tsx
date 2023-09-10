import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks/useStore"

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { token } = useAppSelector((state) => state.auth)

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}

export default PrivateRoute
