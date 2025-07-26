import { WhoWe } from "@/assets";
import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <div className="overlay py-20 my-10">
      <div className="py-10 container grid grid-cols-2 gap-20 items-center">
        <div className="bg-[#FFF7D7]/60  py-[10px] px-[45px]">
            <Image src={WhoWe} alt="Who" width={500} height={500} className="w-[450px] h-[490px]"></Image>
        </div>
        <div>
          <h2 className="font-bold  text-[70px] mb-[30px]">Who We Are</h2>
          <p className="font-medium text-[24px] ">
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
