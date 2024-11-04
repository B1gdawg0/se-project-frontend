"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function OrderCard({ menu }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const menuPrice = menu.m_price; // Get price from the menu item
  const menuDescription = menu.m_description;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    // Retrieve the current cart from session storage or initialize an empty array
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = currentCart.findIndex(item => item.description === menuDescription);

    if (existingProductIndex !== -1) {
      currentCart[existingProductIndex].quantity += quantity;
      currentCart[existingProductIndex].price = menuPrice * currentCart[existingProductIndex].quantity;
    } else {
      currentCart.push({ description: menuDescription, quantity, price: menuPrice * quantity});
    }
    sessionStorage.setItem("cart", JSON.stringify(currentCart));
    alert(`Added ${quantity} ${menuDescription} to cart!`);
    router.refresh(); // Refresh the page or update any necessary state here
  };

  // Calculate the total price based on quantity
  const totalPrice = (menuPrice * quantity).toFixed(2); // Formats the price to 2 decimal places

  return (
    <div className="flex flex-col items-center gap-[2rem]">
      {/* Picture */}
      <div className="w-[15rem] h-[15rem]">
        <img src={menu.m_url} alt={menuDescription} className="object-cover w-full h-full" />
      </div>
      {/* Product name */}
      <div className="text-2xl font-thin">{menuDescription}</div>
      {/* Increment/Remove */}
      <div className="flex flex-row w-full h-full justify-evenly font-bold text-xl">
        <button
          className="bg-main text-black rounded-full w-[2rem] h-[2rem] flex items-center justify-center"
          onClick={decrement}
        >
          <FaMinus />
        </button>
        <div>{quantity}</div>
        <button
          className="bg-main text-black rounded-full w-[2rem] h-[2rem] flex items-center justify-center"
          onClick={increment}
        >
          <FaPlus />
        </button>
      </div>
      {/* Add to Cart */}
      <div>
        <button 
          className="bg-main text-black px-[2rem] py-[0.25rem] rounded-full"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
