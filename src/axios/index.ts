import axios from "axios"

const instance: any = axios.create({
    baseURL: "https://elskiba.com.pl:3000",
})

export default instance
