"use client";
import Grape from "../svg/Grape";
import Order from "../components/order"; // Ensure this component displays individual orders correctly
import Back from "../svg/BackButton";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import CorrectMark from "../components/correctMark";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isClickPurchase, setIsClickPurchase] = useState(false);
  const [file, setFile] = useState(null); // State to hold selected file
  const [receiptUrl, setReceiptUrl] = useState("");


  useEffect(() => {
    // Load cart items from sessionStorage and add totalPrice to each item
    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const updatedCart = savedCart.map(item => ({
      ...item,
      totalPrice: (item.price * item.quantity).toFixed(2), // Calculate total price
    }));
    setCart(updatedCart);
  }, []);

  const handleUpdateCart = (updatedCart) => {
    setCart(updatedCart); 
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setReceiptUrl(URL.createObjectURL(file));
    }
    console.log("Receipt URL : ", receiptUrl);
  };

  const handlePurchase = () => {
    setIsClickPurchase(true);
  };

  const handlePost = async () => {
    console.log(file)
    const orderData = {
      t_id: "1", // Replace with dynamic transaction ID if available
      o_url: receiptUrl, // Replace with your actual order URL if available
      orderlines: cart.map(item => ({
        m_id: item.id,
        quantity: item.quantity.toString(),
        price: item.price.toString(),
      })),
    };

    try {
      await axios.post("http://127.0.0.1:8000/orders/w-olines", orderData);
      setIsClickPurchase(false)
      setIsPurchased(true);
      setTimeout(() => setIsPurchased(false), 2000);
      sessionStorage.removeItem("cart"); // Clear cart from sessionStorage
      setCart([]); // Clear cart from state
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-background">
      {/* Header */}
      <div className="py-8 relative mx-8">
        <div className="absolute left-0">
          <button onClick={() => router.push("/order")}>
            <Back />
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <Grape />
        </div>
        <h1 className="text-main text-4xl font-semibold text-center mb-2">These are your orders</h1>
        <p className="text-white text-2xl text-center">
          Please check your items carefully before making a payment. We do not refund for any reason.
        </p>
      </div>

      {/* Order Details */}
      <div className="flex flex-col mt-4 px-8">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Order key={index} product={item} onUpdateCart={handleUpdateCart} />
          ))
        ) : (
          <div className="text-center text-white text-2xl">Your cart is empty.</div>
        )}
      </div>

      {/* Purchase Button */}
      <div className="flex justify-center mx-8 mt-8">
        {cart.length > 0 ? (
          <button onClick={handlePurchase} className="bg-main text-black rounded-xl w-2/4 py-4 text-3xl font-bold my-8 hover:bg-opacity-80 transition duration-300">
            Purchase
          </button>
        ) : (
          <button className="bg-main underline italic cursor-default text-black rounded-xl w-2/4 py-4 text-3xl font-bold my-8">
            Add something to Cart!
          </button>
        )}
      </div>

      {/* Purchase Confirmation Modal */}
      {isClickPurchase && (
        <div className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-8">
          <div className="bg-background p-6 border border-main rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <Image src="https://www.scb.co.th/content/media/personal-banking/digital-banking/scb-easy/how-to/qr-code/qr-code-generated-7.jpg" width={250} height={250} alt="QR-Code" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload file</label>
              <input
                id="file_input"
                type="file"
                onChange={handleFileChange}
                className="text-black border border-gray-300 rounded-lg bg-gray-50 p-2"
              />
              <div className="text-white mt-2">
                {file ? file.name : "No file selected"}
              </div>
            </div>
            <button onClick={handlePost} className="bg-main text-black rounded-xl w-full py-2 text-lg font-bold my-2 hover:bg-opacity-80 transition duration-300">
              Confirm Purchase
            </button>
          </div>
        </div>
      )}

      {/* Purchase Success Indicator */}
      {isPurchased && (
        <div className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-8">
          <CorrectMark />
        </div>
      )}
    </div>
  );
}
