export default function order() {
  return (
    <div className="flex flex-row justify-between my-[2rem] mx-[2rem]">
      {/* Left */}
      <div className="flex flex-col">
      <div className="text-white text-4xl font-bold">
        Blue Label Exclusive
      </div>

      <div className="text-main text-xl font-bold">
        Volume: 1.5 L
      </div>
    </div>

    {/* Right */}
    <div className="text-white text-4xl font-bold">
      400.00
    </div>
  </div>
  )
}