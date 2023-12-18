import React from "react"
import { useAppSelector } from "../hooks/useStore"
import ProtectedLayout from "./ProtectedLayout"
import PublicLayout from "./PublicLayout"
import { SocketProvider } from "@/contexts/SocketProvider"

const Layout: React.FC = () => {
    const { _id } = useAppSelector((state) => state.auth)
    return !!_id ? (
        <SocketProvider>
            <ProtectedLayout />
        </SocketProvider>
    ) : (
        <PublicLayout />
    )
}

export default Layout
