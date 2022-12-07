import axios from "axios";


export const climaApi = axios.create({
    baseURL: import.meta.env.VITE_APP_URL_API
})

