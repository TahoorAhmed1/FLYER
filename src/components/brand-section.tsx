"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const brands = [
  { name: "Nike", logo: "/brands/nike.png" },
  { name: "Adidas", logo: "/brands/adidas.png" },
  { name: "Puma", logo: "/brands/puma.png" },
  { name: "Zara", logo: "/brands/zara.png" },
  { name: "H&M", logo: "/brands/hm.png" },
  { name: "Apple", logo: "/brands/apple.png" },
  { name: "Samsung", logo: "/brands/samsung.png" },
  { name: "Sony", logo: "/brands/sony.png" },
];

export default function BrandSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Shop by Brands
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="relative h-16 grayscale group-hover:grayscale-0 transition-all">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}