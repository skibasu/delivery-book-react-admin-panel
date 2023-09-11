import React from "react"
import { ISectionHeader } from "./types"
import backgroundImage from "@/assets/img/section-bg-1-tiny.png"
import Raport from "../Raport/Raport"

const SectionHeader: React.FC<ISectionHeader> = ({ title }) => {
    return (
        <div
            className="h-[105px] w-full rounded-b-lg shadow-2xl p-7x relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "left",
            }}
        >
            <h1 className="uppercase font-medium text-h1 text-textWhite tracking-[4.8px]">
                {title}
            </h1>
            <div className="absolute left-0 bottom-[-42px] w-full">
                <Raport />
            </div>
        </div>
    )
}

export default SectionHeader
