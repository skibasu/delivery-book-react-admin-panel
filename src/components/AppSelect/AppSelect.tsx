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
    placeholder?: string
    labelClassName?: string
    onFocus: () => void
    error?: string
}
const AppSelect: React.FC<IAppSelect> = ({
    onValueChange,
    name,
    label,
    className,
    labelClassName,
    placeholder,
    wrapperClasses,
    inputValue,
    dataType,
    onBlur,
    onFocus,
    error,
}) => {
    const { data: users } = useAppSelector((state) => state.users)

    return (
        <div className={wrapperClasses}>
            {label ? (
                <Label
                    className={cn(
                        "text-sm block mb-3x leading-none",
                        labelClassName,
                        error ? "!text-hellFire" : ""
                    )}
                    htmlFor={name}
                >
                    {label}
                </Label>
            ) : null}
            <Select
                onOpenChange={(v) => {
                    onBlur(v)
                    onFocus()
                }}
                onValueChange={onValueChange}
                name={name}
                defaultValue={inputValue}
                value={inputValue}
            >
                <SelectTrigger
                    className={cn(className, error ? "!border-hellFire" : "")}
                >
                    <SelectValue placeholder={placeholder} />
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
                    {inputValue && dataType === EDataType.STATUSES ? (
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
