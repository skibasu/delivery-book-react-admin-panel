import React, { useEffect } from "react"
import { Button, Input } from "../ui"

import { Controller, useForm } from "react-hook-form"

import { useAppDispatch } from "@/hooks/useStore"
// import {
//     updateSocketError,
//     updateSocketLoading,
// } from "@/features/orders/ordersSlice"
//import { useSocketContext } from "@/contexts/SocketProvider"

//import { ReactComponent as Spinner } from "@/assets/svg/icon-spinner.svg"
import { shiftSchema } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { postShift } from "@/api/shiftApi/postShift"
import moment from "moment"

interface IForm {
    title: string
}

const defaultValues: IForm = {
    title: String(moment().format("D-MM-YYYY")),
}
const CreateShiftForm = () => {
    //  const { socketLoading } = useAppSelector((state) => state.orders)
    const dispatch = useAppDispatch()
    //  const { socket } = useSocketContext()

    const {
        control,
        handleSubmit,

        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(shiftSchema),
        mode: "onSubmit",
        defaultValues,
    })

    const onSubmit = async (data: IForm) => {
        try {
            console.log(data)
            dispatch(postShift(data))
        } catch (e: any) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        return () => {
            // dispatch(updateSocketLoading("idle"))
            //reset({ selectedBy: "" })
        }

        //eslint-disable-next-line
    }, [])

    return (
        <form className="mb-7x">
            <h2 className="text-h5 mb-4x">Start New Shift:</h2>
            <Controller
                name="title"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        error={errors.title?.message}
                        placeholder="Title"
                        label="Title"
                        name="title"
                        value={value}
                        onChange={onChange}
                        className="max-w-[303px]"
                    />
                )}
            />
            <Button
                onClick={() => handleSubmit(onSubmit)()}
                className={`relative text-left disabled:opacity`}
                size="sm"
                // disabled={socketLoading === "pending" || !Boolean(selectedBy)}
            >
                <span className="px-4x">Save</span>
                {/* {socketLoading === "pending" ? (
                    <Spinner className="w-[10px] h-[10px] absolute right-3x inset-y-2/4 -translate-y-1/2" />
                ) : null} */}
            </Button>
        </form>
    )
}
export default CreateShiftForm
