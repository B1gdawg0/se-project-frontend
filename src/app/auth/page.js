'use client'
import { useRouter } from "next/navigation";

async function AuthPage(){
    const  go = useRouter()

    return(
        <div>
            <button onClick={()=>go.push("/homepage")} className=" text-cyan-600 bg-black py-3 px-8">Homepage</button>
        </div>
    )
}


export default AuthPage