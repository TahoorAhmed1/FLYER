import Image from "next/image";
import Link from "next/link";
import React from "react";

function RetailerCard({ retailer }: any) {
  return (
    <Link
      href={"/retaier"}
      className="bg-white group my-2 mx-1  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={retailer.logo}
        alt={retailer.name}
        className="h-[232px] max-w-full object-contain  transition-transform duration-300"
      />

      <div className="py-4 px-2">
        <h2 className="text-[19px] text-primary font-semibold">Hyper Panda</h2>
        <div className=" mb-4">
          <p className="text-base text-[#29292E] mb-1">
            <span className="font-semibold">{retailer.flyers} flyers</span>{" "}
            <span className="font-semibold">{retailer.offers} offer(s)</span>
          </p>
        </div>

        <button className="w-full   bg-primary hover:bg-primary text-black font-bold py-2 px-4 rounded-md transition-colors duration-200 text-sm">
          Check It Out
        </button>
      </div>
    </Link>
  );
}

export default RetailerCard;
