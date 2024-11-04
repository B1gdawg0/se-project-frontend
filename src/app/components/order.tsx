"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Order({ product, onUpdateCart }) {
  const [quantity, setQuantity] = useState(product.quantity);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(newQuantity);
  };

  const decrement = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    updateCart(newQuantity);
  };

  const updateCart = (newQuantity) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (newQuantity > 0) {
      const existingProductIndex = currentCart.findIndex(item => item.description === product.description);
      if (existingProductIndex !== -1) {
        currentCart[existingProductIndex].quantity = newQuantity;
      } else {
        const totalPrice = (product.price * newQuantity).toFixed(2);
        currentCart.push({ description: product.description, quantity: newQuantity, price: totalPrice });
      }
    } else {
      const updatedCart = currentCart.filter(item => item.description !== product.description);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      onUpdateCart(updatedCart); // Update the cart in Page component
      return;
    }

    sessionStorage.setItem("cart", JSON.stringify(currentCart));
    onUpdateCart(currentCart); // Update the cart in Page component
  };

  const totalPrice = (product.price * quantity).toFixed(2);
  return (
    <div className="flex flex-row justify-between my-[2rem] mx-[2rem]">
      {/* Left */}
      <div className="flex flex-col">
        <div className="text-white text-4xl font-bold">
          {product.description}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-row justify-between items-center w-1/3">
        <div className="flex justify-end mr-[3rem] w-full text-white text-4xl font-bold text-end">
          {totalPrice} B.
        </div>
        <div className="flex flex-row gap-x-[2rem] items-center">
          <button
            onClick={decrement}
            className="bg-main rounded-full p-[0.5rem] text-black"
          >
            <FaMinus />
          </button>
          <div className="text-main text-2xl font-bold w-[5rem] text-center">
            {quantity} {quantity === 1 ? "piece" : "pcs"}
          </div>
          <button
            onClick={increment}
            className="bg-main rounded-full p-[0.5rem] text-black"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
