import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
})

export default instance
