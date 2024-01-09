import React from "react"
import CurrentShiftTitle from "@/components/CurrentShiftTitle/CurrentShiftTitle"

const Shift = () => {
    return (
        <section className="flex flex-colum pt-[113px] lg:max-w-[1200px] w-full mx-auto px-7x grow">
            <div className="flex w-full grow items-stretch">
                <div className="basis-1/3 border-r border-l border-r-customGrayLight border-l-customGrayLight px-7x">
                    <CurrentShiftTitle />
                </div>
                <div className="basis-1/3 border-r border-r-customGrayLight px-7x">
                    2
                </div>
                <div className="basis-1/3 border-r border-r-customGrayLight px-7x">
                    3
                </div>
            </div>
        </section>
    )
}
export default Shift
