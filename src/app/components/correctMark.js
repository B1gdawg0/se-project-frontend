import { IoIosCheckmark } from "react-icons/io";

function CorrectMark({message}) {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex items-center justify-center bg-green-500 rounded-full w-52 h-52 flex-shrink-0">
                <IoIosCheckmark size={100} className="text-white" />
            </div>
            {message && <div className="w-full max-w-md text-center text-white bg-green-500 rounded-xl p-4 text-xl">
                {message}
            </div>}
            
        </div>
    );
}

export default CorrectMark;
