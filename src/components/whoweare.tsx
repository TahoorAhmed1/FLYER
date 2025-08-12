import { WhoWe } from "@/assets";
import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <div className="overlay py-16 sm:py-20 my-10">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 lg:gap-20 gap-8 items-center px-4 sm:px-6 lg:px-0">
        {/* Image (kept first) */}
        <div className="bg-[#FFF7D7]/60 p-3 sm:p-6 lg:py-[10px] lg:px-[45px]">
          <Image
            src={WhoWe}
            alt="Who"
            width={500}
            height={500}
            sizes="(min-width:1024px) 450px, 100vw"
            className="w-full h-auto lg:w-[450px] lg:h-[490px] object-cover lg:rounded-none rounded-xl"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-bold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-[75px] mb-3">
            Who We Are
          </h2>
          <p className="font-medium text-base sm:text-lg md:text-xl xl:text-[25px]">
            FlyerHive provides cutting-edge Business Intelligence (BI) tools to
            help retailers and brands optimize promotional strategies using data
            science. With over 8 years of historical data, we empower businesses
            to make informed decisions and drive smarter growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
