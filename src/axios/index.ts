import axios, { AxiosInstance } from "axios"
const baseURL = process.env.REACT_APP_URL
const instance: AxiosInstance = axios.create({
    baseURL,
    //withCredentials: true,
})

export default instance
