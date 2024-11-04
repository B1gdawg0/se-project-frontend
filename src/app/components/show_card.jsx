export default function ShowCard(show) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#2A2A2A] w-full md:w-[80rem] h-auto md:h-[10rem] p-4 md:px-4 space-y-4 md:space-y-0">
      <div className="flex flex-col items-center text-white text-center md:text-left">
        <div className="text-[1.5rem] md:text-[2.25rem]">{show.name}</div>
        <div className="text-[0.75rem] md:text-[0.8125rem]">{show.time}</div>
      </div>
      <div className="text-white text-[1rem] md:text-[1.25rem] text-center md:text-left">{show.desc}</div>
      <div className="">
        <button type="button" className="bg-main p-2 md:p-3 text-[1.5rem] md:text-[2rem]">
          Show more
        </button>
      </div>
    </div>
  );
}
