import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MenuPanel from "@/components/MenuPanel/MenuPanel"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import React from "react"
import { Outlet } from "react-router-dom"

const ProtectedLayout: React.FC = () => {
    return (
        <>
            <Header />

            <main className="grow">
                <div className="h-full flex">
                    <div className="h-full shrink-0">
                        <MenuPanel />
                    </div>
                    <div className="grow">
                        <SectionHeader title="Home" />
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ProtectedLayout
