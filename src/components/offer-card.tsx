import Image from "next/image";
import Link from "next/link";

function OfferCard({ offer }: any) {
  const originalPrice = parseFloat(offer?.price?.replace(/[^0-9.-]+/g, "")) || 0;
  const currentPrice = parseFloat(offer?.sale_price?.replace(/[^0-9.-]+/g, "")) || 0;
  const discount =
    originalPrice && currentPrice
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

  return (
    <Link
      href={`/product/${offer?.id}`}
      className="bg-white m-1 w-full "
    >
    <div className="w-full h-full border border-[#000000]/10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">

      <div className="w-full h-[200px]  flex items-center justify-center bg-white relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${offer.image}`}
          alt={offer.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />

        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-[#F5F5F5] text-black text-[11px] font-semibold px-2 py-[2px] rounded">
            -{discount}%
          </span>
        )}
      </div>

      <div className="px-3 py-2 bg-[#FDFDFD]">
        <div className="flex items-center gap-2 text-sm">
          {originalPrice > 0 && (
            <span className="line-through text-gray-500">${originalPrice.toFixed(2)}</span>
          )}
          <span className="font-semibold text-black">${currentPrice.toFixed(2)}</span>
        </div>

        <p className="text-[#FFC107] text-md font-bold mt-2">
          ${currentPrice.toFixed(2)}
        </p>

      <p className="text-sm text-black font-medium mt-1 h-16">
  {offer?.title?.split(" ").slice(0, 3).join(" ")}
  {offer?.title?.split(" ").length > 5 && "..."}
</p>
      </div>
    </div>
    </Link>
  );
}

export default OfferCard;
