"use client";
import DotDivider from "./dot_divider";
import localFont from "next/font/local";
import { CiBeerMugFull } from "react-icons/ci";
import { useRouter } from "next/navigation";

// Configure our local font object
const perpetuaReg = localFont({ src: "../fonts/perpetua.ttf" });

export default function AdminNavbar() {
  const router = useRouter();

  return (
    <div
      className={`font-${perpetuaReg} w-screen flex flex-col justify-between bg-background`}
    >
      <div className="flex flex-row mx-[0.88rem] my-[0.5rem] border-main border-2 justify-between items-center flex-nowrap">
        {/* first section */}

        <div className="flex flex-row gap-10 px-10 items-center text-white w-auto h-[6rem] text-[1.125rem] flex-nowrap">
          <DotDivider />
          <div onClick={() => router.push("/admin/table")} className="flex justify-center items-center w-auto h-full hover:text-main hover:cursor-pointer">
            Confirm Table
          </div>
          <DotDivider />
          <div onClick={() => router.push("/admin/music")} className="flex justify-center items-center w-auto h-full hover:text-main hover:cursor-pointer">
            Show Music
          </div>
          <DotDivider />
          <div onClick={() => router.push("/admin/instagram")} className="flex justify-center items-center w-auto h-full hover:text-main hover:cursor-pointer">
            Show Instagram
          </div>
          <DotDivider />
          <div onClick={() => router.push("/admin/addmenu")} className="flex justify-center items-center w-auto h-full hover:text-main hover:cursor-pointer">
            Add Menu
          </div>
          <DotDivider />
          <div onClick={() => router.push("/admin/menu")} className="flex justify-center items-center w-auto h-full hover:text-main hover:cursor-pointer">
            All Menu
          </div>
          <DotDivider />
          <div onClick={() => router.push("/admin/order")} className="flex justify-center items-center w-auto h-full hover:text-main hover:cursor-pointer">
            Confirm Order
          </div>
        </div>

        {/* third section */}
        <div className="flex flex-row justify-between items-center w-[19rem] h-[6rem] text-white text-[1.125rem] flex-nowrap">
          <div className="flex flex-row gap-2 justify-center items-center px-3 text-main transition-all hover:bg-main hover:text-background hover:cursor-pointer hover:text-[1.3rem] ml-auto mr-10">
            <CiBeerMugFull className="w-[1.23rem] h-[1.23rem]" />
            LOGOUT
          </div>
        </div>
      </div>
    </div>
  );
}
