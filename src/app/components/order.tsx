export default function order({ product }) {
  return (
    <div className="flex flex-row justify-between my-[2rem] mx-[2rem]">
      {/* Left */}
      <div className="flex flex-col">
      <div className="text-white text-4xl font-bold">
        {product.description}
      </div>

      <div className="text-main text-xl font-bold">
      {product.quantity} {product.quantity === 1 ? "piece." : "pcs."}
      </div>
    </div>

    {/* Right */}
    <div className="text-white text-4xl font-bold">
      {product.price.toFixed(2)} B.
    </div>
  </div>
  )
}