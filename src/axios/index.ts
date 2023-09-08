import axios from "axios"

const instance: any = axios.create({
    baseURL: "http://46.41.141.83:3000",
})

export default instance
