import React from "react"
import { ISectionHeader } from "./types"
import backgroundImage from "@/assets/img/section-bg-1-tiny.png"
import Raport from "../Raport/Raport"

const SectionHeader: React.FC<ISectionHeader> = ({ title }) => {
    return (
        <div
            className="w-full rounded-b-lg shadow-2xl"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "left",
            }}
        >
            <div className="mx-auto max-w-[1200px] p-7x relative h-[105px]">
                <h1 className="uppercase font-medium text-h1 text-textWhite tracking-[4.8px]">
                    {title}
                </h1>
                <div className="absolute left-0 bottom-[-42px] w-full">
                    <Raport />
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
