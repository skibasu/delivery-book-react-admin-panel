import React, { useRef, useEffect, useState } from "react"
import { Input } from "../ui"
import { cn } from "@/lib/utils"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import CountriesSelect from "./CountriesSelect/CountriesSelect"

interface IPhoneNumberInput {
    error: string
    label: string
    name: string
    value?: string
    className?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onFocus: React.FocusEventHandler<HTMLInputElement>
    onBlur: React.FocusEventHandler<HTMLInputElement>
}
const PhoneNumberInput: React.FC<IPhoneNumberInput> = ({
    error,
    label,
    name,
    value,
    className,
    onChange,
    onFocus,
    onBlur,
}) => {
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLInputElement | null>(null)
    //const prefixRegex = /([+\d].*)\d/

    useEffect(() => {
        setWidth(ref.current?.clientWidth || 0)
    }, [])

    return (
        <div className="">
            <div className="block mb-3x leading-none">{label}</div>
            <div className="relative pl-[65px] w-[230px] flex">
                <span
                    ref={ref}
                    className={cn("absolute left-0 top-0", className)}
                >
                    <CountriesSelect />
                </span>
                <Input
                    error={error}
                    name={name}
                    value={value}
                    wrapperClasses={`min-w-full w-[230px] -ml-[65px]`}
                    className={`min-w-full`}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={{
                        width: `calc(100% - ${width}px)`,
                        paddingLeft: width,
                    }}
                />
            </div>
        </div>
    )
}

export default PhoneNumberInput
