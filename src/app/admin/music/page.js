"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { GetMusic } from "../../../hook/music"; // Ensure this is fetching music data correctly
import { GetToken } from "../../../hook/token";

export default function Music() {
    const [music, setMusic] = useState([]);
    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await GetMusic();
                const data = response.data;

                // Ensure you're accessing the correct data structure
                if (data.payload && data.payload.MusicLines) {
                    const musicData = data.payload.MusicLines.map((line) => ({
                        id: line.ID,
                        m_name: line.Name
                    }));

                    setMusic(musicData);
                }
            } catch (error) {
                console.error("Error fetching music lines:", error);
            }
        };

        fetchMusic();
    }, []);

  

    return (
        <div className="bg-background w-screen h-full min-h-screen flex justify-center items-start p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {music.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-between items-center bg-secondary_main border border-main rounded-lg p-6 shadow-lg transition-transform duration-200 hover:scale-105 relative w-full min-w-[200px] max-w-[300px]"
                    >
                        <button
                            onClick={() => deleteMusic(item.id)}
                            className="absolute top-2 right-2 bg-main text-black rounded-lg w-5 h-5 flex items-center justify-center hover:bg-yellow-400 transform transition-transform duration-200 hover:scale-110"
                        >
                            ⛌ {/* Delete icon */}
                        </button>
                        <div className="flex flex-col text-center mb-4">
                            <div className="text-main text-md font-bold mb-4">Song Request ♫</div>
                            <div className="text-white text-xl font-bold mb-7">{item.m_name}</div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <button className="bg-main text-black px-2 py-1 rounded hover:bg-yellow-400">
                                ◄ {/* Previous */}
                            </button>
                            <button className="bg-main text-black px-2 py-1 rounded hover:bg-yellow-400">
                                ⏸ {/* Play */}
                            </button>
                            <button className="bg-main text-black px-2 py-1 rounded hover:bg-yellow-400">
                                ► {/* Next */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
