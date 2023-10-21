import React, { useEffect, useState } from "react"
import { ReactComponent as HomeIcon } from "@/assets/svg/icon-home.svg"
import { ReactComponent as ToggleIcon } from "@/assets/svg/icon-toggle-menu.svg"
import { ReactComponent as UsersIcon } from "@/assets/svg/icon-users.svg"
import { ReactComponent as StatisticsIcon } from "@/assets/svg/icon-statistics.svg"
import { Link } from "react-router-dom"
import { AnimationSequence, useAnimate, stagger } from "framer-motion"

const MenuPanel = () => {
    const [scope, animate] = useAnimate()
    const [isOpen, setIsOpen] = useState<boolean | undefined>()
    useEffect(() => {
        const sequenceIn = [
            [scope.current, { width: [55, 166] }, { duration: 0.6 }],
            [
                "#button",
                { rotate: ["0deg", "180deg"] },

                { duration: 0.85, at: "-0.6" },
            ],
            [
                ".span-text",
                { opacity: [0, 1], x: [-23, 0] },
                {
                    duration: 0.35,
                    x: { duration: 0.25 },
                    at: "-0.6",
                    delay: stagger(0.2),
                },
            ],
        ] as AnimationSequence
        const sequenceOut = [
            [
                ".span-text",
                { opacity: [1, 0], x: [0, -23] },
                {
                    duration: 0.15,
                    x: { duration: 0.25 },

                    delay: stagger(0.2, { from: "last" }),
                },
            ],
            [
                scope.current,
                { width: [166, 55] },
                { duration: 0.6, at: "-0.5" },
            ],
            [
                "#button",
                { rotate: ["180deg", "0deg"] },
                { duration: 0.85, at: "-0.6" },
            ],
        ] as AnimationSequence
        if (isOpen) {
            const initialAnimation = async () => {
                await animate(sequenceIn)
            }
            initialAnimation()
        } else if (isOpen !== undefined) {
            const exitAnimation = async () => {
                await animate(sequenceOut)
            }
            exitAnimation()
        }
        //eslint-disable-next-line
    }, [isOpen])
    return (
        <nav
            ref={scope}
            className={`overflow-hidden p-6y bg-storm h-full text-textWhite relative pt-[60px] w-[55px]`}
        >
            <div
                id="button"
                className="cursor-pointer absolute top-[15px] right-[15px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <ToggleIcon className="rotate-180" />
            </div>

            <ul>
                <li className="mb-7x">
                    <Link to="/" className={`flex items-center`}>
                        <HomeIcon className="shrink-0" color={"#FFF"} />
                        <span
                            className={`span-text ml-7x shrink-0 font-payton font-lg tracking-[1.8px] uppercase opacity-0`}
                        >
                            Home
                        </span>
                    </Link>
                </li>
                <li className="mb-7x">
                    <Link to="/users" className={`flex items-center`}>
                        <UsersIcon
                            className="shrink-0"
                            color={"#FFF"}
                            width="20px"
                            height="20px"
                        />
                        <span
                            className={`span-text ml-7x shrink-0 font-payton font-lg tracking-[1.8px] uppercase opacity-0`}
                        >
                            Users
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/users" className={`flex items-center`}>
                        <StatisticsIcon className="shrink-0" color={"#FFF"} />
                        <span
                            className={`span-text ml-7x shrink-0 font-payton font-lg tracking-[1.8px] uppercase opacity-0`}
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
