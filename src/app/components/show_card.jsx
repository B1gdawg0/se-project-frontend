"use client";

export default function ShowCard({ name, desc, time}) {
  return (
    <div className="flex flex-row justify-between items-center bg-[#2A2A2A] w-[80rem] h-[10rem] px-4 cursor-pointer border-[1px] border-main">
      <div className="flex flex-col items-start text-white w-2/6">
        <div className="text-[2.25rem] font-semibold">{name}</div>
        <div className="text-[0.8125rem] text-gray-200">{time}</div>
      </div>
      <div className="text-white text-[1.25rem] w-3/6 truncate px-4">{desc}</div>
      <div className="w-1/6">
        <button 
          type="button" 
          className="bg-main p-3 text-[1.5rem] font-semibold text-black w-full"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
