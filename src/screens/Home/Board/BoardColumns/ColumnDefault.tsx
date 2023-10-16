import React from "react"
interface IColumnDefault {
    text: string
    className: string
}
const ColumnDefault: React.FC<IColumnDefault> = ({ className, text }) => {
    return (
        <div
            className={`${
                className ? className + " " : ""
            }flex justify-center items-center px-6y py-7.1x`}
        >
            {text}
        </div>
    )
}

export default ColumnDefault
