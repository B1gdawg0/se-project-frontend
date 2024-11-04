import axios from "axios";
import { GetToken } from "./token";

export function GetIGline() {
    const token = GetToken();

    if (!token) {
        throw new Error("No user token found in sessionStorage.");
    }

    return axios.get("http://localhost:8000/ig-lines", {
        headers: {
            'Authorization': token
        }
    });
}