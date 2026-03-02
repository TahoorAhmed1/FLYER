"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    name: "Johny Walker",
    image: "/image/catalog/demo/client/user-1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    name: "Jen Nguyen",
    image: "/image/catalog/demo/client/user-2.jpg",
    text: "Ut enim ad minim veniam, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidi",
  },
  {
    name: "Vin Jame",
    image: "/image/catalog/demo/client/user-3.jpg",
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adip",
  },
];

export default function TestimonialsSlider() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <h3 className="font-bold text-lg mb-4 pb-2 border-b border-gray-200">
        Testimonials
      </h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={20}
        slidesPerView={1}
        className="testimonials-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary">
                <Image src={t.image} alt={t.name} width={80} height={80} className="object-cover" />
              </div>
              <div className="name font-semibold mb-2">{t.name}</div>
              <p className="text-sm text-gray-600 italic">“{t.text}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}