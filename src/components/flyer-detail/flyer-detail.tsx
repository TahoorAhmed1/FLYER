"use client";

import { useState } from "react";
import { Search, ArrowLeft, Plus, Minus, Grid3X3, Menu, X } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useProduct } from "@/store/products/product";

export default function FlyerDetail({ product, flyer_id }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useProduct();
  const filteredCategories = category?.filter((category: any) =>
    category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let page = [
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      image: "uploads/user_profile/1764624772_692e098438e63.png",
      created_at: "2025-12-01T21:32:52.000000Z",
      updated_at: "2025-12-01T21:32:52.000000Z",
    },
  ];
  return (
    <div className="flex min-h-screen container my-10">
      <aside className="w-64 bg-white border-gray-200 flex-shrink-0">
        <div className="p-4 border-gray-100">
          <h2 className="font-semibold text-sm text-gray-800 mb-4 tracking-wide">
            CATEGORIES
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
            />
            {searchTerm && (
              <X
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 cursor-pointer"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>
        </div>

        <nav className="overflow-y-auto">
          {filteredCategories.map(({ name, id }: any, index: any) => (
            <Link
              href={`/category/${id}`}
              key={index}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
            >
              <span className="mr-2 text-gray-400">›</span>
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center px-6 py-4 bg-white">
          <div className="flex items-center gap-4">
            <button className="p-1">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-sm text-gray-600">Back</span>
            <span className="text-sm text-gray-400">
              {product?.length > 0 ? `${currentPage}/${product.length}` : "0/0"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1.5 bg-black text-white rounded-full">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-1.5 bg-black text-white rounded-full">
              <Minus className="w-4 h-4" />
            </button>
            <button className="p-2">
              <Grid3X3 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2">
              <Menu className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto px-4">
          <div className="w-full  overflow-hidden bg-white ">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(s) => setCurrentPage(s.activeIndex + 1)}
            >
              {product?.pages?.map(({products}: any, index: any) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-12 gap-1 bg-black min-h-screen p-1 rounded-md  ">
                    {products?.map((item: any, idx: number) => {
                      console.log('item', item)
                      const layout = (() => {
                        if (idx === 0) return { col: "col-span-4 row-span-2" }; // BIG 1 (left tall)
                        if (idx === 1) return { col: "col-span-4 row-span-2" }; // Top small 1
                        if (idx === 2) return { col: "col-span-4 row-span-2" }; // Top small 2 (wider)
                        if (idx === 3)
                          return {
                            col: "col-span-4 row-span-4",
                            start: "col-start-9 row-start-1",
                          }; // BIG 2 (right tall, starts at col 9)
                        if (idx >= 4 && idx <= 6)
                          return { col: "col-span-4 row-span-2" }; // Row 5: 3 products
                        if (idx >= 7) return { col: "col-span-4 row-span-2" }; // Row 6+: 3 products
                        return { col: "col-span-4" };
                      })();

                      return (
                    <Link href={`/product/${item.id}`}
  key={item.id || idx}
  className={`relative overflow-hidden bg-white rounded-md shadow-sm ${layout.col} ${layout.start || ""}`}
>
  {/* Product Image */}
  <Image
    src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${item?.image}`}
    fill
    alt={item.title}
    className="object-cover transition-transform duration-500 hover:scale-105"
    priority={idx < 5}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  {/* Sale / Label Badge */}
  {item.label && (
    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
      {item.label}
    </span>
  )}

  {/* Content Box */}
  <div className="absolute bottom-2 left-2 right-2 text-white">
    
    {/* Title */}
    <h3 className="font-bold text-sm md:text-base leading-tight">
      {item.title}
    </h3>

    {/* Short Description */}
    {item.short_desc && (
      <p className="text-xs md:text-sm opacity-80">{item.short_desc}</p>
    )}

    {/* Price Section */}
    <div className="flex items-center gap-2 mt-1">
      {/* Sale Price (big) */}
      {item.sale_price ? (
        <>
          <span className="text-lg font-bold text-white">
            Rs {item.sale_price}
          </span>
          <span className="text-sm line-through opacity-70">
            Rs {item.price}
          </span>
        </>
      ) : (
        <span className="text-lg font-bold">Rs {item.price}</span>
      )}
    </div>
  </div>
</Link>

                      );
                    })}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </div>
    </div>
  );
}
