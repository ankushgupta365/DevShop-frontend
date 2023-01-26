import axios from "axios";

const BASE_URL = "https://devshop-api.onrender.com/api"
const TOKEN = ()=>{
    return (localStorage.getItem("persist:root").user && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
}


export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})