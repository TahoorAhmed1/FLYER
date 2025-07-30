"use client";

import { ChevronDown } from "lucide-react";

export default function NavigationButtons() {
  return (
    <div className="flex justify-center items-center gap-2 pt-2 pb-4 container">
      <button className="bg-primary hover:bg-primary text-black font-semibold px-3 py-1.5 text-[16px] rounded-md flex items-center gap-2 transition-colors duration-200">
        RETAILERS
        <ChevronDown className="w-4 h-4" />
      </button>

      <button className="bg-primary hover:bg-primary text-black font-semibold px-3 py-1.5 text-[16px] rounded-md flex items-center gap-2 transition-colors duration-200">
        CATEGORIES
        <ChevronDown className="w-4 h-4" />
      </button>

      <button className="bg-primary hover:bg-primary text-black font-semibold px-3 py-1.5 text-[16px] rounded-md flex items-center gap-2 transition-colors duration-200">
        COUPONS & DEALS
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
