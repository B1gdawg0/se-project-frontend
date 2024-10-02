import DotDivider from "./dot_divider";
import localFont from 'next/font/local'
import { CiBeerMugFull } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdMail } from "react-icons/md";




//👇 Configure our local font object
const perpetuaReg = localFont({ src: '../fonts/perpetua.ttf' })


export default function Navbar() {
  return (
    <div className={`font-${perpetuaReg} w-screen flex flex-col justify-between bg-background`}>
      {/* upper section */}
      <div className="flex flex-row justify-between items-center mx-[0.88rem] mt-[0.5rem] h-[2rem]">
        <div className="flex justify-center items-center flex-row gap-10 ">
          <div className="flex flex-row gap-2 items-center text-[0.8125rem] text-white">
            <FaClock />
            Open At : 6:00 PM To 2:00 PM
          </div>
          <div className="flex flex-row gap-2 items-center text-[0.8125rem] text-white">
            <MdMail />
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </div>
        </div>
        {/* Second Sector  */}
        <div className="flex flex-row gap-10  ">
          <div className="flex flex-row gap-2 items-center text-[0.8125rem] text-white">
            <BsFillTelephoneFill />
            <a href="tel:+66">123-456-7890</a>
          </div>
          <div className="flex flex-row gap-2 items-center text-[0.8125rem] text-white">
            <FaMapMarkerAlt />
            <a>SC45 Kasartset University, 10900</a>
          </div>
        </div>
      </div>
      {/* Lower Section */}
      <div className="flex flex-row mx-[0.88rem] my-[0.5rem]  border-main border-2 justify-between">
        {/* first section */}
        <div className="flex flex-row gap-2 px-3 justify-between items-center text-white w-[23rem] h-[6rem]">
          <div className="flex justify-center items-center w-full h-full hover:text-main hover:cursor-pointer">
            HOME
          </div>
          <div className="flex justify-center items-center w-full h-full hover:text-main hover:cursor-pointer">
            <DotDivider />
          </div>
          <div className="flex justify-center items-center w-full h-full hover:text-main hover:cursor-pointer">
            SCHEDULE
          </div>
          <div className="flex justify-center items-center w-full h-full hover:text-main hover:cursor-pointer">
            <DotDivider />
          </div>
          <div className="flex justify-center items-center w-full h-full hover:text-main hover:cursor-pointer">
            REVIEW
          </div>


        </div>

        {/* middle section */}
        <div className="flex flex-row justify-center items-center text-white">
          <div className="flex justify-center items-center text-[4rem]"> THE GROOVE ROOM</div>
        </div>
        {/* third section */}
        <div className="flex flex-row justify-between w-[19rem] h-[6rem] text-white ">
          <div className="flex justify-center items-center "> SIGN IN </div>
          <div className="flex flex-row gap-2 justify-center items-center px-3 text-main hover:bg-main hover:text-background">
            <CiBeerMugFull className="w-[1.23rem] h-[1.23rem]" />
            RESERVATION
          </div>
        </div>

      </div>
    </div>
  );
}