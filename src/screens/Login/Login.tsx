import React from "react"
import AuthForm from "../../components/AuthForm/AuthForm"

const Home: React.FC = () => {
    return (
        <section className="grow flex flex-column justify-center items-center">
            <AuthForm />
        </section>
    )
}

export default Home
