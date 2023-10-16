import React from "react"
import { useAppSelector } from "@/hooks/useStore"
import { ReactComponent as ErrorIcon } from "@/assets/svg/icon-error.svg"
import { ReactComponent as SuccessIcon } from "@/assets/svg/icon-success.svg"

interface IAddOrderFormMessage {
    validationMessage?: string
}
const AddOrderFormMessage: React.FC<IAddOrderFormMessage> = ({
    validationMessage,
}) => {
    const { socketError: error, socketLoading: loading } = useAppSelector(
        (state) => state.orders
    )
    if (!validationMessage) {
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
        return (
            <div className="flex w-full items-center h-errorSpacer">
                <ErrorIcon className="mr-2x w-[14px] h-[14px]" />
                <p className="text-2sm text-hellFire">{validationMessage}</p>
            </div>
        )
    }
}

export default AddOrderFormMessage
