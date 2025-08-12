import Download from "@/components/download";
import WhatWeDo from "@/components/whatWeDo";
import WhoWeAre from "@/components/whoweare";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      {/* Hero */}
      <div className="aboutBackgroundImage flex min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] items-center justify-center flex-col gap-6 sm:gap-8 px-4 sm:px-6 text-center">
        <h2 className="font-semibold text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
          Best Business Intelligence and <br /> Analytics Solutions in the
          market
        </h2>

        <div>
          <Link
            href={"/offer"}
            className="bg-primary hover:bg-primary/80 px-6 py-3 text-black font-semibold rounded-[10px] text-base sm:text-lg md:text-[18px] transition-colors duration-200 inline-flex items-center gap-2 w-full sm:w-auto"
          >
            View Latest Offers
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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

      {/* Sections */}
      <WhoWeAre />
      <WhatWeDo />
      <Download />
    </div>
  );
}

export default page;
