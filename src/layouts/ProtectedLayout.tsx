import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MenuPanel from "@/components/MenuPanel/MenuPanel"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import React, { useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getOrders } from "@/api/ordersApi"
import { getUsers } from "@/api/usersApi"

import OrderDialog from "@/components/OrderDialog/OrderDialog"
import AddProductsDialog from "@/components/OrderDialog/AddProductsDialog/AddProductsDialog"
import BasketDialog from "@/components/OrderDialog/BasketDialog/BasketDialog"
import { getMenu } from "@/api/menuApi/getMenu"

const ProtectedLayout: React.FC = () => {
    const dispatch = useAppDispatch()
    const { token } = useAppSelector((state) => state.auth)

    useLayoutEffect(() => {
        token && dispatch(getOrders(token))
        token && dispatch(getUsers(token))
        token && dispatch(getMenu(token))

        //eslint-disable-next-line
    }, [token])

    return (
        <>
            <Header />
            <main className="grow pt-[60px] pb-[80px]">
                <div className="h-full flex items-stretch">
                    <div className="h-full shrink-0">
                        <MenuPanel />
                    </div>
                    <div className="grow flex flex-col">
                        <SectionHeader title="Home" />
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
            <OrderDialog />
            <AddProductsDialog />
            <BasketDialog />
        </>
    )
}

export default ProtectedLayout
