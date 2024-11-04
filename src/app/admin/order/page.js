"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Order() {
    const [orders, setOrders] = useState([]);
    const router = useRouter();

    const goToOrderDetail = (id) => {
        router.push(`order/${id}`);
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:8000/orders");
                if (response.data && response.data.payload.orders.orders) {
                    console.log(response.data);
                    const formattedOrders = response.data.payload.orders.orders.map((order) => ({
                        id: String(order.o_id),
                        t_id: order.t_id,
                        o_time: order.o_time, // Directly use the API response for time
                    }));
                    setOrders(formattedOrders);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="bg-background w-screen h-screen justify-items-center pt-6">
            {orders.length > 0 ? (
                <table className="w-full max-w-7xl border-collapse border-2 border-main">
                    <thead className="bg-secondary_main text-white">
                        <tr>
                            <th className="border-2 border-main px-4 py-2">No.</th>
                            <th className="border-2 border-main px-4 py-2">Order No.</th>
                            <th className="border-2 border-main px-4 py-2">Table No.</th>
                            <th className="border-2 border-main px-4 py-2">Time</th>
                            <th className="border-2 border-main px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-secondary_main text-white">
                        {orders.map((order, index) => (
                            <tr key={index} onClick={() => goToOrderDetail(order.id)}>
                                <td className="border-2 border-main px-4 py-2">{index + 1}</td>
                                <td className="border-2 border-main px-4 py-2">{order.id}</td> {/* Sequential Order Number */}
                                <td className="border-2 border-main px-4 py-2">{order.t_id}</td>
                                <td className="border-2 border-main px-4 py-2">{order.o_time}</td> {/* Display time directly */}
                                <td className="border-2 border-main px-4 py-2">Pending</td> {/* Placeholder for status */}
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
