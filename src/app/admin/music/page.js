"use client";
import { useState } from "react";

export default function Music() {
    const [music, setMusic] = useState([
        { id: 1, m_name: "Music Lover", name: "Ithikorn Ungniyom" },
        { id: 2, m_name: "เหตุผลของการมีชีวิตอยู่ คือการได้พบกับเธอ No One Else", name: "Ithikorn Ungniyom" },
        { id: 3, m_name: "Back in Black", name: "Ithikorn Ungniyom" },
        { id: 4, m_name: "Dear God", name: "Ithikorn Ungniyom" }
    ]);

    return (
        <div className="bg-background w-screen h-screen flex justify-center items-start  p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {music.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-between items-center bg-secondary_main border border-main rounded-lg p-6 shadow-lg transition-transform duration-200 hover:scale-105"
                    >
                        <div className="flex flex-col text-center">
                            <div className="text-white text-xl font-bold mb-2 text-center break-words">{item.name}
                            </div>
                            <div className="text-white text-lg italic mb-4 text-center break-words max-w-full">
                                {item.m_name}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="w-24 py-2 rounded bg-green-500 text-white font-semibold uppercase transition duration-150 ease-in-out hover:bg-green-600"
                            >
                                Approve
                            </button>
                            <button
                                type="button"
                                className="w-24 py-2 rounded bg-red-500 text-white font-semibold uppercase transition duration-150 ease-in-out hover:bg-red-600"
                            >
                                Deny
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
