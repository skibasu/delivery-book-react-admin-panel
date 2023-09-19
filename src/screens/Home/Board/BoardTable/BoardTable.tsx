import React, { useState } from "react"
import { ITableHeaders, ITableContent } from "./tempContent"
import { ReactComponent as SortIcon } from "@/assets/svg/icon-sort.svg"
import { ReactComponent as AddUserIcon } from "@/assets/svg/icon-add-user.svg"
import { ReactComponent as EditIcon } from "@/assets/svg/icon-edit.svg"
import { ReactComponent as DeleteIcon } from "@/assets/svg/icon-trash.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui"

export enum EBoardType {
    OPEN = "OPEN",
    DRAFTS = "DRAFTS",
    SELECTED = "SELECTED",
    PENDING = "PENDING",
    DONE = "DONE",
}
interface IBoardTable {
    headers: ITableHeaders[]
    tableContent: ITableContent[]
    type?: EBoardType
}

const sortByKey = (
    key: keyof ITableContent,
    array: ITableContent[],
    asc?: true
) => {
    return [
        ...array.sort((a, b) => {
            if (a[key] > b[key]) {
                return asc ? 1 : -1
            } else if (a[key] < b[key]) {
                return asc ? -1 : 1
            } else {
                return 0
            }
        }),
    ]
}
const BoardTable: React.FC<IBoardTable> = ({
    headers,
    tableContent,
    type: boardType,
}) => {
    const [data, setData] = useState<ITableContent[]>(tableContent)
    return (
        <div>
            {/* Table Headers*/}
            <div className="w-full flex bg-customGrayLight rounded-sm mt-8x mb-7x">
                {headers.map(({ label, sort, key, width }, i) => {
                    const border = i === 0 ? "" : "border-l border-textWhite "
                    if (
                        key === "user" &&
                        (boardType === EBoardType.OPEN ||
                            boardType === EBoardType.DRAFTS)
                    ) {
                        return null
                    }
                    return (
                        <div
                            key={key}
                            className={`${border}h-[44px] px-6y py-1y flex justify-between items-center text-sm font-medium${
                                width ? " " + width : ""
                            }`}
                        >
                            <span>{label}</span>
                            {sort ? (
                                <span
                                    className="block w-[10px] h-[10px]"
                                    onClick={() => {
                                        const sortedData = sortByKey(
                                            key,
                                            tableContent
                                        )
                                        setData(sortedData)
                                    }}
                                >
                                    <SortIcon />
                                </span>
                            ) : null}
                        </div>
                    )
                })}
            </div>
            {/* Table Content*/}
            <div>
                {data.map((element) => {
                    const {
                        id,
                        adress: { streetName, flatNumber, houseNumber, city },
                        actions: { editable, deletable },
                        user: { firstName, lastName, url },
                        products,
                        status,
                        note,
                    } = element
                    return (
                        <div
                            key={id}
                            className="flex w-full transition-shadow ease-in-out border border-customGray rounded-sm shadow-md mb-5x hover:shadow-xl"
                            style={{ transitionDuration: "500ms" }}
                        >
                            {headers.map(({ key, width }, i) => {
                                const border =
                                    i === 0 ? "" : "border-l border-customGray "
                                if (key === "user") {
                                    return boardType !== EBoardType.OPEN &&
                                        boardType !== EBoardType.DRAFTS ? (
                                        <div
                                            className={`${border}${width} flex justify-center items-center px-4x py-7.1x`}
                                        >
                                            <Avatar>
                                                <AvatarImage
                                                    src={url}
                                                    alt={`${firstName} ${lastName}`}
                                                />
                                                <AvatarFallback>{`${firstName[0].toUpperCase()} ${lastName[0].toUpperCase()}`}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    ) : null
                                }
                                if (key === "adress") {
                                    return (
                                        <div
                                            className={`${border} grow px-6y py-7.1x flex flex-col justify-center${
                                                width ? " " + width : ""
                                            }`}
                                        >
                                            <div
                                                key={key}
                                                className={`flex items-center justify-between w-full`}
                                            >
                                                <div className={`shrink-0`}>
                                                    <p>
                                                        ul. {streetName}{" "}
                                                        {houseNumber} /{" "}
                                                        {flatNumber}
                                                    </p>
                                                    <p>{city}</p>
                                                </div>
                                                {boardType ===
                                                    EBoardType.OPEN ||
                                                boardType ===
                                                    EBoardType.DRAFTS ? (
                                                    <div className="shrink-0 grow-0 cursor-pointer">
                                                        <AddUserIcon />
                                                    </div>
                                                ) : null}
                                            </div>
                                            {!!note ? (
                                                <div className="border-t border-t-customGray pt-4x text-orange mt-1y">
                                                    {note}
                                                </div>
                                            ) : null}
                                        </div>
                                    )
                                }
                                if (key === "products") {
                                    return (
                                        <div
                                            key={key}
                                            className={`${border}${width} px-6y py-7.1x`}
                                        >
                                            <ul>
                                                {products.map((product) => (
                                                    <li key={product}>
                                                        {product}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                }
                                if (key === "status") {
                                    return (
                                        <div
                                            key={key}
                                            className={`${border}${width} flex justify-center items-center px-6y py-7.1x`}
                                        >
                                            <div
                                                className={`bg-${status.toLowerCase()} px-4x py-1x rounded-sm font-payton font-sm uppercase tracking-[1.4px] inline-flex items-center justify-center`}
                                            >
                                                {status}
                                            </div>
                                        </div>
                                    )
                                }
                                if (key === "actions") {
                                    return (
                                        <div
                                            key={key}
                                            className={`${border}${width} flex justify-center items-center px-6y py-7.1x`}
                                        >
                                            {editable ? (
                                                <div
                                                    onClick={() =>
                                                        console.log("edited")
                                                    }
                                                    className="p-0y cursor-pointer"
                                                >
                                                    <EditIcon />
                                                </div>
                                            ) : null}
                                            {deletable ? (
                                                <div
                                                    onClick={() =>
                                                        console.log("deleted")
                                                    }
                                                    className="p-0y cursor-pointer"
                                                >
                                                    <DeleteIcon />
                                                </div>
                                            ) : null}
                                        </div>
                                    )
                                }

                                return (
                                    <div
                                        key={key}
                                        className={`${border}${width} flex justify-center items-center px-6y py-7.1x`}
                                    >
                                        {element[key]}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BoardTable
