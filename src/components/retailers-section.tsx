"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { retailerProduct } from "@/assets";
import Image from "next/image";
import RetailerCard from "./retailer-card";
import { useEffect, useState } from "react";
import { API } from "@/services";

export default function RetailersSection() {
  // const retailers = [
  //   {
  //     name: "Panda",
  //     logo: retailerProduct,
  //     flyers: 2,
  //     offers: 1487,
  //     color: "bg-green-50",
  //   },
  //   {
  //     name: "Lulu",
  //     logo: retailerProduct,
  //     flyers: 2,
  //     offers: 1487,
  //     color: "bg-red-50",
  //   },
  //   {
  //     name: "Carrefour",
  //     logo: retailerProduct,
  //     flyers: 2,
  //     offers: 1487,
  //     color: "bg-blue-50",
  //   },
  //   {
  //     name: "Danube",
  //     logo: retailerProduct,
  //     flyers: 2,
  //     offers: 1487,
  //     color: "bg-purple-50",
  //   },
  //   {
  //     name: "NewWood",
  //     logo: retailerProduct,
  //     flyers: 2,
  //     offers: 1487,
  //     color: "bg-orange-50",
  //   },
  //   {
  //     name: "Farm",
  //     logo: retailerProduct,
  //     flyers: 2,
  //     offers: 1487,
  //     color: "bg-green-50",
  //   },
  //   {
  //     name: "Extra",
  //     logo: retailerProduct,
  //     flyers: 3,
  //     offers: 2156,
  //     color: "bg-yellow-50",
  //   },
  //   {
  //     name: "Tamimi",
  //     logo: retailerProduct,
  //     flyers: 1,
  //     offers: 892,
  //     color: "bg-indigo-50",
  //   },
  // ];
const [retailers,setRetailer]=useState<any>([])

  const fetchUserData = async () => {
    try {
      const data = await API.getRetailer();
      const response = data.data.data;
      console.log('response', response)
      setRetailer(response);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className=" py-12 px-4">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Retailers in Jeddah
          </h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
            Show All
          </button>
        </div>

        {/* Retailers Swiper */}
        <div className="retailers-swiper relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".retailers-button-next",
              prevEl: ".retailers-button-prev",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-retailers",
              bulletActiveClass: "swiper-pagination-bullet-active-retailers",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 35,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {retailers.map((retailer:any, index:any) => (
              <SwiperSlide key={index}>
                <RetailerCard retailer={retailer} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="retailers-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 -ml-5">
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
          <div className="retailers-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200 -mr-5">
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
        .retailers-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet-retailers {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-retailers {
          background: #fbbf24;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
