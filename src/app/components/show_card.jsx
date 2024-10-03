export default function ShowCard(show) {
  return (
    <div className="flex flex-row justify-between items-center bg-[#2A2A2A] w-[80rem] h-[10rem] px-4">
      <div className="flex flex-col items-center text-white">
        <div className="text-[2.25rem]">{show.name}</div>
        <div className="text-[0.8125rem]">{show.time}</div>
      </div>
      <div className="text-white text-[1.25rem]">{show.desc}</div>
      <div className="">
        <button type="button" className="bg-main p-3 text-[2rem]">
          Show more
        </button>
      </div>
    </div>
  );
}
