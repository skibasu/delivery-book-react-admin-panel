import { Label } from "@radix-ui/react-label"
import React from "react"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui"
import { cn } from "@/lib/utils"
import UsersItems from "../UserItems/UserItems"
import { useAppSelector } from "@/hooks/useStore"
import StatusesItems from "../StatusesItems/StatusesItems"
import { EDataType } from "./types"
import { statuses } from "./selectData"

interface IAppSelect {
    onValueChange: (value: string) => void
    name: string
    inputValue: string
    dataType: EDataType
    className?: string
    wrapperClasses?: string
    label?: string
}
const AppSelect: React.FC<IAppSelect> = ({
    onValueChange,
    name,
    label,
    className,
    wrapperClasses,
    inputValue,
    dataType,
}) => {
    const { data: users } = useAppSelector((state) => state.users)
    return (
        <div className={wrapperClasses}>
            {label ? (
                <Label className={cn("block mb-3x", className)} htmlFor={name}>
                    {label}
                </Label>
            ) : null}
            <Select onValueChange={onValueChange} name={name}>
                <SelectTrigger className={className}>
                    <SelectValue
                        placeholder={label}
                        defaultValue={inputValue}
                    />
                </SelectTrigger>
                <SelectContent>
                    {dataType === EDataType.USERS ? (
                        <UsersItems
                            items={users.map((item) => ({
                                ...item,
                                isHidden: item._id === inputValue,
                            }))}
                        />
                    ) : null}
                    {dataType === EDataType.STATUSES ? (
                        <StatusesItems
                            items={statuses.map((status) => ({
                                status,
                                isHidden: status === inputValue,
                            }))}
                        />
                    ) : null}
                </SelectContent>
            </Select>
        </div>
    )
}

export default AppSelect
