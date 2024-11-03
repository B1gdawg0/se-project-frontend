"use client";
import Back from "../svg/BackButton";
import Grape from "../svg/Grape";
import Cart from "../svg/Cart";
import OrderCard from "../components/orderCard";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-screen min-h-screen bg-background text-white p-[2rem]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button onClick={() => router.push("/homepage")}>
          <Back />
        </button>
        <Grape />
        <button className= "relative"onClick={() => router.push("/receipt")}>
          <div className="absolute bottom-[-5px] right-[-5px] bg-main w-[1.5rem] h-[1.5rem] rounded-full p-[0.25rem] self-center text-xs text-background">
            1
          </div>
          <Cart />
        </button>
      </div>

      {/* Menu */}
      <div className="my-8 p-[2rem] border-main border-solid border-[1px] rounded-lg">
        <div className="grid grid-cols-6 gap-[2rem]">
          {Array.from({ length: 30 }).map((_, index) => (
            <OrderCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
