import { fly } from "@/assets";
import BannerSlider from "@/components/banner-slider";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import FlyerCard from "@/components/flyer-card";
import Google from "@/components/google-store";
import OffersSection from "@/components/offer-product";
import RetailerCard from "@/components/retailer-card";
import React from "react";


async function getRetailerFlyer(id: string) {
  try {
    // const cookieStore =await cookies(); // no need for await
    // const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/client/flyer/user/${id}`);

    if (!res.ok) throw new Error("Failed to fetch product");

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }

}

async function page({ params }:any) {
 
   let pa=await params
  const {flyer,store} = await getRetailerFlyer(pa.id);
  console.log('store', store)
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
          {flyer?.map((flyer:any, index:any) => (
            <FlyerCard flyer={flyer} key={index} />
          ))}
        </div>
      </div>
      <OffersSection />
      <div className="container">
        <Google stores={store} />
      </div>
      <Contactus />

      <Download />
    </div>
  );
}

export default page;
