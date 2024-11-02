"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Order() {
    const [orders, setOrders] = useState([
        { id: 1, t_id: 1, o_time: "10:00", o_status: "Approved" },
        { id: 2, t_id: 2, o_time: "11:00", o_status: "Pending" },
        { id: 3, t_id: 3, o_time: "12:00", o_status: "Approved" },
    ]);
    const router = useRouter();
    const goToOrderDetail = (id) => {
        router.push(`order/${id}`)
    };

    return (
        <div className="bg-background w-screen h-screen justify-items-center pt-6">
            {orders ? (
                <table className="w-full max-w-7xl	  border-collapse border-2  border-main ">
                    <thead className="bg-secondary_main text-white">
                        <tr>
                            <th className="border-2 border-main  px-4 py-2">Order No.</th>
                            <th className="border-2 border-main  px-4 py-2">Table No.</th>
                            <th className="border-2 border-main  px-4 py-2">Time</th>
                            <th className="border-2 border-main  px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-secondary_main text-white">
                        {orders.map((order) => (
                            <tr key={order.id} onClick={() => goToOrderDetail(Number(order.id))}>
                                <td className="border-2 border-main  px-4 py-2">{order.id}</td>
                                <td className="border-2 border-main  px-4 py-2">{order.t_id}</td>
                                <td className="border-2 border-main  px-4 py-2">{order.o_time}</td>
                                <td className="border-2 border-main  px-4 py-2">{order.o_status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                </div>
            )}

        </div>
    );
}
