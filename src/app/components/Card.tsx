import React from "react";
import WineBottle from "../svg/WineBottle";

const Card = ({ id, status }) => {
  let s;
  switch (status) {
    case "R":
      s = "Reserved";
      break;
    case "O":
      s = "Occupied";
      break;
    default:
      s = "Available"
      break;
  }
  return (
    <div className="flex flex-col md:flex-row border-2 border-main p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mx-[4rem] sm:mx-[6rem] md:mx-[8rem] lg:mx-[10rem] xl:mx-[20rem] mt-6">
      {/* Image */}
      <div className="justify-self-end w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
        <WineBottle />
      </div>
      {/* Detail */}
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-10 w-full md:w-2/3 lg:w-3/4 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {/* Zone // Table */}
        <div className="flex flex-col justify-evenly space-y-4">
          {/* Zone */}
          <div>
            Zone: Vicdicta
          </div>
          {/* Table */}
          <div>
            Table: {id}
          </div>
        </div>
        {/* Status */}
        <div className="flex items-center">
          Status: {s}
        </div>
      </div>
    </div>
  );
};

export default Card;
