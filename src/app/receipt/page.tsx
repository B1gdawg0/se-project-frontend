"use client";
import Grape from "../svg/Grape";
import Order from "../components/order"; // Make sure this component handles displaying individual orders correctly
import Back from "../svg/BackButton";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart items from sessionStorage and add totalPrice to each item
    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const updatedCart = savedCart.map(item => ({
      ...item,
      totalPrice: (item.price * item.quantity).toFixed(2), // Calculate total price
    }));
    console.log(updatedCart);
    setCart(updatedCart);
  }, []);

  const handleUpdateCart = (updatedCart) => {
    setCart(updatedCart); 
  };

  return (
    <div className="w-screen min-h-screen bg-background">
      {/* Header */}
      <div className="py-[2rem] relative mx-[2rem]">
        <div className="absolute align-middle">
          <button onClick={() => { router.push("/order") }}>
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
          These are your orders
        </div>

        {/* Reminder */}
        <div className="flex flex-row justify-center text-white text-2xl mt-[3rem]">
          Please check your items carefully before making a payment. We do not refund for any reason.
        </div>
      </div>

      {/* Detail */}
      <div className="flex flex-col mt-[2rem] px-[2rem]">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Order key={index} product={item} onUpdateCart={handleUpdateCart}/> // Assuming 'product' prop structure matches the Order component's expected input
          ))
        ) : (
          <div className="text-center text-white text-2xl">Your cart is empty.</div>
        )}
      </div>
      <div className="flex justify-center mx-[3rem]">
        {cart.length > 0 ? (<button className="bg-main text-black rounded-xl w-2/4 py-[1rem] text-3xl font-bold my-[5rem]">
          Purchase
        </button>)
        :
        <button className="bg-main underline italic cursor-default text-black rounded-xl w-2/4 py-[1rem] text-3xl font-bold my-[5rem]">
          Add something to Cart!
        </button>
        }
        
      </div>
    </div>
  );
}
