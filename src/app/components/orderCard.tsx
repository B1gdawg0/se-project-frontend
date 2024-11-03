import Image from "next/image"
import Beer from "../../images/beer.png"
export default function orderCard(){
  return (
    <div>
      {/* Card */}
      <div className="flex flex-col items-center gap-[2rem]">
            {/* Picture */}
            <div className="w-[15rem] h-[15rem]">
              <Image src={Beer} alt="Budweiser" />
            </div>
            {/* Product name */}
            <div className="text-2xl font-thin">
              Budweiser
            </div>
            {/* Price */}
            <div className="flex items-center gap-1 font-bold text-xl">
              <span className="text-main">150</span>
              <span>Baht</span>
            </div>
          </div>
    </div>
  )
}