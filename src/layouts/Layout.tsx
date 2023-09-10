import React from "react"
import { useAppSelector } from "../hooks/useStore"
import ProtectedLayout from "./ProtectedLayout"
import PublicLayout from "./PublicLayout"

const Layout: React.FC = () => {
    const { token } = useAppSelector((state) => state.auth)
    return !!token ? <ProtectedLayout /> : <PublicLayout />
}

export default Layout
