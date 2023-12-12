import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MenuPanel from "@/components/MenuPanel/MenuPanel"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import React, { useEffect, useLayoutEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getOrders } from "@/api/ordersApi"
import { getUsers } from "@/api/usersApi"

import OrderDialog from "@/components/OrderDialog/OrderDialog"
import AddProductsDialog from "@/components/OrderDialog/AddProductsDialog/AddProductsDialog"
import BasketDialog from "@/components/OrderDialog/BasketDialog/BasketDialog"
import { getMenu } from "@/api/menuApi/getMenu"
import { refreshUser } from "@/api/authApi/refreshUser"
import { axiosReqInterceptor } from "@/axios"
import { eraseCookie, getCookie } from "@/helpers/helpers"
import { logoutUserLocaly } from "@/features/auth/authSlice"

const ProtectedLayout: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { _id, timeOut } = useAppSelector((state) => state.auth)

    useLayoutEffect(() => {
        axiosReqInterceptor(
            () => {
                const refreshToken = Number(getCookie("refresh")) || 0
                const accessToken = Number(getCookie("token")) || 0
                const timeStamp = new Date().getTime()

                if (refreshToken <= timeStamp) {
                    eraseCookie("_id")
                    eraseCookie("refresh")
                    eraseCookie("token")
                    dispatch(logoutUserLocaly())
                    // navigate("/login")
                } else if (accessToken <= timeStamp) {
                    dispatch(refreshUser())
                }
            },
            () => {
                navigate("/login")
            }
        )

        _id && dispatch(getOrders())
        _id && dispatch(getUsers())
        _id && dispatch(getMenu())

        //eslint-disable-next-line
    }, [_id, timeOut.token])
    //  useEffect(() => {
    //      console.log("Token time changed")
    //      const currentDate = new Date().getTime()
    //      const tm = timeOut.token - currentDate
    //      console.log(tm)
    //      const timer = setTimeout(() => {
    //          console.log("Access Token Expired - refreshing ....")
    //          dispatch(refreshUser())
    //      }, tm)
    //      return () => clearTimeout(timer)
    //      //eslint-disable-next-line
    //  }, [timeOut])

    useEffect(() => {
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
                        <div className="bg-black p-8x text-textWhite">
                            {timeOut.token}
                        </div>
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
