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
            <p>{`${new Date(createdAt).toLocaleString()}`}</p>
        </div>
    )
}

export default ColumnCreatedAt
