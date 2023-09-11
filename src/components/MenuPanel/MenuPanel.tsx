import React, { useState } from "react"
import { ReactComponent as HomeIcon } from "@/assets/svg/icon-home.svg"
import { ReactComponent as ToggleIcon } from "@/assets/svg/icon-toggle-menu.svg"
import { ReactComponent as UsersIcon } from "@/assets/svg/icon-users.svg"
import { ReactComponent as StatisticsIcon } from "@/assets/svg/icon-statistics.svg"
import { Link } from "react-router-dom"

const MenuPanel = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <nav
            className={`${
                isOpen ? "w-[166px]" : "w-[55px]"
            } overflow-hidden p-6y bg-storm h-full text-textWhite`}
        >
            <div
                className="flex justify-end mb-[38px] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <ToggleIcon
                    className={`${!isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </div>
            <ul>
                <li className="mb-7x">
                    <Link
                        to="/"
                        className={`${
                            !isOpen ? "justify-center" : "justify-start"
                        } flex items-center`}
                    >
                        <HomeIcon className="shrink-0" color={"#FFF"} />
                        <span
                            className={`${
                                !isOpen ? "hidden" : ""
                            } ml-6y shrink-0 font-payton font-lg tracking-[1.8px] uppercase`}
                        >
                            Home
                        </span>
                    </Link>
                </li>
                <li className="mb-7x">
                    <Link
                        to="/users"
                        className={`${
                            !isOpen ? "justify-center" : "justify-start"
                        } flex items-center`}
                    >
                        <UsersIcon className="shrink-0" color={"#FFF"} />
                        <span
                            className={`${
                                !isOpen ? "hidden" : ""
                            } ml-6y shrink-0 font-payton font-lg tracking-[1.8px] uppercase`}
                        >
                            Users
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/users"
                        className={`${
                            !isOpen ? "justify-center" : "justify-start"
                        } flex items-center`}
                    >
                        <StatisticsIcon className="shrink-0" color={"#FFF"} />
                        <span
                            className={`${
                                !isOpen ? "hidden" : ""
                            } ml-6y shrink-0 font-payton font-lg tracking-[1.8px] uppercase`}
                        >
                            Statistics
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuPanel
