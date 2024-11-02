"use client";
import { useState } from "react";
import axios from "axios";

export default function MenuForm() {
    const [menuData, setMenuData] = useState({
        price: "",
        description: "",
        url: ""
    });

    const [imagePreview, setImagePreview] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Update the image preview when the URL changes
        if (name === "url") {
            setImagePreview(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare the data for submission
        const payload = {
            m_price: Number(menuData.price),
            m_description: menuData.description,
            url: menuData.url
        };

        try {
            // Send POST request
            const response = await axios.post("http://localhost:8000/menu", payload, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("Response:", response.data);
            alert("Menu item added successfully!");
            
            // Clear form after submission (optional)
            setMenuData({
                price: "",
                description: "",
                url: ""
            });
            setImagePreview(""); // Clear image preview
        } catch (error) {
            console.error("Error submitting menu data:", error);
        }
    };

    return (
        <div className="bg-background w-screen h-screen flex justify-center items-center p-6">
            <div className="flex w-full max-w-6xl bg-secondary_main rounded-lg shadow-lg overflow-hidden">
                {/* Image Preview Section */}
                <div className="flex-shrink-0 w-1/2 p-4 border-main flex items-center justify-center">
                    {imagePreview ? (
                        <div className="w-full h-full flex items-center justify-center border-2 border-yellow-500 rounded">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover rounded" // Ensures the image covers the entire area
                            />
                        </div>
                    ) : (
                        <div className="h-full w-full flex items-center justify-center border-2 border-main rounded text-gray-600 text-2xl">
                            No image selected
                        </div>
                    )}
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 p-4">
                    <h2 className="text-2xl font-semibold text-center text-main mb-6">Add New Menu Item</h2>
                    <div>
                        <label className="block text-white mb-1" htmlFor="price">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            value={menuData.price}
                            onChange={handleChange}
                            className="bg-secondary_background w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white mb-1" htmlFor="description">Name & Description</label>
                        <textarea
                            name="description"
                            value={menuData.description}
                            onChange={handleChange}
                            className="bg-secondary_background w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white mb-1" htmlFor="url">Image URL</label>
                        <input
                            type="text"
                            name="url"
                            value={menuData.url}
                            onChange={handleChange}
                            className="bg-secondary_background w-full p-2 border border-main rounded focus:outline-none focus:ring-2 focus:ring-main"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 p-2 w-full bg-main text-white font-semibold rounded hover:bg-opacity-80 transition duration-150"
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
}
