import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import AuthForm from "../../components/AuthForm/AuthForm"
import { Navigate } from "react-router-dom"

const Login: React.FC = () => {
    const { _id } = useAppSelector((state) => state.auth)

    return !_id ? (
        <section className="grow flex flex-column justify-center items-center bg-storm">
            <AuthForm />
        </section>
    ) : (
        <Navigate to="/" replace={true} />
    )
}

export default Login
