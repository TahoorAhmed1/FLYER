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
    {
      name: "New Arrivals",
      image: category,
    },
    {
      name: "Dairy & Milk",
      image: category,
    },
    {
      name: "Fresh Produce",
      image: category,
    },
    {
      name: "Meat",
      image: category,
    },
    {
      name: "Snacks",
      image: category,
    },
    {
      name: "Frozen",
      image: category,
    },
    {
      name: "Beverages",
      image: category,
    },
    {
      name: "Bakery",
      image: category,
    },
  ];

  return (
    <div className="relative bg-white py-12  overflow-hidden">
      <div className="relative container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
            Show All Departments
          </button>
        </div>

        <div className="">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
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
              640: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 35,
              },
            }}
            className="pb-12"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 text-center group-hover:text-yellow-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
