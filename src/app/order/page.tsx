"use client";
import Back from "../svg/BackButton";
import Grape from "../svg/Grape";
import Cart from "../svg/Cart";
import OrderCard from "../components/orderCard";
import AddProductProduct from "../components/addProductCard";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const [menu, setMenu] = useState();
  const [isClick, setIsClick] = useState(false);
  const [notification, setNotification] = useState(0);
  const [menuItems, setMenuItems] = useState([]); // State to hold menu items
  const [error, setError] = useState(null); // State to hold any error messages

  // Function to calculate the total number of items in the cart
  const calculateCartItems = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setNotification(totalItems);
  };

  useEffect(() => {
    calculateCartItems();

    // Fetch menu data from API
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/menu");
        setMenuItems(response.data.payload.menus); // Assuming response.data is an array of menu items
      } catch (err) {
        console.error("Error fetching menu data:", err);
        setError("Failed to load menu items.");
      }
    };

    fetchMenuData();
  }, []);

  const handleClick = (menu) => {
    calculateCartItems();
    setIsClick(true);
    setMenu(menu);
  };

  return (
    <div className="w-screen min-h-screen bg-background text-white p-4 sm:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => router.push("/homepage")}>
          <Back />
        </button>
        <Grape />
        <button className="relative" onClick={() => router.push("/receipt")}>
          <div className="absolute bottom-[-5px] right-[-5px] bg-main w-6 h-6 rounded-full p-1 text-xs text-background flex items-center justify-center">
            {notification}
          </div>
          <Cart />
        </button>
      </div>

      {/* Menu */}
      <div className="my-8 p-4 sm:p-8 border-main border border-solid rounded-lg">
        {error && <div className="text-red-500">{error}</div>} {/* Display error message if any */}
        {menuItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {menuItems.map((item) => (
              <div key={item.m_id} onClick={() => handleClick(item)}>
                <OrderCard product={{id:item.m_id, price: item.m_price, description: item.m_description, url: item.m_url }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">No menu items available.</div> // Message when no items are present
        )}
      </div>

      {/* Modal for adding product */}
      {isClick && (
        <div className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-8">
          <div className="border-main bg-background rounded-xl border-[2px] p-4 sm:p-8 relative max-w-lg w-full">
            <div className="absolute top-2 left-2">
              <button onClick={() => setIsClick(false)}>
                <Back />
              </button>
            </div>
            <AddProductProduct menu={menu} setIsClick={setIsClick} calculateCartItems={calculateCartItems}/>
          </div>
        </div>
      )}
    </div>
  );
}
