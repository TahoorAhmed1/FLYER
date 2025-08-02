import Download from "@/components/download";
import WhatWeDo from "@/components/whatWeDo";
import WhoWeAre from "@/components/whoweare";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <div className="aboutBackgroundImage flex justify-center items-center flex-col gap-10 ">
        <h2 className="font-semibold text-white text-7xl text-center  text-centertext-center">
          Best Business Intelligence and <br /> Analytics Solutions in the
          market
        </h2>
        <div>
          <Link
            href={"/offer"}
            className="bg-primary w-[230px] hover:bg-primary/80  px-6 py-3 text-black font-semibold rounded-[10px] text-[18px] transition-colors duration-200 flex items-center gap-2"
          >
            View Latest Offers
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <WhoWeAre />
      <WhatWeDo />
      <Download />
    </div>
  );
}

export default page;
