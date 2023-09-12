import React from "react"
import Board from "./Board/Board"
//import { useAppSelector } from "../../hooks/useStore"

const Home: React.FC = () => {
    // const { token } = useAppSelector((state) => state.auth)
    return (
        <section className="pt-[113px] max-w-[1200px] w-full mx-auto px-7x">
            <Board />
        </section>
    )
}

export default Home
