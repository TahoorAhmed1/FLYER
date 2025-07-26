import { AppStore, Collection, Google, WhatWe, WhoWe } from "@/assets";
import Image from "next/image";
import React from "react";

function Download() {
  return (
    <div className=" py-10 ">
      <div className="py-10 container grid grid-cols-2 gap-10">
        <div>
          <h2 className="font-bold  text-[50px] mb-[30px]">
            Download the App for <br />
            Exclusive Wishlist
            <br /> Discounts
          </h2>
          <p className="font-normal text-[22px] mb-[30px]">
            Get access to over 6 million downloads and track your favorite items
            for discounts with ease. Enjoy personalized deals and updates on
            your wishlist items.
          </p>
          <ol className="space-y-2 font-bold text-[10x]  mb-[30px] list-disc ml-5">
            <li>Google Play: 4.4/5</li>
            <li>App Store: 4.4/5</li>
          </ol>
          <div className="flex items-center  gap-10">
            <Image src={Google} width={500} height={500} alt="google"  className="w-[200px]" ></Image>
            <Image src={AppStore} width={500} height={500} alt="AppStore" className="w-[200px]"></Image>
          </div>
        </div >
        <div className="overlay3">

          <Image
            src={Collection}
            alt="Who"
            width={1000}
            height={1000}
            className="w-[517.92px] h-[423px]"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Download;
