"use client";
import { useState } from "react";

export default function Instagram() {
    const [instagram, setInstagram] = useState([
        { id: 1, ig_name: "aeuro7", name: "Ithikorn Ungniyom" },
        { id: 2, ig_name: "bamm123", name: "Ithikorn Ungniyom" },
        { id: 3, ig_name: "_2503x", name: "Ithikorn Ungniyom" },
        { id: 4, ig_name: "pual091", name: "Ithikorn Ungniyom" }
    ]);

    return (
        <div className="bg-background w-screen h-screen flex justify-center items-start  p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {instagram.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-between items-center bg-secondary_main border border-main rounded-lg p-6 shadow-lg transition-transform duration-200 hover:scale-105"
                    >
                        <div className="flex flex-col text-center">
                            <div className="text-white text-xl font-bold mb-2 text-center break-words">{item.name}
                            </div>
                            <div className="text-white text-lg italic mb-4 text-center break-words max-w-full">
                                {"ig : " + item.ig_name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
