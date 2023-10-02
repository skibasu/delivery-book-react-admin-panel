import moment from "moment"
import React from "react"
interface IColumnCreatedAt {
    createdAt: number
    className: string
}
const ColumnCreatedAt: React.FC<IColumnCreatedAt> = ({
    className,
    createdAt,
}) => {
    return (
        <div
            className={`${
                className ? className + " " : ""
            }flex justify-center items-center px-6y py-7.1x`}
        >
            <p>{`${moment.unix(createdAt).format("HH : mm")}`}</p>
        </div>
    )
}

export default ColumnCreatedAt
