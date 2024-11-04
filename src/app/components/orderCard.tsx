import Image from "next/image";
export default function OrderCard({ product }) {
  return (
    <div className="flex flex-col h-full items-center gap-[1.5rem]">
      {/* Picture */}
      <div className="w-[15rem] h-[15rem] relative">
        <Image 
          src={product.url} 
          alt={product.name} 
          height={250}
          width={250}
          className="object-fit w-full h-full rounded-lg" 
        />
      </div>
      <div className="flex flex-col justify-between h-full text-center">
        {/* Product name */}
        <div className="text-2xl font-thin text-center">{product.description}</div>
        {/* Price */}
        <div className="flex items-center gap-1 font-bold text-xl justify-center">
          <span className="text-main">{product.price}</span>
          <span>Baht</span>
        </div>
      </div>
    </div>
  );
}