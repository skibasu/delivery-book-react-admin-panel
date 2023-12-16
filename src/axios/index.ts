import axios, { AxiosInstance } from "axios"

export const instancePublic: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
})

const instancePrivate: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
})

export const axiosResInterceptor = (handler: () => Promise<boolean>) => {
    instancePrivate.interceptors.response.use(
        (response) => response,
        async (error) => {
            const prevRequest = error?.config
            if (error?.response?.status === 401 && !prevRequest?.sent) {
                const doContinue = await handler()
                if (doContinue) {
                    return instancePrivate(prevRequest)
                }
            }
        }
    )
}

export default instancePrivate
