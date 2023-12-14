import axios, { AxiosInstance } from "axios"

export const instancePublic: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
})

const instancePrivate: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
})
export const axiosReqInterceptor = (
    handler: () => void,
    errorHandler: () => void
) => {
    instancePrivate.interceptors.request.use(
        (config) => {
            handler()
            return config
        },
        () => {
            errorHandler()
        }
    )
}

export default instancePrivate
