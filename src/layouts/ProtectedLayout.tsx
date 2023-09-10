import React from "react"
import { Outlet } from "react-router-dom"

const ProtectedLayout: React.FC = () => {
    return (
        <>
            <header>header</header>
            <main className="grow">
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    )
}

export default ProtectedLayout
