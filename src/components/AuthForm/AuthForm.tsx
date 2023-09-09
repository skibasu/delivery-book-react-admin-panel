import React from "react"
import { Card, Input, Button } from "@material-tailwind/react"
import { Controller, useForm } from "react-hook-form"

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
        <Card color="transparent" shadow={false}>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Controller
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
                </Button>
            </form>
        </Card>
    )
}

export default AuthForm
