import { fly } from "@/assets";
import BannerSlider from "@/components/banner-slider";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import Google from "@/components/google-store";
import OffersSection from "@/components/offer-product";
import RetailerCard from "@/components/retailer-card";
import React from "react";

function page() {
  const retailers = [
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "NewWood",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-orange-50",
    },
    {
      name: "Farm",
      logo: fly,
      flyers: 2,
      offers: 1487,
      color: "bg-green-50",
    },
    {
      name: "Extra",
      logo: fly,
      flyers: 3,
      offers: 2156,
      color: "bg-yellow-50",
    },
    {
      name: "Tamimi",
      logo: fly,
      flyers: 1,
      offers: 892,
      color: "bg-indigo-50",
    },
  ];
  return (
    <div>
      <BannerSlider />
      <div className="container my-20">
        <h2 className="text-6xl text-center font-bold mb-10">
          Carrefour Hyper
        </h2>
        <div className="flex justify-center items-center gap-4 pt-2 pb-4 container">
          <button className="bg-primary hover:bg-primary text-black font-semibold px-3 w-[160px] text-center justify-center py-1.5 text-[16px] rounded-md flex items-center gap-2 transition-colors duration-200">
            Flyers
          </button>

          <button className="bg-primary hover:bg-primary text-black font-semibold px-3 w-[160px] text-center  justify-center py-1.5 text-[16px] rounded-md flex items-center gap-2 transition-colors duration-200">
            All Offer
          </button>

          <button className="bg-primary hover:bg-primary text-black font-semibold px-3 w-[160px] text-center  justify-center py-1.5 text-[16px] rounded-md flex items-center gap-2 transition-colors duration-200">
            Store{" "}
          </button>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-6xl text-center font-bold mb-5 ">Flyers </h2>
        <div className="grid grid-cols-5 container gap-10  ">
          {retailers.map((retailer, index) => (
            <RetailerCard retailer={retailer} />
          ))}
        </div>
      </div>
      <OffersSection />
      <div className="container">
        <Google />
      </div>
      <Contactus />

      <Download />
    </div>
  );
}

export default page;
