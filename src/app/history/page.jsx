'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const router = useRouter();

    // Mock fetch function simulating data retrieval from an API
    const fetchOrderHistory = async () => {
        // Simulated response data
        const data = [
            { o_time: '2024-10-01 14:30', o_id: 'ORD123', m_id: 'MENU1', l_quantity: 2, l_price: 15.00 },
            { o_time: '2024-10-02 18:45', o_id: 'ORD124', m_id: 'MENU2', l_quantity: 1, l_price: 12.50 },
            { o_time: '2024-10-03 19:15', o_id: 'ORD125', m_id: 'MENU3', l_quantity: 3, l_price: 30.00 },
            { o_time: '2024-10-04 20:00', o_id: 'ORD126', m_id: 'MENU4', l_quantity: 1, l_price: 20.00 },
        ];

        // Simulate a network delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };

    useEffect(() => {
        const getOrderHistory = async () => {
            const orders = await fetchOrderHistory();
            setOrderHistory(orders);
        };

        getOrderHistory();
    }, []);

    return (
        <div className="bg-background w-screen min-h-screen  h-full p-4">
            <h1 className="text-2xl text-center mt-20 text-white font-bold mb-4">Order History</h1>
            <table className="min-w-full bg-background border border-gray-300">
                <thead>
                    <tr className="bg-main-100 text-white">
                        <th className="border px-4 py-2">Order Time</th>
                        <th className="border px-4 py-2">Order ID</th>
                        <th className="border px-4 py-2">Menu ID</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orderHistory.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="border text-center px-4 py-2">Loading...</td>
                        </tr>
                    ) : (
                        orderHistory.map((order, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{order.o_time}</td>
                                <td className="border px-4 py-2">{order.o_id}</td>
                                <td className="border px-4 py-2">{order.m_id}</td>
                                <td className="border px-4 py-2">{order.l_quantity}</td>
                                <td className="border px-4 py-2">${order.l_price.toFixed(2)}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <button
                onClick={() => router.push("/dashboard")}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Back to Home
            </button>
        </div>
    );
};

export default OrderHistory;
