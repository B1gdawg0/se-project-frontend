"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import stage from "../../../images/stage.png"; // This can be removed if you're not using it

export default function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
          try {
                const response = await axios.get("http://localhost:8000/menu");
                if (response.data && response.data.payload) {
                    // Map the fetched data to the desired format
                    const formattedMenu = response.data.payload.menus.map(item => ({
                        id: item.m_id,
                        m_description: item.m_description,
                        m_price: item.m_price,
                        url: item.m_url,
                    }));
                    setMenu(formattedMenu);
                }
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    return (
        <div className="bg-background w-screen min-h-screen flex justify-center items-start p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {menu.map((item) => (
                    <div key={item.id} className="bg-secondary_main border-2 border-main rounded-lg shadow-lg p-4 w-64">
                        <img
                            src={item.url} // Use the image URL from the fetched data
                            alt={item.m_description}
                            className="w-full h-40 object-cover rounded-t-lg" // Ensures the image covers the entire area
                        />
                        <div className="p-4">
                            <h3 className="text-lg text-white font-bold">{item.m_description}</h3>
                            <p className="text-white mt-2">Price: {item.m_price} .-</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
