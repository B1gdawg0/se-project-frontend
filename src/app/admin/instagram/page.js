
"use client";
import { useState, useEffect } from "react";
import { GetIGline } from "../../../hook/ig";

export default function Instagram() {
    const [instagram, setInstagram] = useState([]);

    useEffect(() => {
        async function fetchInstagramData() {
            try {
                const response = await GetIGline();
                const data = response.data; // Access data directly from response
                if (data.payload && data.payload.iglines) {
                    const transformedData = data.payload.iglines.map((item) => ({
                        id: item.ID,
                        ig_name: item.Name,
                        image: item.Image,
                    }));
                    setInstagram(transformedData);
                }
            } catch (error) {
                console.error("Error fetching Instagram data:", error);
            }
        }
        fetchInstagramData();
    }, []);

    return (
        <div className="bg-background w-screen  flex justify-center items-start p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {instagram.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-between items-center bg-secondary_main border border-main rounded-lg p-6 shadow-lg transition-transform duration-200 hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.image}
                            className="w-full h-full object-cover max-w-52 max-h-52 rounded-md shadow-2xl"
                            style={{ width: "200px", height: "200px" }} // Square dimensions
                            
                        />
                        <div className="flex flex-col text-center mt-4">
                            <div className="text-main text-xl font-bold mb-2 break-words">
                                {item.ig_name}
                            </div>
                            <div className="text-white text-lg italic mb-4 break-words">
                                {"ig : " + item.ig_name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}