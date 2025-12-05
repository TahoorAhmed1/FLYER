import { AppStore, Collection, Google } from "@/assets";
import Image from "next/image";
import React from "react";

function Download() {
  return (
    <div className="container py-8 sm:py-10">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] leading-tight mb-4 sm:mb-[30px] break-words">
            Download the App for <br className="hidden md:block" />
            Exclusive Wishlist
            <br className="hidden md:block" /> Discounts
          </h2>

          <p className="font-normal text-sm sm:text-lg md:text-[22px] leading-relaxed mb-4 sm:mb-[30px] text-muted-foreground mx-auto md:mx-0 max-w-prose">
            Get access to over 6 million downloads and track your favorite items
            for discounts with ease. Enjoy personalized deals and updates on
            your wishlist items.
          </p>

          <ol className="space-y-1.5 sm:space-y-2 font-bold text-base sm:text-lg md:text-[22px] mb-5 sm:mb-[30px] list-disc pl-5 mx-auto md:mx-0 max-w-[36rem]">
            <li>Google Play: 4.4/5</li>
            <li>App Store: 4.4/5</li>
          </ol>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-6 md:gap-10 ">
            <Image
              src={Google}
              alt="Get it on Google Play"
              width={200}
              height={60}
              sizes="(min-width: 1024px) 200px, (min-width: 640px) 180px, 150px"
              className="w-[140px] xs:w-[150px] sm:w-[180px] md:w-[200px] h-auto"
              loading="lazy"
            />
            <Image
              src={AppStore}
              alt="Download on the App Store"
              width={200}
              height={60}
              sizes="(min-width: 1024px) 200px, (min-width: 640px) 180px, 150px"
              className="w-[140px] xs:w-[150px] sm:w-[180px] md:w-[200px] h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right */}
        <div className="overlay3 flex md:block justify-center">
          <div className="relative w-full max-w-[520px] md:w-[517.92px]">
            <Image
              src={Collection}
              alt="App collection preview"
              width={1000}
              height={423}
              sizes="(min-width: 1024px) 518px, (min-width: 640px) 80vw, 100vw"
              className="w-full h-auto object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
