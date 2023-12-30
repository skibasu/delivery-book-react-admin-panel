import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
    const { toasts } = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                icon: Icon,
                ...props
            }) {
                return (
                    <Toast key={id} {...props}>
                        <div className="grid gap-1">
                            {title && (
                                <div className="flex w-full items-center">
                                    {Icon && (
                                        <div className="mr-2x w-[20px] h-[20px] [&>svg]:w-full [&>svg]:h-full">
                                            <Icon />
                                        </div>
                                    )}
                                    <ToastTitle className="leading-none normal-case">
                                        {title}
                                    </ToastTitle>
                                </div>
                            )}
                            {description && (
                                <ToastDescription className="block mt-3x">
                                    <div>{description}</div>{" "}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                )
            })}
            <ToastViewport />
        </ToastProvider>
    )
}
