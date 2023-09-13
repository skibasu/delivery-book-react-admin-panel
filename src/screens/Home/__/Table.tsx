import React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/"

import { getRounded } from "./helpers"

const BoardTable = () => {
    return (
        <Table className="">
            {/* <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className="">
                    {tableHeaders.map(({ className, label, sort }, i) => {
                        const max = tableHeaders.length - 1
                        const roundedClass = getRounded(i, max)

                        return (
                            <TableHead
                                className={`h-[44px] px-6y py-1y border-r border-r-navy bg-customGrayLight${roundedClass}${
                                    className ? " " + className : ""
                                } `}
                            >
                                {label}
                            </TableHead>
                        )
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableContent.map(
                    ({
                        streetName,
                        city,
                        flatNumber,
                        phoneNumber,
                        products,
                        status,
                        createdAt,
                        deadline,
                        price,
                        actions,
                    }) => {
                        const arrayOfContent: [
                            Pick<
                                ITableContent,
                                "city" | "streetName" | "flatNumber"
                            >,
                            string[],
                            string,
                            string,
                            string,
                            string,
                            string,
                            string[]
                        ] = [
                            { city, streetName, flatNumber },
                            products,
                            phoneNumber,
                            status,
                            createdAt,
                            deadline,
                            price,
                            actions,
                        ]
                        return (
                            <TableRow className="border border-storm my-8x">
                                {arrayOfContent.map((elem, i) => {
                                    if (i === 0) {
                                        return (
                                            <TableCell className="">
                                                <p>ul. {streetName}</p>
                                                <p>{city}</p>
                                            </TableCell>
                                        )
                                    }
                                    if (i === 1 && Array.isArray(elem)) {
                                        return (
                                            <TableCell className="">
                                                {elem.map((listElem) => (
                                                    <li>{listElem}</li>
                                                ))}
                                            </TableCell>
                                        )
                                    }
                                    if (i === 2 && typeof elem === "string") {
                                        return (
                                            <TableCell className="font-medium">
                                                {elem}
                                            </TableCell>
                                        )
                                    }
                                    if (i === 3 && typeof elem === "string") {
                                        return (
                                            <TableCell className="">
                                                <div>{elem}</div>
                                            </TableCell>
                                        )
                                    }
                                    if (i === 4 && typeof elem === "string") {
                                        return (
                                            <TableCell className="">
                                                <div>{elem}</div>
                                            </TableCell>
                                        )
                                    }
                                    if (i === 5 && typeof elem === "string") {
                                        return (
                                            <TableCell className="">
                                                <div>{elem}</div>
                                            </TableCell>
                                        )
                                    }
                                    if (i === 6 && typeof elem === "string") {
                                        return (
                                            <TableCell className="">
                                                <div>{elem}</div>
                                            </TableCell>
                                        )
                                    }
                                    if (i === 7 && Array.isArray(elem)) {
                                        return (
                                            <TableCell className="">
                                                <div className="flex">
                                                    {elem.map((listElem) => (
                                                        <div>{listElem}</div>
                                                    ))}
                                                </div>
                                            </TableCell>
                                        )
                                    }
                                    return null
                                })}
                            </TableRow>
                        )
                    }
                )}
            </TableBody> */}
        </Table>
    )
}

export default BoardTable
