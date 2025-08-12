import { WhatWe } from "@/assets";
import Image from "next/image";
import React from "react";

function WhatWeDo() {
  return (
    <div className="overlay2 py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-20 gap-8 items-center">
        {/* Text */}
        <div className="order-2 md:order-0">
          <h2 className="font-bold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-[70px] mb-6 md:mb-8">
            What We Do
          </h2>
          <p className="font-medium text-base sm:text-lg md:text-xl xl:text-[24px]">
            Our SaaS Cloud-based BI tools allow retailers and brands to track
            promotions, analyze competitor data, and refine strategies for
            maximum sales impact. We offer real-time insights into consumer
            behavior, improving your Return on Promotion investment across
            various industries, including Electronics, Grocery, Health &amp;
            Beauty, and more.
          </p>
        </div>

        {/* Image */}
        <div className="bg-[#FFF7D7]/60 p-3 sm:p-6 lg:py-[10px] lg:px-[45px]">
          <Image
            src={WhatWe}
            alt="What We Do"
            width={500}
            height={500}
            sizes="(min-width: 1024px) 450px, 100vw"
            className="w-full h-auto lg:w-[450px] lg:h-[490px] object-cover lg:rounded-none rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
