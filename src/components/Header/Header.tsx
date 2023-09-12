import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo_1x.png"
import UserMinimalInfo from "../UserMinimalInfo/UserMinimalInfo"

const Header: React.FC = () => {
    return (
        <header className="px-7x py-2y bg-storm h-[60px] flex justify-between border-b border-b-customGray">
            <figure className="shrink-0">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </figure>
            <UserMinimalInfo />
        </header>
    )
}

export default Header