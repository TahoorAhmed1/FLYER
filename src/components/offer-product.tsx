"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import OfferCard from "./offer-card";
import { useProduct } from "@/store/products/product";
import { useLocation } from "@/store/location/location";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OffersSection() {
  const { product } = useProduct();
  const { city } = useLocation();

  // Filter products that have offers/discounts
  const offers = product?.filter((item: any) => item.discount > 0) || [];

  if (!offers.length) {
    return null; // Don't render if no offers
  }

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {city === "All" ? "Hot Offers 🔥" : `Offers in ${city}`}
            </h2>
            <p className="text-gray-600">
              {city === "All" 
                ? "Don't miss out on these amazing deals" 
                : `Limited time offers available in ${city}`}
            </p>
          </div>
          <Link 
            href="/offers" 
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-black px-6 py-3 rounded-lg font-semibold transition-all hover:gap-3"
          >
            View All Offers
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Offers Swiper */}
        <div className="offers-swiper relative px-4 sm:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".offers-button-next",
              prevEl: ".offers-button-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
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
            {offers.map((offer: any, index: number) => (
              <SwiperSlide key={offer.id || index}>
                <OfferCard offer={offer} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="offers-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed -ml-2 lg:-ml-6"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            className="offers-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed -mr-2 lg:-mr-6"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Offer Count Badge */}
        <div className="text-center mt-8">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            {offers.length} Active Offers Available
          </span>
        </div>
      </div>
    </section>
  );
}