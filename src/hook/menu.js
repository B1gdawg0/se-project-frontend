import axios from "axios";
import { GetToken } from "./token";

export function GetMenu(){
    const token = GetToken()

    if (!token) {
        throw new Error("No user token found in sessionStorage.");
    }

    return axios.get("http://127.0.0.1:8000/menu",{
                headers:{
                    Authorization:token
                }
            })
}