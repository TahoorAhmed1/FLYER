"use client";

import { useState } from "react";
import { Search, ArrowLeft, Plus, Minus, Grid3X3, Menu, X } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Link from "next/link";

const categories = [
  "Electronics",
  "Grocery",
  "Fruits & Vegetables",
  "Dairy",
  "Meat & Fish",
  "Frozen Foods",
  "Confectionery, Snacks",
  "Health & Beauty",
  "Beverages",
  "Bakery",
  "Laundry & Cleaning",
  "Paper & Disposables",
  "Baby & Mom",
  "Home, Furniture, Pets",
];



export default function FlyerDetail({ product    }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('product', product)

  return (
    <div className="flex min-h-screen container my-10">
      {/* Sidebar */}
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
          {filteredCategories.map((category, index) => (
            <button
              key={index}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
            >
              <span className="mr-2 text-gray-400">›</span>
              {category}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white">
          <div className="flex items-center gap-4">
            <button className="p-1">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-sm text-gray-600">Back</span>
            <span className="text-sm text-gray-400">
              {product?.length > 0 ? `1/${product.length}` : "0/0"}
            </span>
            <div className="ml-4">
              <h1 className="text-lg font-bold text-gray-900">PANDA OFF...</h1>
              <p className="text-xs text-gray-500">VALID TILL JUL 29, 2025</p>
            </div>
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

        <main className="flex-1 overflow-auto px-6 flex justify-center">
          <div className="w-full rounded-md overflow-hidden bg-white relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="w-full h-full"
            >
              {product?.map((page: any) => (
                <SwiperSlide key={page.id}>
                  <Link href={`/flyer/page/${page?.id}`} >
                    <Image
                      width={page.width}
                      height={page.height}
                      src={page.image_url || "/placeholder.svg"}
                      alt={`Flyer Page ${page.page_no}`}
                      className="w-full h-auto object-contain"
                    />
                
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
        {/* Selected Product Popup */}
        {selectedProduct && (
          <div className="fixed bottom-5 right-5 bg-white p-4 rounded-lg shadow-lg border">
            <h3 className="font-semibold">{selectedProduct.name}</h3>
            <button
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
