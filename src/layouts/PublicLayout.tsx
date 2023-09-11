import Footer from "@/components/Footer/Footer"
import React from "react"
import { Outlet } from "react-router-dom"

const PublicLayout: React.FC = () => {
    return (
        <>
            <main className="grow flex flex-column">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout
