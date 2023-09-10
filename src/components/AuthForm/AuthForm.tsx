import React from "react"

import { Controller, useForm } from "react-hook-form"
import { Button } from "../ui/button"

import { useAppDispatch, useAppSelector } from "../../hooks/useStore"
import { logInUser } from "../../api/authApi"
import { yupResolver } from "@hookform/resolvers/yup"
import { authSchema } from "./validation"
interface ILoginFormData {
    email: string
    password: string
}
const AuthForm: React.FC = () => {
    const defaultValues: ILoginFormData = {
        email: "",
        password: "",
    }
    const dispatch = useAppDispatch()
    const { error, loading } = useAppSelector((state) => state.auth)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>({
        resolver: yupResolver(authSchema),
        mode: "onTouched",
        defaultValues,
    })
    const onSubmit = async (data: ILoginFormData) => {
        console.log("Submiting", data, error, loading, errors)
        dispatch(logInUser(data))
    }

    return (
        <form className="">
            <div className="mb-4 flex flex-col gap-6">
                <Button>auth</Button>
                {/*<Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input size="lg" label="Email" value={value} />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input size="lg" label="Password" value={value} />
                        )}
                    />
                </div>

                <Button
                    className="mt-6"
                    fullWidth
                    onClick={handleSubmit(onSubmit)}
                >
                    Login
                        </Button> */}
            </div>
        </form>
    )
}

export default AuthForm
