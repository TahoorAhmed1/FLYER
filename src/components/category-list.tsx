"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useProduct } from "@/store/products/product";
import { CategoryItem } from "./shop-category-item";

export default function CategorySection() {
  const { category } = useProduct();

  return (
    <div className="relative bg-white py-10 sm:py-12 overflow-hidden">
      <div className="relative container ">
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
          {category.map((category: any, index: any) => (
            <SwiperSlide key={index}>
              <CategoryItem
                key={category.id}
                name={category.name}
                image={category.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
