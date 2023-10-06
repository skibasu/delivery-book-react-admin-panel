import { Label } from "@radix-ui/react-label"
import React from "react"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui"
import { cn } from "@/lib/utils"
import UsersItems from "../UserItems/UserItems"
import { useAppSelector } from "@/hooks/useStore"
import StatusesItems from "../StatusesItems/StatusesItems"
import { EDataType } from "./types"
import { categories, payments, statuses } from "./selectData"
import PaymentsItems from "../PaymentsItems/PaymentsItems"
import CategoriesItems from "../CategoriesItems/CategoriesItems"

interface IAppSelect {
    onValueChange: (value: string) => void
    onBlur: (value: boolean) => void
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
    onBlur,
}) => {
    const { data: users } = useAppSelector((state) => state.users)

    return (
        <div className={wrapperClasses}>
            {label ? (
                <Label className={cn("block mb-3x", className)} htmlFor={name}>
                    {label}
                </Label>
            ) : null}
            <Select
                onOpenChange={onBlur}
                onValueChange={onValueChange}
                name={name}
                defaultValue={inputValue}
            >
                <SelectTrigger className={className}>
                    <SelectValue placeholder={label} />
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
                    {dataType === EDataType.PAYMENTS ? (
                        <PaymentsItems
                            items={payments.map((payment) => ({
                                payment,
                                isHidden: payment === inputValue,
                            }))}
                        />
                    ) : null}
                    {dataType === EDataType.CATEGORY ? (
                        <CategoriesItems
                            items={categories.map((category) => ({
                                category,
                                isHidden: category === inputValue,
                            }))}
                        />
                    ) : null}
                </SelectContent>
            </Select>
            <span className="block h-inputSpacer"></span>
        </div>
    )
}

export default AppSelect
