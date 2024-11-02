"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import stage from "../../../../images/stage.png";
import Image from "next/image";

export default function OrderDetail() {
    const { id } = useParams();
    const [order, setOrder] = useState({
        id: id,
        t_id: id,
        o_time: "10:00",
        o_status: "Approved",
        o_total: 854.20,
        o_urlslip: "https://example.com/slip.pdf"
    });
    const [orderLine, setOrderLine] = useState([
        {
            id: 1,
            m_pic: "https://example.com/images/music1.jpg",
            m_description: "A vibrant and lively track that uplifts spirits.",
            m_price: 9.99,
            l_quantity: 20
        },
        {
            id: 2,
            m_pic: "https://example.com/images/music2.jpg",
            m_description: "An emotional ballad with a soothing melody.",
            m_price: 12.99,
            l_quantity: 15
        },
        {
            id: 3,
            m_pic: "https://example.com/images/music3.jpg",
            m_description: "A high-energy rock anthem that excites and inspires.",
            m_price: 8.99,
            l_quantity: 30
        },
        {
            id: 4,
            m_pic: "https://example.com/images/music4.jpg",
            m_description: "A smooth jazz piece perfect for relaxation.",
            m_price: 11.49,
            l_quantity: 10
        },
        {
            id: 5,
            m_pic: "https://example.com/images/music5.jpg",
            m_description: "A powerful orchestral score with dramatic highs and lows.",
            m_price: 14.99,
            l_quantity: 5
        },
    ]);

    return (
        <div className="bg-background w-screen h-screen pt-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white mb-5">Order Details</h1>

            <div className="flex flex-row justify-center gap-x-10">
                <div className="bg-secondary_main border-2 border-main text-white">
                    {orderLine && orderLine.length > 0 ? (
                        <table className="min-w-full border-collapse border-2 border-main ">
                            <thead>
                                <tr>
                                    <th className="border-2 border-main p-2">Image</th>
                                    <th className="border-2 border-main p-2">Description</th>
                                    <th className="border-2 border-main p-2">Price</th>
                                    <th className="border-2 border-main p-2">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderLine.map((line) => (
                                    <tr key={line.id} className="border-2 border-main">
                                        <td className="border-2 border-main p-2">
                                            <Image src={stage} width={100} height={100} alt="Stage" />
                                        </td>
                                        <td className="border-2 border-main p-2">{line.m_description}</td>
                                        <td className="border-2 border-main p-2">{line.m_price}</td>
                                        <td className="border-2 border-main p-2">{line.l_quantity}</td>
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
