import React from "react"
import { Controller, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../hooks/useStore"
import { logInUser } from "../../api/authApi"
import { yupResolver } from "@hookform/resolvers/yup"
import { authSchema } from "./validation"
import logo from "../../assets/img/logo-large-1x.png"
import { Button, Input, Card } from "@/components/ui"
import { ReactComponent as Spinner } from "@/assets/svg/icon-spinner.svg"
import { ReactComponent as ErrorIcon } from "@/assets/svg/icon-error.svg"

const AuthForm: React.FC = () => {
    const defaultValues: ILoginFormData = {
        email: "admin@admin.com",
        password: "Admin1!_",
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
        dispatch(logInUser(data))
    }

    return (
        <Card className="w-[300px] sm:w-[350px] shadow-2xl pt-[59px] px-7x sm:px-[58px] pb-[43px] bg-textWhite mt-[36px]">
            <figure className="flex w-full justify-center mb-8x">
                <img src={logo} alt="Delivery Book" />
            </figure>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.email?.message}
                            placeholder="user@domain.com"
                            label="Email"
                            name="email"
                            value={value}
                            className="w-full"
                            onChange={(value) => onChange(value)}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            error={errors.password?.message}
                            placeholder="Password"
                            label="Password"
                            type="password"
                            name="email"
                            value={value}
                            className="w-full"
                            onChange={(value) => onChange(value)}
                        />
                    )}
                />
                <Button
                    size="full"
                    className="mt-6x relative disabled:opacity-1"
                    onClick={handleSubmit(onSubmit)}
                    disabled={loading === "pending"}
                >
                    Login
                    {loading === "pending" ? (
                        <Spinner className="absolute right-7x inset-y-2/4 -translate-y-1/2 w-[20px] h-[20px]" />
                    ) : null}
                </Button>

                {error ? (
                    <div className="flex w-full items-center h-errorSpacer">
                        <ErrorIcon className="mr-2x w-[14px] h-[14px]" />
                        <p className="text-2sm text-hellFire">
                            {error.message}
                        </p>
                    </div>
                ) : (
                    <span className="block h-errorSpacer"></span>
                )}
            </form>
        </Card>
    )
}

export default AuthForm
