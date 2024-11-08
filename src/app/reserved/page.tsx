"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Card from "../components/Card";
import Dance from "../svg/DancingInTheBurningRoom";
import RightWing from "../svg/RightWing";
import LeftWing from "../svg/LeftWing";
import axios from "axios";

export default function Reserved() {
  const [user, setUser] = useState({});
  const [tables, setTables] = useState([]); 

  useEffect(() => {

    const userData = JSON.parse(sessionStorage.getItem("user"))?.user || {};
    setUser(userData);

    if (userData.Tables) {
      setTables(userData.Tables);
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-background text-white">
      {/* Navbar */}
      <div className="fixed w-full top-0 z-10">
        <header>
          <Navbar />
        </header>
      </div>

      <div className="w-full h-[100vh] overflow-y-auto pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Title */}
          <ol className="flex items-center space-x-4 mt-[3rem] text-center">
            <li>
              <LeftWing />
            </li>
            <li className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] text-main">
              Reserved Table
            </li>
            <li>
              <RightWing />
            </li>
          </ol>

          {/* Order */}
          <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 mt-8">
            {tables.map((table) => (
              <Card key={table.ID} id={table.ID} status={table.Status} />
            ))}
          </div>

          <div className="mt-16 mb-10 sm:mt-20 md:mt-24 lg:mt-32">
            <Dance />
          </div>
        </div>
      </div>
    </div>
  );
}
