"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import { useProduct } from "@/store/products/product";
import { CategoryItem } from "./shop-category-item";
import Link from "next/link";
import { ChevronRight, Grid3x3, Sparkles } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function CategorySection() {
  const { category } = useProduct();
  
  // Filter categories that have images/products
  const activeCategories = category?.filter((cat: any) => cat?.image && cat?.name) || [];

  if (!activeCategories.length) {
    return null; // Don't render if no categories
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-3">
            
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Shop By Category
              </h2>
            </div>
            <p className="text-gray-600 flex items-center gap-2">
              <span>Explore {activeCategories.length}+ categories with exclusive deals</span>
            </p>
          </div>
          
          <Link
            href="/category"
            className="group flex items-center gap-2 bg-white hover:bg-primary text-gray-700 hover:text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 hover:border-primary"
          >
            <span>Browse All Categories</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Swiper */}
        <div className="category-swiper-container relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Grid]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{
              nextEl: ".category-button-next",
              prevEl: ".category-button-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={activeCategories.length > 6}
            grid={{
              rows: 1,
              fill: "row",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="category-swiper pb-14"
          >
            {activeCategories.map((cat: any, index: number) => (
              <SwiperSlide key={cat.id || index}>
                <CategoryItem
                  id={cat.id}
                  name={cat.name}
                  image={cat.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="category-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed -ml-2 lg:-ml-6 border border-gray-200"
            aria-label="Previous categories"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          
          <button 
            className="category-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed -mr-2 lg:-mr-6 border border-gray-200"
            aria-label="Next categories"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Category Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">{activeCategories.length} Categories</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">New Arrivals Daily</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Best Price Guarantee</span>
          </div>
        </div>

        {/* Quick Category Links */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {activeCategories.slice(0, 6).map((cat: any, index: number) => (
            <Link
              key={index}
              href={`/category/${cat.id}`}
              className="text-center p-2 hover:bg-primary/5 rounded-lg transition-colors group"
            >
              <span className="text-xs font-medium text-gray-600 group-hover:text-primary">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .category-swiper {
          padding: 10px 5px 30px 5px;
          margin: -10px -5px;
        }

        .category-swiper .swiper-slide {
          height: auto;
          transition: all 0.3s ease;
        }

        .category-swiper .swiper-slide:hover {
          transform: translateY(-5px);
        }

        .category-swiper .swiper-button-next,
        .category-swiper .swiper-button-prev {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          color: #333;
          transition: all 0.3s ease;
        }

        .category-swiper .swiper-button-next:hover,
        .category-swiper .swiper-button-prev:hover {
          background: #fbbf24;
          color: black;
          transform: scale(1.1);
        }

        .category-swiper .swiper-button-next:after,
        .category-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        .category-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .category-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .category-swiper .swiper-pagination-bullet-active {
          background: #fbbf24;
          width: 24px;
          border-radius: 4px;
        }

        .category-swiper .swiper-pagination-bullet-active-main {
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .category-swiper .swiper-button-next,
          .category-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}