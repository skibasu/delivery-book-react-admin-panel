import * as React from "react"
import { Label } from "./label"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    wrapperClasses?: string
    error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        { className, value, name, label, wrapperClasses, error, ...props },
        ref
    ) => {
        const errorInputClasses = error ? "!border-hellFire" : ""
        const errorLabelClasses = error ? "!text-hellFire" : ""
        return (
            <div className={`${wrapperClasses ? " " + wrapperClasses : ""}`}>
                {!!label && (
                    <Label
                        className={`block mb-3x${
                            errorLabelClasses ? " " + errorLabelClasses : ""
                        }`}
                        htmlFor={name}
                    >
                        {label}
                    </Label>
                )}
                <textarea
                    className={cn(
                        `flex h-element
                        w-full rounded-md 
                        border border-storm 
                        bg-textWhite 
                        px-5x py-4x 
                     
                        placeholder:text-placeholder 
                        focus-visible:outline-none 
                     
                        autofill:bg-yellow-200 
                        focus:border-sweetGrass
                        caret-sweetGrass
                        disabled:cursor-not-allowed 
                        disabled:opacity-50 
                        dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-400`,
                        errorInputClasses,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <span className="block h-inputSpacer"></span>
            </div>
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
