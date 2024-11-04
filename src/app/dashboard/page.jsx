'use client'

import { useRouter } from "next/navigation";
import Back from "../svg/BackButton";

export default function Dashboard() {
    const router = useRouter();


    return (
        <div className="bg-background w-screen h-screen p-5 flex relative items-center justify-center">
            <div className="absolute top-20 left-20 z-10">
                <button  onClick={() => router.push("/homepage")}>
                    <Back />
                </button>
            </div>
            <div className="border-2 border-gold w-full h-full rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col justify-between h-full sm:flex-row">

                    {/* Spinning Wheel Section */}
                    <button
                        className="relative flex flex-col justify-center items-center h-full w-full sm:w-1/3 p-5 text-white text-[2.5rem] font-medium hover:text-white hover:bg-background transition duration-300"
                        onClick={() => router.push("/history")}
                    >
                        <div className="absolute inset-0 bg-bottom opacity-20 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-500 sm:bg-[url('../images/ArcadeSign.jpg')] rounded-lg"></div>
                        <div className="relative z-10 pointer-events-none hover:shadow-[0px_0px_10px_rgba(0,0,0,0.8)]">
                            History
                        </div>
                    </button>

                    {/* Order Drinks Section */}
                    <button
                        className="relative flex flex-col justify-center items-center h-full w-full sm:w-1/3 p-5 text-white text-[2.5rem] font-medium hover:text-white hover:scale-105 hover:bg-background transition duration-300"
                        onClick={() => router.push("/order")}
                    >
                        <div className="absolute inset-0 bg-left opacity-20 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-500 sm:bg-[url('../images/GoodVibesSign.jpg')] rounded-lg"></div>
                        <div className="relative z-10 pointer-events-none hover:shadow-[0px_0px_10px_rgba(0,0,0,0.8)]">
                            Order Drinks
                        </div>
                    </button>

                    {/* Request Song Section */}
                    <button
                        className="relative flex flex-col justify-center items-center h-full w-full sm:w-1/3 p-5 text-white text-[2.5rem] font-medium hover:text-white hover:scale-105 hover:bg-background transition duration-300"
                        onClick={() => router.push("/request")}
                    >
                        <div className="absolute inset-0  bg-top opacity-20 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-500 sm:bg-[url('../images/EatDrinkNeon.jpg')] rounded-lg"></div>
                        <div className="relative z-10 pointer-events-none hover:shadow-[0px_0px_10px_rgba(0,0,0,0.8)]">
                            Request Song
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
}
