'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GetToken } from '../../hook/token';
import Back from '../svg/BackButton';
import { useRouter } from 'next/navigation';

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([]);

    const router = useRouter();


    const getOrders = async (id) => {
        const token = GetToken();
        const getOrdersUrl = `http://localhost:8000/orders/t_id=${id}`;

        try {
            const response = await axios.get(getOrdersUrl, {
                headers: {
                    'Authorization': token,
                }
            });

            if (response.status === 200) {
                const orders = response.data;
                console.log(orders); // Log orders to the console
                // Append orders for each table
                setOrderHistory((prevOrders) => [...prevOrders, ...orders.payload.order.orders]);
            } else {
                console.error("Error fetching order history:", response);
            }
        } catch (error) {
            console.error("Error fetching order history:", error);
        }
    };

    useEffect(() => {
        const dataStr = sessionStorage.getItem("user");
        if (dataStr) {
            const data = JSON.parse(dataStr);
            const ids = data.user.Tables.map((table) => table.ID);

            console.log("Table IDs:", ids);

            ids.forEach(id => {
                getOrders(id);
            });
        }

    }, []);


    return (
        <div className="bg-background min-h-screen relative text-gray-200">
            <div className="absolute top-8 left-10 z-10">
                <button  onClick={() => router.push("/dashboard")}>
                    <Back />
                </button>
            </div>
            <h1 className="text-4xl font-serif text-main text-center py-8">Order History</h1>
            <div className="container mx-auto p-6">
                {orderHistory.length > 0 ? (
                    orderHistory.map((order, index) => (
                        <div key={index} className="bg-gray-800 border border-yellow-600 rounded-lg shadow-lg p-6 mb-6">
                            <p className="text-2xl font-semibold text-yellow-400">Table ID: {order.t_id}</p>
                            <p className="text-lg italic">Order Time: {order.o_time}</p>
                            <div className="mt-4">
                                {order.orderlines.map((line, lineIndex) => (
                                    <div key={lineIndex} className="border-t border-yellow-600 mt-4 pt-4 flex items-center">
                                        <img src={line.menu.m_url} alt={line.menu.m_description} width="100" className="rounded-lg mr-4" />
                                        <div>
                                            <p className="text-[2rem] text-yellow-300">Menu: {line.menu.m_description}</p>
                                            <p className="text-[1.5rem] text-gray-300 ">Price: ${line.l_price * line.l_quantity}</p>
                                            <p className="text-lg text-gray-300">Quantity: {line.l_quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl text-gray-400">No orders found.</p>
                )}
            </div>
        </div>

    );
};

export default OrderHistory;
