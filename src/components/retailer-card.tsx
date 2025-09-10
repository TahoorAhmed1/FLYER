import Image from "next/image";
import Link from "next/link";
import React from "react";

function RetailerCard({ retailer }: any) {
  return (
    <Link
      href={`/retailers/${retailer?.id}`}
      className="bg-white group my-2 mx-1  transition-shadow duration-300 overflow-hidden group cursor-pointer"
    >
      <div className="border border-[#000000]/10  rounded-lg shadow-md hover:shadow-lg">
        <div className="w-full h-[200px]  flex items-center justify-center bg-white ">
          <Image
            src={retailer?.profile?.profile_picture_url}
            alt={retailer.name}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="py-4 px-2 ">
          <h2 className="text-[19px] text-primary font-semibold h-[30px]">
  {retailer?.profile?.full_name?.split(" ")[0]} {/* First Name */}
          </h2>
          <div className=" mb-4">
            <p className="text-base text-[#29292E] mb-1">
              <span className="font-semibold mr-1">
                {retailer?.flyer_count ?? 0 } flyers
              </span>{" "}
              <span className="font-semibold">
                {retailer.product_count ?? 0} offers
              </span>
            </p>
          </div>

          <button className="w-full   bg-primary hover:bg-primary text-black font-bold py-2 px-4 rounded-md transition-colors duration-200 text-sm">
            Check It Out
          </button>
        </div>
      </div>
    </Link>
  );
}

export default RetailerCard;
