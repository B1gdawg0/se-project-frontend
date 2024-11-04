"use client";
import { useState, useEffect } from "react";

export default function Instagram() {
    const [instagram, setInstagram] = useState([]);

    useEffect(() => {
        async function fetchInstagramData() {
            try {
                const response = await fetch("http://localhost:8000/ig-lines", {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGdtYWlsLmNvbSIsImV4cCI6MTczMDcxMzM1Niwicm9sZSI6ImN1c3RvbWVyIiwidXNlcl9pZCI6ImY5ZWQ0ZjU2LWE0YWMtNDAyZi1hNjcwLWQ1NzRkZDg1NjUyZCJ9.DUHw1IUBhrHpnZyMV7RP9IfyLZERwI6eWyeV-iUJhdI`
                    }
                });
                const data = await response.json();
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
        <div className="bg-background w-screen h-screen flex justify-center items-start p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {instagram.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-between items-center bg-secondary_main border border-main rounded-lg p-6 shadow-lg transition-transform duration-200 hover:scale-105"
                    >
                        <img
                            src={item.image}
                            alt={item.ig_name}
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
