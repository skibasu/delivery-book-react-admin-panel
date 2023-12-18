import { PaymentType } from "@/features/orders/types"
import { ordersSummary } from "@/helpers/helpers"
import { useAppSelector } from "@/hooks/useStore"
import React, { useEffect, useState } from "react"

const Raport = () => {
    const { data: orders } = useAppSelector((state) => state.orders)
    const [summaryAll, setSummaryAll] = useState<number>(0)
    const [summaryOnline, setSummaryOnline] = useState<number>(0)
    const [summaryCash, setSummaryCash] = useState<number>(0)
    const [summaryCard, setSummaryCard] = useState<number>(0)
    const [summaryPaid, setSummaryPaid] = useState<number>(0)

    useEffect(() => {
        if (orders.length > 0) {
            const all = ordersSummary(orders)
            setSummaryAll(all)
            const online = ordersSummary(orders, PaymentType.ONLINE)
            setSummaryOnline(online)
            const cash = ordersSummary(orders, PaymentType.CASH)
            setSummaryCash(cash)
            const card = ordersSummary(orders, PaymentType.CARD)
            setSummaryCard(card)
            const paid = ordersSummary(orders, PaymentType.PAYED)
            setSummaryPaid(paid)
        }
    }, [orders])
    return (
        <div className="flex justify-between px-7x w-full">
            <div className="flex flex-col px-6x py-2y bg-all rounded-lg min-w-[147px] shrink-0">
                <div className="pb-2y w-full border-b border-storm">
                    <p className="text-bold text-md">All</p>
                </div>
                <div className="pt-2y w-full flex justify-end">
                    <p className="font-payton text-xl tracing-[2px]">
                        {`${summaryAll}`} <span>zł</span>
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
                            {`${summaryOnline}`} <span>zł</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col px-6x py-2y bg-cash mr-8x rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Cash</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            {`${summaryCash}`}
                            <span>zł</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col px-6x py-2y bg-card mr-8x rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Card</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            {`${summaryCard}`} <span>zł</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col px-6x py-2y bg-paid rounded-lg min-w-[147px] shrink-0">
                    <div className="pb-2y w-full border-b border-storm">
                        <p className="text-bold text-md">Paid</p>
                    </div>
                    <div className="pt-2y w-full flex justify-end">
                        <p className="font-payton text-xl tracing-[2px]">
                            {`${summaryPaid}`} <span>zł</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Raport
