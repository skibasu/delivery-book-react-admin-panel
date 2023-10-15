import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center shadow-md tracking-[1.8px] uppercase justify-center h-element rounded-md text-base font-payton transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ",
    {
        variants: {
            variant: {
                default:
                    "bg-successed text-textWhite hover:bg-successedH dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 px-7x py-2x",
                destructive:
                    "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
                outline:
                    "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                secondary:
                    "bg-lightStorm text-textWhite hover:bg-storm dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
                ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-elementSm rounded-md !py-1y !px-6x text-sm font-base text-medium capitalize text-textWhite !shadow",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                full: "w-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
