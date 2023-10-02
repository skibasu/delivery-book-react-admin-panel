import React from "react"
import { ReactComponent as EditIcon } from "@/assets/svg/icon-edit.svg"
import { ReactComponent as DeleteIcon } from "@/assets/svg/icon-trash.svg"

interface IColumnActions {
    editable: boolean
    deletable: boolean
    className: string
}
const ColumnActions: React.FC<IColumnActions> = ({
    editable,
    deletable,
    className,
}) => {
    return (
        <div
            className={`${
                className ? className + " " : ""
            }flex justify-center items-center px-6y py-7.1x`}
        >
            {editable ? (
                <div
                    onClick={() => console.log("edited")}
                    className="p-0y cursor-pointer"
                >
                    <EditIcon />
                </div>
            ) : null}
            {deletable ? (
                <div
                    onClick={() => console.log("deleted")}
                    className="p-0y cursor-pointer"
                >
                    <DeleteIcon />
                </div>
            ) : null}
        </div>
    )
}

export default ColumnActions
