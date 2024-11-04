import axios from "axios";
import { GetToken } from "./token";

export function GetTables(){
    const token = GetToken();

    if (!token) {
        throw new Error("No user token found in sessionStorage.");
    }

    return axios.get("http://127.0.0.1:8000/tables", {
        headers: {
            'Authorization': token
        }
    });
}

export function BookTable(data){
    const token = GetToken()

    const {payload, TID} = data

    console.log(payload)

    if(!token){
        throw new Error("No user token found in sessionStorage.");
    }

    return axios.put(`http://127.0.0.1:8000/tables/id=${TID}`,payload,{
                headers:{
                    Authorization:token
                }
            })
}