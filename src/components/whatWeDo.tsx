import { WhatWe, WhoWe } from "@/assets";
import Image from "next/image";
import React from "react";

function WhatWeDo() {
  return (
    <div className="overlay2 py-20 ">
      <div className="py-10 container grid grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-bold  text-[70px] mb-[30px]">What We Do</h2>
          <p className="font-medium text-[24px] ">
            Our SaaS Cloud-based BI tools allow retailers and brands to track
            promotions, analyze competitor data, and refine strategies for
            maximum sales impact. We offer real-time insights into consumer
            behavior, improving your Return on Promotion investment across
            various industries, including Electronics, Grocery, Health & Beauty,
            and more.
          </p>
        </div>
        <div className="bg-[#FFF7D7]/60 py-[10px] px-[45px]">
          <Image
            src={WhatWe}
            alt="Who"
            width={500}
            height={500}
            className="w-[450px] h-[490px]"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
