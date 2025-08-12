import { Brand, Collection, one, Retailers, two } from "@/assets";
import Image from "next/image";
import React from "react";

function Solutions() {
  return (
    <div className="container">
      {/* Header */}
      <div className="mb-12 lg:mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 lg:mb-5">
          Solutions
        </h2>
        <p className="text-base sm:text-lg lg:text-[24px] font-medium leading-relaxed">
          Business intelligence and Analytics can dramatically improve your
          Store or Product permformance
        </p>
      </div>

      <div className="mt-8 lg:mt-10 space-y-12 lg:space-y-20">
        {/* Retailers */}
        <div className="flex flex-col lg:flex-row retailerOverlay py-10 lg:py-16 px-2 items-start lg:items-center gap-6 lg:gap-4">
          <Image
            src={one}
            alt="root"
            width={1000}
            height={1000}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[113px] lg:h-[113px] shrink-0"
          />

          <div className="bg-[#1C1C1D] rounded-[20px] lg:rounded-[30px] px-4 sm:px-6 lg:px-[30px] py-6 sm:py-8 lg:py-[35px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 items-center">
            <div>
              <h2 className="text-primary font-semibold text-4xl sm:text-5xl lg:text-6xl mb-3 lg:mb-5">
                Retailers
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] text-white leading-relaxed">
                Join leading supermarkets and retail stores to publish unlimited
                flyers and offers. BI in retail helps retailers grow market
                share. Reach thousands of active users seeking deals and acquire
                new customers. Our BI tools optimize promotions, providing
                insights into market spread, depth, and pricing to maximize
                promotion budget and ROI.
              </p>
            </div>

            <div className="w-full md:col-span-2 -mt-4 md:-mt-10 lg:-mt-24 h-56 sm:h-72 md:h-80 lg:h-[395px]">
              <Image
                src={Retailers}
                alt="Who"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-6 lg:gap-4 brandoverlay2 py-10 lg:py-16 px-2">
          <div className="bg-[#1C1C1D] rounded-[20px] lg:rounded-[30px] px-4 sm:px-6 lg:px-[30px] py-6 sm:py-8 lg:py-[35px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 items-center">
            <div className="w-full md:col-span-2 -mt-4 md:-mt-10 lg:-mt-24 h-56 sm:h-72 md:h-80 lg:h-[395px]">
              <Image
                src={Brand}
                alt="Brand"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-primary font-semibold text-4xl sm:text-5xl lg:text-6xl mb-3 lg:mb-5">
                Brands
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] text-white leading-relaxed">
                Track your brand's promotions and compare them with competitors
                using our Business Intelligence & Analytics solutions. With over
                6 million offers and 266,000 new offers added monthly, our
                cloud-based dashboards provide key insights. Get timely data on
                your promotions, customers, and competitor comparisons.
              </p>
            </div>
          </div>

          <Image
            src={two}
            alt="root"
            width={1000}
            height={1000}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[113px] lg:h-[113px] shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Solutions;
