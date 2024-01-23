import React, { useEffect } from "react"
import { Button } from "../ui"
import AppSelect from "../AppSelect/AppSelect"
import { Controller, useForm } from "react-hook-form"
import { EDataType } from "../AppSelect/types"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { shiftHistorySchema } from "./validation"
import { ReactComponent as Spinner } from "@/assets/svg/icon-spinner.svg"
import { yupResolver } from "@hookform/resolvers/yup"
import { getShifts } from "@/api/shiftsApi"
import { useShiftContext } from "@/contexts/ShiftProvider"
// import { driverSchema } from "./validation"
// import { yupResolver } from "@hookform/resolvers/yup"

interface IForm {
    shiftId: string
}

const defaultValues: IForm = {
    shiftId: "",
}
const ShiftHistoryForm = () => {
    const dispatch = useAppDispatch()
    const { setShiftId } = useShiftContext()
    const { loading } = useAppSelector((state) => state.shifts)

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(shiftHistorySchema),
        mode: "onSubmit",
        defaultValues,
    })

    const onSubmit = async (data: IForm) => {
        try {
            setShiftId(data.shiftId)
        } catch (e: any) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        dispatch(getShifts())
        return () => {
            reset({ shiftId: "" })
            setShiftId("")
        }

        //eslint-disable-next-line
    }, [])

    return (
        <form>
            <h2 className="text-h5 mb-4x">History:</h2>
            <Controller
                name="shiftId"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <AppSelect
                        onBlur={onBlur}
                        onValueChange={(v) => {
                            onChange(v)
                        }}
                        name="shiftId"
                        inputValue={value}
                        label="Shifts"
                        placeholder="Select Shift By Name"
                        className="w-full"
                        labelClassName=" mb-6y"
                        wrapperClasses="grow max-w-[303px]"
                        dataType={EDataType.SHIFTS}
                        onFocus={() => {}}
                        error={errors.shiftId?.message}
                    />
                )}
            />
            <Button
                type="button"
                onClick={() => handleSubmit(onSubmit)()}
                className={`relative text-left disabled:opacity-${
                    loading === "pending" ? "100" : "50"
                }`}
                size="sm"
            >
                <span className="px-4x">View</span>
                {loading === "pending" ? (
                    <Spinner className="w-[10px] h-[10px] absolute right-3x inset-y-2/4 -translate-y-1/2" />
                ) : null}
            </Button>
        </form>
    )
}
export default ShiftHistoryForm
