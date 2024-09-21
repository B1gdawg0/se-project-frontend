'use client'
import { useRouter } from "next/navigation";

async function AuthPage(){
    const  go = useRouter()
    function delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await delay(500); 

    return(
        <div>
            <button onClick={()=>go.push("/homepage")} className="text-cyan-600 bg-black py-3 px-8">Homepage</button>
        </div>
    )
}


export default AuthPage