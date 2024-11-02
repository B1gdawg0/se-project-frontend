"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Table() {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const fetchTables = async () => {
            try {
                const response = await axios.get("http://localhost:8000/tables");
                if (response.data && response.data.payload.tables.tables) {
                    // Map the fetched data to the desired format
                    const formattedTables = response.data.payload.tables.tables.map((table) => ({
                        id: table.t_id,
                        name: table.c_id, // Assuming c_id is the customer name
                    }));
                    setTables(formattedTables);
                }
            } catch (error) {
                console.error("Error fetching tables:", error);
            }
        };

        fetchTables();
    }, []);

    return (
        <div className="bg-background w-screen h-screen justify-items-center pt-6">
            {tables.length > 0 ? (
                <table className="w-full max-w-7xl border-collapse border-2 border-main">
                    <thead className="bg-secondary_main text-white">
                        <tr>
                            <th className="border-2 border-main px-4 py-2">Table No.</th>
                            <th className="border-2 border-main px-4 py-2">Customer Name</th>
                            <th className="border-2 border-main px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-secondary_main text-white">
                        {tables.map((table) => (
                            <tr key={table.id}>
                                <td className="border-x-2 border-main px-4 py-2">{table.id}</td>
                                <td className="border-x-2 border-main px-4 py-2">{table.name}</td>
                                <td className="flex flex-row justify-center space-x-3 border-main px-4 py-2">
                                    <button
                                        type="button"
                                        className="w-36 inline-block rounded bg-green-500 hover:bg-green-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-green-500 text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    >
                                        Approved
                                    </button>
                                    <button
                                        type="button"
                                        className="w-36 inline-block rounded bg-red-500 hover:bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-red-500 text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    >
                                        Denied
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center text-white bg-secondary_main py-4 px-8 rounded-md border-2 border-main shadow-lg">
                <p className="text-xl font-semibold">No orders available</p>
                <p className="text-sm opacity-70">Please check back later.</p>
            </div>
            )}
        </div>
    );
}
