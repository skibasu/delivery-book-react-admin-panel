import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import React, { useLayoutEffect, useState } from "react"
import AuthForm from "../../components/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
    const { _id } = useAppSelector((state) => state.auth)

    const navigate = useNavigate()

    useLayoutEffect(() => {
        _id && navigate("/", { replace: true })
        //eslint-disable-next-line
    }, [_id])
    return (
        <section className="grow flex flex-column justify-center items-center bg-storm">
            <AuthForm />
        </section>
    )
}

export default Login
