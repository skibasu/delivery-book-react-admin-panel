import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MenuPanel from "@/components/MenuPanel/MenuPanel"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getOrders } from "@/api/ordersApi"
import { getUsers } from "@/api/usersApi"

const ProtectedLayout: React.FC = () => {
    const dispatch = useAppDispatch()
    const { token } = useAppSelector((state) => state.auth)
    // const { loading } = useAppSelector((state) => state.orders)

    useEffect(() => {
        token && dispatch(getOrders(token))
        token && dispatch(getUsers(token))

        //eslint-disable-next-line
    }, [token])

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
