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
        mode: "all",
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
            <form
                className=""
                onSubmit={handleSubmit(onSubmit)}
                id="login-form"
                data-cy="login-form"
            >
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
                            data-cy="login-form-email"
                            dataCyParrent="login-form-email-parrent"
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
                            data-cy="login-form-password"
                            dataCyParrent="login-form-password-parrent"
                        />
                    )}
                />
                <Button
                    size="full"
                    className="mt-6x relative disabled:opacity-1"
                    onClick={handleSubmit(onSubmit)}
                    disabled={loading === "pending"}
                    dataCy="login-form-submit"
                >
                    Login
                    {loading === "pending" ? (
                        <Spinner
                            className="absolute right-7x inset-y-2/4 -translate-y-1/2 w-[20px] h-[20px]"
                            data-cy="login-form-spinner"
                        />
                    ) : null}
                </Button>

                {error ? (
                    <div
                        className="flex w-full items-center h-errorSpacer"
                        data-cy="login-form-error"
                    >
                        <ErrorIcon className="mr-2x w-[14px] h-[14px]" />
                        <p className="text-2sm text-hellFire">
                            {error.message || "Server error"}
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
