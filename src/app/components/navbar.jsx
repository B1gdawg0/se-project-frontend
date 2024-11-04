'use client'
import { useEffect, useState } from 'react';
import DotDivider from "./dot_divider";
import localFont from 'next/font/local';
import { CiBeerMugFull } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const perpetuaReg = localFont({ src: '../fonts/perpetua.ttf' });

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLogin(false);
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className={`font-${perpetuaReg} w-full flex flex-col justify-between bg-background`}>
      {/* Upper section */}
      <div className="hidden lg:flex flex-row justify-between items-center mx-4 mt-2 h-8">
        <div className="flex justify-center items-center flex-row gap-4 lg:gap-10">
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <FaClock />
            <span className="hidden sm:inline">Open At : 6:00 PM To 2:00 PM</span>
          </div>
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <MdMail />
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </div>
        </div>
        <div className="flex flex-row gap-4 lg:gap-10">
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <BsFillTelephoneFill />
            <a href="tel:+66">123-456-7890</a>
          </div>
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <FaMapMarkerAlt />
            <span className="hidden sm:inline">SC48 Kasartset University, 10900</span>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex flex-col lg:flex-row mx-4 my-2 border-main border-2">
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-between items-center p-4">
          <button onClick={() => router.push("/homepage")} className="text-white text-2xl">
            THE GROOVE ROOM
          </button>
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col w-full text-white`}>
          <button onClick={() => router.push("/")} className="p-4 hover:bg-main hover:text-background">
            HOME
          </button>
          <button onClick={() => router.push("/schedule")} className="p-4 hover:bg-main hover:text-background">
            SCHEDULE
          </button>
          <button onClick={() => router.push("/review")} className="p-4 hover:bg-main hover:text-background">
            REVIEW
          </button>
          <button onClick={isLogin ? handleLogout : () => router.push("/login")} className="p-4 hover:bg-main hover:text-background">
            {isLogin ? "LOGOUT" : "SIGN IN"}
          </button>
          <button
            onClick={() => router.push("/reservation")}
            className="p-4 flex items-center justify-center gap-2 bg-main text-background hover:bg-background hover:text-main border-t border-main"
          >
            <CiBeerMugFull className="w-5 h-5" />
            RESERVATION
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-2 px-3 items-center text-white w-96 h-24 text-lg">
            <button onClick={() => router.push("/")} className="flex justify-center items-center flex-1 h-full hover:text-main">
              HOME
            </button>
            <DotDivider />
            <button onClick={() => router.push("/schedule")} className="flex justify-center items-center flex-1 h-full hover:text-main">
              SCHEDULE
            </button>
            <DotDivider />
            <button onClick={() => router.push("/review")} className="flex justify-center items-center flex-1 h-full hover:text-main">
              REVIEW
            </button>
          </div>

          <button
            onClick={() => router.push("/homepage")}
            className="hidden lg:flex justify-center items-center text-4xl text-white transition transform hover:scale-105"
          >
            THE GROOVE ROOM
          </button>

          <div className="hidden lg:flex flex-row justify-between w-76 h-24 text-white text-lg">
            <button onClick={isLogin ? handleLogout : () => router.push("/login")} className="flex justify-center items-center px-4 hover:text-main">
              {isLogin ? "LOGOUT" : "SIGN IN"}
            </button>
            <button
              onClick={() => router.push("/reservation")}
              className="flex flex-row items-center gap-2 px-6 text-main hover:bg-main hover:text-background transition-all"
            >
              <CiBeerMugFull className="w-5 h-5" />
              RESERVATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
