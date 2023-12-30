import { OrderStatus } from "@/features/orders/types"
import { useAppSelector } from "@/hooks/useStore"
import React, { useEffect, useState } from "react"
import ColumnAdress from "../BoardColumns/ColumnAdress"
import ColumnProducts from "../BoardColumns/ColumnProducts"
import ColumnPhoneNumber from "../BoardColumns/ColumnPhoneNumber"
import ColumnPayment from "../BoardColumns/ColumnPayment"
import ColumnCreatedAt from "../BoardColumns/ColumnCreatedAt"
import ColumnActions from "../BoardColumns/ColumnActions"
import { tableHeaders } from "../labels/headers"
import ColumnUser from "../BoardColumns/ColumnUser"
import ColumnDefault from "../BoardColumns/ColumnDefault"
import { AnimationSequence, stagger, useAnimate } from "framer-motion"
import { ReactComponent as SpinnerIcon } from "@/assets/svg/icon-spinner-storm.svg"

interface IBoardTableContent {
    boardType: OrderStatus
}

const BoardTableContent: React.FC<IBoardTableContent> = ({ boardType }) => {
    const { filteredData, loading } = useAppSelector((state) => state.orders)

    const [scope, animate] = useAnimate()
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        if (isMounted && filteredData[boardType].length > 0) {
            const scp = scope.current as HTMLElement
            const lastElem = scp.querySelector(".row")
            const h = lastElem?.clientHeight || 0

            const sequenceIn = [
                [".hold", { y: [-h, 0] }, { duration: 0.3 }],

                [
                    ".row",
                    { y: [-20, 0], opacity: [0, 1] },

                    {
                        duration: 0.45,
                        opacity: { duration: 0.55 },
                        delay: stagger(0.2),
                    },
                ],
            ] as AnimationSequence

            const initialAnimation = async () => {
                const scp = scope.current as HTMLElement

                await animate(sequenceIn)
                const b = scp.querySelectorAll(".row")
                b.forEach((elem) => {
                    elem.classList.remove("row")
                    elem.classList.add("hold")
                })
            }
            initialAnimation()
        }
        //eslint-disable-next-line
    }, [filteredData[boardType], isMounted])

    useEffect(() => {
        !isMounted && setIsMounted(true)
    }, [isMounted])
    return (
        <div ref={scope}>
            {loading === "pending" ? (
                <SpinnerIcon
                    width="24px"
                    height="24px"
                    className="mx-auto my-9x"
                />
            ) : null}
            {filteredData[boardType].length > 0 &&
                filteredData[boardType].map((element) => {
                    const {
                        _id: id,
                        adress,
                        phoneNumber,
                        createdAt,
                        title,
                        actions: { editable, deletable },
                        selectedBy,
                        products,
                        paymentType,
                    } = element
                    return (
                        <div
                            key={id}
                            className="row flex w-full  ease-in-out border border-customGray rounded-sm shadow-md mb-5x hover:shadow-xl [&>*:first-child]:border-l-0 opacity-0 translate-y-[-20px]"
                        >
                            {tableHeaders.map(({ key, width }, i) => {
                                const borderAndWidth = `border-l border-customGray${
                                    width ? " " + width : ""
                                }`

                                if (key === "selectedBy" && key !== null) {
                                    return (
                                        <ColumnUser
                                            key={key}
                                            selectedBy={selectedBy}
                                            className={borderAndWidth}
                                            boardType={boardType}
                                        />
                                    )
                                }
                                if (key === "adress") {
                                    return (
                                        <ColumnAdress
                                            key={key}
                                            boardType={boardType}
                                            title={title}
                                            adress={adress}
                                            className={borderAndWidth}
                                            orderId={id}
                                        />
                                    )
                                }
                                if (key === "products") {
                                    return (
                                        <ColumnProducts
                                            key={key}
                                            className={borderAndWidth}
                                            products={products}
                                        />
                                    )
                                }
                                if (key === "phoneNumber") {
                                    return (
                                        <ColumnPhoneNumber
                                            key={key}
                                            className={borderAndWidth}
                                            phoneNumber={
                                                phoneNumber.prefix +
                                                phoneNumber.number
                                            }
                                        />
                                    )
                                }
                                if (key === "paymentType") {
                                    return (
                                        <ColumnPayment
                                            key={key}
                                            className={borderAndWidth}
                                            payment={paymentType}
                                        />
                                    )
                                }
                                if (key === "createdAt") {
                                    return (
                                        <ColumnCreatedAt
                                            key={key}
                                            className={borderAndWidth}
                                            createdAt={createdAt}
                                        />
                                    )
                                }
                                if (key === "actions") {
                                    return (
                                        <ColumnActions
                                            key={key}
                                            editable={editable}
                                            deletable={deletable}
                                            className={borderAndWidth}
                                            order={element}
                                        />
                                    )
                                }

                                return (
                                    <ColumnDefault
                                        key={key}
                                        text={element[key]}
                                        className={borderAndWidth}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
        </div>
    )
}

export default BoardTableContent
