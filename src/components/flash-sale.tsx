"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useProduct } from "@/store/products/product";
import ProductCard from "./product-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FlashSale() {
  const { product } = useProduct();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const saleProducts = product?.filter((p:any) => p.discount > 0).slice(0, 6) || [];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-xl text-primary">Flash Sale</h3>
          <div className="flex gap-2 text-sm bg-gray-100 px-3 py-1 rounded-full">
            <span className="font-mono">{String(timeLeft.hours).padStart(2,'0')}h</span>
            <span>:</span>
            <span className="font-mono">{String(timeLeft.minutes).padStart(2,'0')}m</span>
            <span>:</span>
            <span className="font-mono">{String(timeLeft.seconds).padStart(2,'0')}s</span>
          </div>
        </div>
        <a href="/special" className="text-primary hover:underline text-sm font-semibold">View All →</a>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: '.flash-prev',
            nextEl: '.flash-next',
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {saleProducts.map((item:any) => (
            <SwiperSlide key={item.id}>
              <ProductCard product={item}  />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="flash-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center -ml-4">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="flash-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center -mr-4">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}