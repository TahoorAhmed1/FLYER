"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OffersSection() {
  const offers = [
    {
      name: "iPhone 14 pro",
      image: "/placeholder.svg?height=120&width=120&text=iPhone+14",
      discount: 18,
      category: "Electronics",
    },
    {
      name: "Cosmetics",
      image: "/placeholder.svg?height=120&width=120&text=Cosmetics",
      discount: 18,
      category: "Beauty",
    },
    {
      name: "Tomato",
      image: "/placeholder.svg?height=120&width=120&text=Tomato",
      discount: 18,
      category: "Fresh Produce",
    },
    {
      name: "Air Pods",
      image: "/placeholder.svg?height=120&width=120&text=AirPods",
      discount: 18,
      category: "Electronics",
    },
    {
      name: "Green Apples",
      image: "/placeholder.svg?height=120&width=120&text=Green+Apples",
      discount: 18,
      category: "Fresh Produce",
    },
    {
      name: "T-shirt",
      image: "/placeholder.svg?height=120&width=120&text=T-shirt",
      discount: 18,
      category: "Fashion",
    },
    {
      name: "Laptop",
      image: "/placeholder.svg?height=120&width=120&text=Laptop",
      discount: 25,
      category: "Electronics",
    },
    {
      name: "Milk",
      image: "/placeholder.svg?height=120&width=120&text=Milk",
      discount: 15,
      category: "Dairy",
    },
  ];

  return (
    <div className="relative bg-white py-12  overflow-hidden">
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
                spaceBetween: 40,
              },
            }}
            className="pb-12"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
                  {/* Image Section */}
                  <div className="relative p-4 bg-gray-50 h-32 flex items-center justify-center">
                    <img
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.name}
                      className="max-h-20 max-w-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Discount Badge */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{offer.discount}%
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 text-center group-hover:text-yellow-600 transition-colors duration-200">
                      {offer.name}
                    </h3>
                    <p className="text-xs text-gray-500 text-center mt-1">
                      {offer.category}
                    </p>
                  </div>
                </div>
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
