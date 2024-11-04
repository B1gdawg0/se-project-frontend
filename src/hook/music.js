import axios from "axios";
import { GetToken } from "./token";

export function GetMusic() {
    const token = GetToken();

    if (!token) {
        throw new Error("No user token found in sessionStorage.");
    }

    return axios.get("http://localhost:8000/music-lines", {
        headers: {
            'Authorization': token
        }
    });
}