import React, { useEffect, useState } from "react"
import { useAppSelector } from "@/hooks/useStore"
import { ReactComponent as ErrorIcon } from "@/assets/svg/icon-error.svg"
import { ReactComponent as SuccessIcon } from "@/assets/svg/icon-success.svg"

interface IAddOrderFormMessage {
    validationMessages?: string[]
}
const AddOrderFormMessage: React.FC<IAddOrderFormMessage> = ({
    validationMessages,
}) => {
    const [messages, setMesseges] = useState<string[]>([])
    const { socketError: error, socketLoading: loading } = useAppSelector(
        (state) => state.orders
    )

    useEffect(() => {
        const m: string[] = []
        validationMessages?.forEach((elem) =>
            elem !== "" ? m.push(elem) : null
        )
        setMesseges(m)
    }, [validationMessages])

    if (messages.length === 0) {
        return (
            <>
                {loading === "failed" && error !== null ? (
                    <div className="flex w-full items-center h-errorSpacer">
                        <ErrorIcon className="mr-2x w-[14px] h-[14px]" />
                        <p className="text-2sm text-hellFire">
                            {error.message}
                        </p>
                    </div>
                ) : null}
                {loading === "succeeded" && error === null ? (
                    <div className="flex w-full items-center h-errorSpacer">
                        <SuccessIcon className="mr-2x w-[14px] h-[14px]" />
                        <p className="text-2sm text-sweetGrass">Successed</p>
                    </div>
                ) : null}
            </>
        )
    } else {
        return messages.length > 0 ? (
            <div className="flex w-full items-center h-errorSpacer">
                <ErrorIcon className="mr-2x w-[14px] h-[14px]" />
                <p className="text-2sm text-hellFire">{messages[0]}</p>
            </div>
        ) : null
    }
}

export default AddOrderFormMessage
