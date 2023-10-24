import { useAppSelector } from "@/hooks/useStore"
import React, { useEffect } from "react"
import AuthForm from "../../components/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom"

const Home: React.FC = () => {
    const { token } = useAppSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        console.log("env", process.env.REACT_APP_URL)
        token && navigate("/", { replace: true })
        //eslint-disable-next-line
    }, [token])
    return (
        <section className="grow flex flex-column justify-center items-center bg-storm">
            <AuthForm />
        </section>
    )
}

export default Home
