import Image from "next/image";
import Link from "next/link";
import React from "react";

function FlyerCard({ flyer }: any) {
  const validFrom = flyer?.valid_from ? new Date(flyer.valid_from) : null;
  const validTo = flyer?.valid_to ? new Date(flyer.valid_to) : null;
  const today = new Date();


  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

  return (
    <Link
      href={`/flyer/${flyer?.id}`}
      className="bg-white rounded-lg shadow-sm border border-[#000000]/10 hover:shadow-lg my-1 transition-shadow duration-300 overflow-hidden cursor-pointer"
    >
        <Image
          width={1000}
          height={1000}
          src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${flyer?.banner_image}`}
          alt={flyer?.title ?? "Flyer image"}
          className="h-[240px] w-full object-cover"
        />

      

      <div className="py-4 px-2">
        {validFrom && validTo && (
          <p className="text-sm text-black font-semibold text-[17px] mb-3">
            {formatDate(validFrom)} – {formatDate(validTo)}
          </p>
        )}

        {/* Flyer Title */}
        <h2 className="text-lg font-semibold text-primary text-[18px] mb-5">
          {flyer?.title ?? "Untitled Flyer"}
        </h2>
      </div>
    </Link>
  );
}

export default FlyerCard;
