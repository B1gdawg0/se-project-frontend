"use client"
import Grape from "../svg/Grape"
import Order from "../components/order"
import Back from "../svg/BackButton"
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter()
  return (
    <div className="w-screen h-full bg-background">
      {/* Header */}
      <div className="py-[2rem] relative mx-[2rem]">
        <div className="absolute align-middle">
          <button onClick={() => { router.push("/homepage") }}>
            <Back />
          </button>
        </div>
        {/* Logo // Return */}
        <div>
          <div className="flex flex-row justify-center">
            <div>
              <Grape />
            </div>
          </div>
        </div>

        {/* These are your order */}
        <div className="flex flex-row justify-center mt-[2rem] text-main text-4xl font-semibold">
          These are your order
        </div>

        {/* Reminder */}
        <div className="flex flex-row  justify-center text-white text-2xl mt-[3rem]">
          Please check your items carefully before making a payment. We do not refund for any reason
        </div>
      </div>

      {/* Detail */}
      <div className="flex flex-col mt-[2rem]">
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  )
}