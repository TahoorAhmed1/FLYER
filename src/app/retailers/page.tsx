"use client"
import BannerSlider from "@/components/banner-slider";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import RetailerCard from "@/components/retailer-card";
import { useLocation } from "@/store/location/location";
import { useRetailer } from "@/store/retailer/retailer";

function page() {

const {retailer}=useRetailer()
  const {  city } = useLocation();

    return (
    <div>
      <BannerSlider />
      <div className="container mt-20 mb-10">
        <h2 className="text-6xl font-bold text-center">
           { city === "All" ?`Top Retailers `: `Top Retailers in ${city}`}
        </h2>
        <div className="grid grid-cols-5 gap-10  my-8">
          {retailer?.map((retailer:any, index:any) => (
            <RetailerCard retailer={retailer} key={index}/>
          ))}
        </div>
        {/* <div className="flex justify-center">
          <button className="w-[180px] mt-10 mx-auto  bg-primary hover:bg-primary text-black font-bold py-2.5  px-4 rounded-md transition-colors duration-200 text-sm">
            Show more{" "}
          </button>
        </div> */}
      </div>

      <Contactus />

      <Download />
    </div>
  );
}

export default page;
