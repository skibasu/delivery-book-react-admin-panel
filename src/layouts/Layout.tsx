import React from "react"
import { useAppSelector } from "../hooks/useStore"
import ProtectedLayout from "./ProtectedLayout"
import PublicLayout from "./PublicLayout"
import { SocketProvider } from "@/contexts/SocketProvider"

const Layout: React.FC = () => {
    const { token } = useAppSelector((state) => state.auth)
    return !!token ? (
        <SocketProvider>
            <ProtectedLayout />
        </SocketProvider>
    ) : (
        <PublicLayout />
    )
}

export default Layout
