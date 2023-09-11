import React from "react"

const Raport = () => {
    return (
        <div className="flex justify-between px-7x w-full">
            <div className="flex flex-col px-6x py-2y bg-all rounded-lg min-w-[147px] shrink-0">
                <div className="pb-2y w-full border-b border-storm">
                    <p className="text-bold text-md">All</p>
                </div>
                <div className="pt-2y w-full flex justify-end">
                    <p className="font-payton text-xl tracing-[2px]">
                        1083 <span>zł</span>
                    </p>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-col px-6x py-2y bg-online mr-8x rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Online</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            25 <span>zł</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col px-6x py-2y bg-cash mr-8x rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Cash</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            86 <span>zł</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col px-6x py-2y bg-card mr-8x rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Card</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            786 <span>zł</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col px-6x py-2y bg-paid rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Paid</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            186 <span>zł</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Raport
