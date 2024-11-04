import axios from "axios";


export function LoginAPI(data){
    return axios.post("http://127.0.0.1:8000/auth/login",{
        email:data.email,
        password:data.password
    })
}

export function RegisterAPI(data){
    return axios.post("http://127.0.0.1:8000/auth/register",{
        email:data.email,
        password:data.password,
        name:data.fname+" "+data.lname,
        phone:data.phone
    })
}