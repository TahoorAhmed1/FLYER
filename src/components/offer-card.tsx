import Image from "next/image";
import Link from "next/link";
import React from "react";

function OfferCard({ index, offer }: any) {
  return (
    <Link
      href={`/product/${index}`}
      className="bg-white m-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      <div className="w-full h-[240px] flex items-center justify-center bg-white">
        <Image
          src={offer.image}
          alt={offer.name}
          width={500}
          height={500}
          className="w-full h-full object-contain transition-transform duration-300"
        />
      </div>

      <div className="px-4 py-3 bg-[#FDFDFD]">
        <p className="font-bold text-black text-xs mb-2">-15%</p>
        <h3 className="text-sm font-semibold text-primary group-hover:text-primary transition-colors duration-200">
          ${offer.discount}.00
        </h3>
        <p className="text-base text-black font-bold mt-1">{offer.name}</p>
      </div>
    </Link>
  );
}

export default OfferCard;
