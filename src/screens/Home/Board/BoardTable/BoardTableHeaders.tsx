import { OrderStatus } from "@/features/orders/types"
import React from "react"
import { tableHeaders } from "../labels/headers"
import { ReactComponent as SortIcon } from "@/assets/svg/icon-sort.svg"
import { useDispatch } from "react-redux"
import { sortOrderByKey } from "@/features/orders/ordersSlice"
import {
    ISortState,
    useTableSettingsContext,
} from "@/contexts/TableSettingsProvider"

interface IBoardTableHeaders {
    boardType: OrderStatus
}

const initialSortState = {
    createdAt: false,
    price: false,
    paymentType: false,
    selectedBy: false,
    driver: false,
}
const BoardTableHeaders: React.FC<IBoardTableHeaders> = ({ boardType }) => {
    const dispatch = useDispatch()
    const {
        getSortSettings,
        setSortSettingsByBoard,
        getActiveKey,
        setActiveKey,
    } = useTableSettingsContext()
    return (
        <div className="w-full flex bg-customGrayLight rounded-sm mt-8x mb-7x [&>*:first-child]:border-l-0 shrink-0">
            {tableHeaders.map(({ label, sort, key, width }, i) => {
                const activeKey = getActiveKey(boardType)
                const isActive = key === activeKey
                if (
                    key === "selectedBy" &&
                    (boardType === OrderStatus.OPEN ||
                        boardType === OrderStatus.DRAFT)
                ) {
                    return null
                }
                return (
                    <div
                        key={key}
                        className={`border-l border-textWhite h-[44px] px-6y py-1y flex justify-between items-center text-sm font-medium${
                            width ? " " + width : ""
                        } ${sort ? "cursor-pointer" : "cursor-auto"}`}
                        onClick={() => {
                            if (!sort) return
                            setSortSettingsByBoard(boardType, {
                                ...initialSortState,
                                [key as keyof ISortState]:
                                    !getSortSettings(boardType)[
                                        key as keyof ISortState
                                    ],
                            })
                            setActiveKey(boardType, key)

                            dispatch(
                                sortOrderByKey({
                                    boardType,
                                    key,
                                    asc: getSortSettings(boardType)[
                                        key as keyof ISortState
                                    ],
                                })
                            )
                        }}
                    >
                        <span>{label}</span>
                        {sort ? (
                            <span
                                className={`block w-[10px] h-[10px] rotate-${
                                    getSortSettings(boardType)[
                                        key as keyof ISortState
                                    ]
                                        ? "180"
                                        : "0"
                                }  ${
                                    isActive
                                        ? "[&>svg>path]:fill-storm"
                                        : "[&>svg>path]:fill-storm/50"
                                }`}
                            >
                                <SortIcon />
                            </span>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}

export default BoardTableHeaders
