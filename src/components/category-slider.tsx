"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useProduct } from "@/store/products/product";
import ProductCard from "./product-card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategorySlider({ title, image, categoryId }:any) {
  const { product } = useProduct();
  const products = product?.slice(0, 6) || [];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden">
          <Image src={image} alt={title} width={80} height={80} className="object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-xl">{title}</h3>
          <ul className="flex gap-3 text-sm text-gray-600 mt-1">
            <li><a href="#" className="hover:text-primary">Smartphone</a></li>
            <li><a href="#" className="hover:text-primary">Tablets</a></li>
            <li><a href="#" className="hover:text-primary">Computer</a></li>
            <li><a href="#" className="hover:text-primary">Accessories</a></li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: `.cat-prev-${categoryId}`,
            nextEl: `.cat-next-${categoryId}`,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
          }}
        >
          {products.map((item:any) => (
            <SwiperSlide key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`cat-prev-${categoryId} absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center -ml-4`}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className={`cat-next-${categoryId} absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center -mr-4`}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}