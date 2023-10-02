import React from "react"

interface IColumnproducts {
    phoneNumber: string
    className?: string
}
const ColumnPhoneNumber: React.FC<IColumnproducts> = ({
    className,
    phoneNumber,
}) => {
    return (
        <div
            className={`${
                className ? className + " " : ""
            }flex justify-center items-center px-6y py-7.1x`}
        >
            <p className="text-medium">{phoneNumber}</p>
        </div>
    )
}

export default ColumnPhoneNumber
