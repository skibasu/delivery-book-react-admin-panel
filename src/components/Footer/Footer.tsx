import React from "react"
import { LogoutButton } from "../LogoutButton/LogoutButton"

const Footer: React.FC = () => {
    return (
        <footer className="fixed left-0 bottom-0 right-0 h-[38px] border-t border-t-customGray flex justify-between items-center bg-storm px-7x py-3x w-full">
            <LogoutButton />
            <p className="text-navy text-2sm sm:text-sm">
                © 2023 Copyright DeliveryBook by Witalis
            </p>
        </footer>
    )
}

export default Footer
