"use client";

import Link from "next/link";

export default function NavigationButtons() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 pt-2 pb-4 container px-2">
      <Link
        href="/retailers"
        className="bg-primary hover:bg-primary text-black font-semibold px-3 py-1.5 text-sm sm:text-base rounded-md flex items-center gap-2 transition-colors duration-200 w-full sm:w-auto justify-center"
      >
        RETAILERS
      </Link>

      <Link
        href="/category"
        className="bg-primary hover:bg-primary text-black font-semibold px-3 py-1.5 text-sm sm:text-base rounded-md flex items-center gap-2 transition-colors duration-200 w-full sm:w-auto justify-center"
      >
        CATEGORIES
      </Link>

      {/* <button className="bg-primary hover:bg-primary text-black font-semibold px-3 py-1.5 text-sm sm:text-base rounded-md flex items-center gap-2 transition-colors duration-200 w-full sm:w-auto justify-center">
        COUPONS & DEALS
      </button> */}
    </div>
  );
}
