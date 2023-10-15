import { OrderStatus } from "@/features/orders/types"
import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import ColumnAdress from "../BoardColumns/ColumnAdress"
import ColumnProducts from "../BoardColumns/ColumnProducts"
import ColumnPhoneNumber from "../BoardColumns/ColumnPhoneNumber"
import ColumnPayment from "../BoardColumns/ColumnPayment"
import ColumnCreatedAt from "../BoardColumns/ColumnCreatedAt"
import ColumnActions from "../BoardColumns/ColumnActions"
import { tableHeaders } from "../labels/headers"
import ColumnUser from "../BoardColumns/ColumnUser"
import ColumnDefault from "../BoardColumns/ColumnDefault"

interface IBoardTableContent {
    boardType: OrderStatus
}

const BoardTableContent: React.FC<IBoardTableContent> = ({ boardType }) => {
    const { filteredData } = useAppSelector((state) => state.orders)

    return (
        <div>
            {filteredData[boardType].length > 0 &&
                filteredData[boardType].map((element) => {
                    const {
                        _id: id,
                        adress,
                        phoneNumber,
                        createdAt,
                        actions: { editable, deletable },
                        selectedBy,
                        products,
                        paymentType,
                    } = element
                    return (
                        <div
                            key={id}
                            className="flex w-full transition-shadow ease-in-out border border-customGray rounded-sm shadow-md mb-5x hover:shadow-xl [&>*:first-child]:border-l-0"
                            style={{ transitionDuration: "500ms" }}
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
                                            adress={adress}
                                            className={borderAndWidth}
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
                                            phoneNumber={phoneNumber}
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
