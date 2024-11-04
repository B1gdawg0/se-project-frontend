import { AiOutlineStop } from "react-icons/ai";


function Denied({message}) {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex items-center justify-center bg-red-500 rounded-full w-52 h-52 flex-shrink-0">
                <AiOutlineStop size={250} className="text-white" />
            </div>
            {message && <div className="w-full max-w-md text-center text-white bg-red-500 rounded-xl p-4 text-xl">
                {message}
            </div>}
            
        </div>
    );
}

export default Denied;
