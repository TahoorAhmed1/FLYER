"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { offerProduct } from "@/assets";

import OfferCard from "./offer-card";

export default function OffersSection() {
  const offers = [
    {
      name: "iPhone 14 pro",
      image: offerProduct,
      discount: 18,
      category: "Electronics",
    },
    {
      name: "Cosmetics",
      image: offerProduct,
      discount: 18,
      category: "Beauty",
    },
    {
      name: "Tomato",
      image: offerProduct,
      discount: 18,
      category: "Fresh Produce",
    },
    {
      name: "Air Pods",
      image: offerProduct,
      discount: 18,
      category: "Electronics",
    },
    {
      name: "Green Apples",
      image: offerProduct,
      discount: 18,
      category: "Fresh Produce",
    },
    {
      name: "T-shirt",
      image: offerProduct,
      discount: 18,
      category: "Fashion",
    },
    {
      name: "Laptop",
      image: offerProduct,
      discount: 25,
      category: "Electronics",
    },
    {
      name: "Milk",
      image: offerProduct,
      discount: 15,
      category: "Dairy",
    },
  ];

  return (
    <div className="relative bg-white my-14  overflow-hidden">
      <div className="relative container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Offers in Jeddah</h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
            Show All
          </button>
        </div>

        {/* Offers Swiper */}
        <div className="offers-swiper relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.5}
            navigation={{
              nextEl: ".offers-button-next",
              prevEl: ".offers-button-prev",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-offers",
              bulletActiveClass: "swiper-pagination-bullet-active-offers",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 35,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={index}>
                <OfferCard index={index} offer={offer} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="offers-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 -ml-5">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="offers-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 -mr-5">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .offers-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet-offers {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-offers {
          background: #fbbf24;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
