"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderDetail() {
    const { id } = useParams();
    const [order, setOrder] = useState({
        id: "",
        t_id: "",
        o_time: "10:00",
        o_status: "Approved", // คุณอาจต้องอัปเดตสถานะนี้จาก API ถ้ามี
        o_total: 0,
        o_urlslip: "https://example.com/slip.pdf", // ค่าเริ่มต้น
    });
    const [orderLine, setOrderLine] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/orders/id=${id}`);
                const orderData = response.data.payload.order; // ดึงข้อมูลคำสั่งจาก response

                // อัปเดตสถานะ order ตามข้อมูลที่ได้จาก API
                setOrder({
                    id: orderData.o_id,
                    t_id: orderData.t_id,
                    o_time: orderData.o_time,
                    o_status: "Approved", // ปรับให้เป็นค่าที่ได้จาก API ถ้ามี
                    o_urlslip: orderData.l_urlslip || "https://example.com/slip.pdf", // ใช้ URL slip ที่ได้จาก API
                    o_total: 0, // เริ่มต้นด้วย 0
                });
            } catch (error) {
                console.error("Error fetching order:", error);
            }
        };

        const fetchOrderLines = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/order-lines/o_id=${id}`);
                const fetchedOrderLines = response.data.payload.orderline.Olines.map((line) => ({
                    id: line.id,
                    m_pic: line.menu.m_url,
                    m_description: line.menu.m_description,
                    m_price: line.menu.m_price,
                    l_quantity: parseInt(line.l_quantity, 10),
                    l_price: parseFloat(line.l_price),
                }));

                setOrderLine(fetchedOrderLines);

                // Calculate total price
                const total = fetchedOrderLines.reduce((sum, line) => sum + line.l_price, 0);
                setOrder((prevOrder) => ({ ...prevOrder, o_total: total }));
            } catch (error) {
                console.error("Error fetching order lines:", error);
            }
        };

        fetchOrder(); // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลคำสั่ง
        fetchOrderLines(); // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลรายการคำสั่ง
    }, [id]);

    return (
        <div className="bg-background w-screen min-h-screen pt-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white mb-5">Order Details</h1>
    
            <div className="flex flex-row justify-center gap-x-10">
                <div className="bg-secondary_main border-1 border-main text-white mb-32">
                    {orderLine && orderLine.length > 0 ? (
                        <table className="min-w-full border-collapse border-2 border-main">
                            <thead>
                                <tr>
                                    <th className="border-2 border-main px-10 pb-3 pt-3">Image</th>
                                    <th className="border-2 border-main px-20 pb-3 pt-3">Description</th>
                                    <th className="border-2 border-main px-20 pb-3 pt-3">Price</th>
                                    <th className="border-2 border-main px-7 pb-3 pt-3">Quantity</th>
                                    <th className="border-2 border-main px-20 pb-3 pt-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderLine.map((line) => (
                                    <tr key={line.id} className="border-2 border-main">
                                        <td className="border-2 border-main p-4 text-center">
                                            <Image src={line.m_pic} width={150} height={150} alt="Menu Item" className="object-cover" />
                                        </td>
                                        <td className="border-2 border-main p-4">{line.m_description}</td>
                                        <td className="border-2 border-main p-4 text-center">{line.m_price.toFixed(2)}</td>
                                        <td className="border-2 border-main p-4 text-center">{line.l_quantity}</td>
                                        <td className="border-2 border-main p-4 text-center">{line.l_price.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>No order lines found.</div>
                    )}
                </div>
    
                <div className="bg-secondary_main border-2 border-main p-5 rounded-lg shadow-lg text-white max-h-96 overflow-y-auto">
                    <div className="flex flex-col justify-between h-full">
                        <div className="min-w-72 text-left space-y-4 ">
                            <div className="flex flex-row justify-between mb-2">
                                <div><strong>Order ID:</strong></div>
                                <div>{order.id}</div>
                            </div>
                            <div className="flex flex-row justify-between mb-2">
                                <div><strong>Table:</strong></div>
                                <div>{order.t_id}</div>
                            </div>
                            <div className="flex flex-row justify-between mb-2">
                                <div><strong>Order Time:</strong></div>
                                <div>{order.o_time}</div>
                            </div>
                            <div className="flex flex-row justify-between mb-2">
                                <div><strong>Status:</strong></div>
                                <div>{order.o_status}</div>
                            </div>
                            <div className="flex flex-row justify-between mb-2">
                                <div><strong>Total:</strong></div>
                                <div>{order.o_total.toFixed(2)}</div>
                            </div>
                            <div className="flex flex-row justify-between mb-2">
                                <strong>Payment Slip:</strong>
                                <a href={order.o_urlslip} className="text-blue-500 underline hover:text-blue-300 transition-colors">View Slip</a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="w-full py-2 rounded bg-green-500 text-white font-semibold uppercase transition duration-150 ease-in-out hover:bg-green-600"
                            >
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}    