import React from "react"
import { Card, Input, Button } from "@material-tailwind/react"
import { Controller, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../hooks/useStore"
import { logInUser } from "../../api/authApi"
import { yupResolver } from "@hookform/resolvers/yup"
import { authSchema } from "./validation"
import logo from "../../assets/img/logo-large-1x.png"

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
        <Card
            color="transparent"
            shadow={false}
            className="w-[350px] px-[58px] pt-[58px] pb-[98px] bg-customGrayLight shadow-2xl"
        >
            <figure className="flex justify-center mb-[48px]">
                <img src={logo} alt="Delivery Book" />
            </figure>
            <form className="min-w-full">
                <div className="mb-4 flex flex-col gap-6">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                label="Email"
                                value={value}
                                className="w-full"
                                containerProps={{ className: "!min-w-full" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                size="lg"
                                label="Password"
                                value={value}
                                containerProps={{ className: "!min-w-full" }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
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
