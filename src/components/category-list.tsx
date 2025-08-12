"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { category } from "@/assets";
import Image from "next/image";

export default function CategorySection() {
  const categories = [
    { name: "New Arrivals", image: category },
    { name: "Dairy & Milk", image: category },
    { name: "Fresh Produce", image: category },
    { name: "Meat", image: category },
    { name: "Snacks", image: category },
    { name: "Frozen", image: category },
    { name: "Beverages", image: category },
    { name: "Bakery", image: category },
  ];

  return (
    <div className="relative bg-white py-10 sm:py-12 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Shop By Category
          </h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm sm:text-base">
            Show All Departments
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          watchOverflow
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 35 },
          }}
          className="pb-12"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={96}
                      height={96}
                      sizes="96px"
                      loading={index > 1 ? "lazy" : "eager"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center group-hover:text-yellow-600 transition-colors duration-200">
                  {cat.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
