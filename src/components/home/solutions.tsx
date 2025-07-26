import { Brand, Collection, one, Retailers, two } from "@/assets";
import Image from "next/image";
import React from "react";

function Solutions() {
  return (
    <div className="container">
      <div className="mb-20">
        <h2 className=" text-7xl font-bold mb-5 ">Solutions</h2>
        <p className="text-[24px] font-medium">
          Business intelligence and Analytics can dramatically improve your
          Store or Product permformance
        </p>
      </div>

      <div className="mt-10 space-y-20">
        <div className="flex retailerOverlay py-16 px-2 items-center gap-4">
          <Image
            src={one}
            className="w-[113px] h-[113px]"
            alt="root"
            width={1000}
            height={1000}
          />

          <div className="bg-[#1C1C1D] rounded-[30px] px-[30px] py-[35px] grid grid-cols-3 gap-4 items-center justify-between">
            <div>
              <h2 className="text-primary font-semibold  text-6xl mb-5 ">
                Retailers
              </h2>
              <p className="text-[17px] text-white">
                Join leading supermarkets and retail stores to publish unlimited
                flyers and offers. BI in retail helps retailers grow market
                share. Reach thousands of active users seeking deals and acquire
                new customers. Our BI tools optimize promotions, providing
                insights into market spread, depth, and pricing to maximize
                promotion budget and ROI.
              </p>
            </div>
            <div className=" w-full -mt-24 h-[395px] col-span-2">
              <Image
                src={Retailers}
                alt="Who"
                width={1000}
                height={1000}
                className=" w-full h-full "
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 brandoverlay2 py-16 px-2 ">
          <div className="bg-[#1C1C1D] rounded-[30px] px-[30px]  py-[35px] grid grid-cols-3 gap-4 items-center justify-between">
            <div className=" w-full -mt-24 h-[395px] col-span-2">
              <Image
                src={Brand}
                alt="Brand"
                width={1000}
                height={1000}
                className=" w-full h-full "
              />
            </div>
            <div>
              <h2 className="text-primary font-semibold  text-6xl mb-5 ">
                Brands
              </h2>
              <p className="text-[17px] text-white">
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
            className="w-[113px] h-[113px]"
            alt="root"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default Solutions;
