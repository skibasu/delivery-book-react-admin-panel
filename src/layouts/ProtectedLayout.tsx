import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MenuPanel from "@/components/MenuPanel/MenuPanel"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import React, { useEffect, useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"

import { getUsers } from "@/api/usersApi"

import OrderDialog from "@/components/OrderDialog/OrderDialog"
import AddProductsDialog from "@/components/OrderDialog/AddProductsDialog/AddProductsDialog"
import BasketDialog from "@/components/OrderDialog/BasketDialog/BasketDialog"
import { getMenu } from "@/api/menuApi/getMenu"
import { refreshUser } from "@/api/authApi/refreshUser"
import { axiosResInterceptor } from "@/axios"
import { eraseCookie, getCookie } from "@/helpers/helpers"
import { logoutUserLocaly } from "@/features/auth/authSlice"
import { getProfile } from "@/api/profileApi"
import { getShift } from "@/api/shiftApi"
import { addShiftOrders } from "@/features/orders/ordersSlice"

const ProtectedLayout: React.FC = () => {
    const dispatch = useAppDispatch()
    const { _id } = useAppSelector((state) => state.auth)
    const { data } = useAppSelector((state) => state.shift)

    useEffect(() => {
        if (data.orders?.length > 0) {
            dispatch(addShiftOrders(data.orders))
        }
        //eslint-disable-next-line
    }, [data])

    const eraseCookies = () => {
        eraseCookie("_id")
        eraseCookie("refresh")
        eraseCookie("token")
    }
    useLayoutEffect(() => {
        axiosResInterceptor(async () => {
            const refreshToken = Number(getCookie("refresh")) || 0
            const timeStamp = new Date().getTime()
            if (refreshToken <= timeStamp) {
                eraseCookies()
                dispatch(logoutUserLocaly())
                return false
            } else {
                await dispatch(refreshUser())
                return true
            }
        })

        _id && dispatch(getProfile())
        _id && dispatch(getShift())
        _id && dispatch(getUsers())
        _id && dispatch(getMenu())

        //eslint-disable-next-line
    }, [])

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
            <Toaster />
            <Footer />
            <OrderDialog />
            <AddProductsDialog />
            <BasketDialog />
        </>
    )
}

export default ProtectedLayout
