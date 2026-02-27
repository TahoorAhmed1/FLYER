"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProduct } from "@/store/products/product";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./product-card";

export default function FeaturedProducts() {
  const { product } = useProduct();
  const featuredProducts = product.slice(0, 10);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">Hand-picked just for you</p>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            View All
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {featuredProducts.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}