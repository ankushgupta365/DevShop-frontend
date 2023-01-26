import axios from "axios";

const BASE_URL = "https://devshop-api.onrender.com/api"


let TOKEN;
const getToken = ()=>{
    if(localStorage.getItem("persist:root")){
        TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken
}
}
getToken()

export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})