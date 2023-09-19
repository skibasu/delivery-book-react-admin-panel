import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo_1x.png"
import { Button } from "../ui"
import UserMinimalInfo from "../UserMinimalInfo/UserMinimalInfo"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"

const Header: React.FC = () => {
    return (
        <header className="px-7x py-2y bg-storm h-[60px] flex justify-between items-center border-b border-b-customGray">
            <figure className="shrink-0">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </figure>
            <Button size="sm" className="ml-auto mr-[88px]">
                <span className="flex w-full justify-between items-center">
                    <span className="block mr-[13px]">Add Order</span>
                    <PlusIcon />
                </span>
            </Button>
            <UserMinimalInfo />
        </header>
    )
}

export default Header
