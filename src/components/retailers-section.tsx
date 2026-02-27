"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import RetailerCard from "./retailer-card";
import { useRetailer } from "@/store/retailer/retailer";
import { useLocation } from "@/store/location/location";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Store } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RetailersSection() {
  const { retailer } = useRetailer();
  const { city } = useLocation();

  // Filter retailers that have flyers
  const activeRetailers = retailer?.filter((r: any) => r?.flyers_count > 0) || [];

  if (!activeRetailers.length) {
    return null; // Don't render if no retailers
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-2">
              <Store className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {city === "All" ? "Top Retailers" : `Retailers in ${city}`}
              </h2>
            </div>
            <p className="text-gray-600">
              {city === "All" 
                ? "Discover the best stores and their latest offers" 
                : `Explore top retailers and exclusive deals in ${city}`}
            </p>
          </div>
          
          <Link 
            href="/retailers" 
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-xl font-semibold transition-all hover:gap-3 shadow-md hover:shadow-lg"
          >
            <span>View All Retailers</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Retailers Swiper */}
        <div className="retailers-swiper relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".retailers-button-next",
              prevEl: ".retailers-button-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={activeRetailers.length > 5}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="pb-14"
          >
            {activeRetailers.map((retailer: any, index: number) => (
              <SwiperSlide key={retailer.id || index}>
                <RetailerCard retailer={retailer} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="retailers-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed -ml-2 lg:-ml-6 border border-gray-200"
            aria-label="Previous retailers"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            className="retailers-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed -mr-2 lg:-mr-6 border border-gray-200"
            aria-label="Next retailers"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {activeRetailers.length} Active Retailers
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            {activeRetailers.reduce((acc: number, r: any) => acc + (r.flyers_count || 0), 0)} Total Flyers
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {activeRetailers.reduce((acc: number, r: any) => acc + (r.total_flyer_products_count || 0), 0)} Total Offers
          </div>
        </div>
      </div>
    </section>
  );
}