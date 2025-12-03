"use client";

import { Search, Trash2 } from "lucide-react";
import { useWishlist } from "@/store/wishlist/useWishlist";
import Link from "next/link";

export default function WishlistPage() {
  const { products, removeProduct } = useWishlist();
console.log('products', products)
  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">My Wishlist</h1>
          <div className="relative w-full md:w-auto min-w-[250px]">
            <input
              type="text"
              placeholder="Search wishlist..."
              className="pl-4 pr-10 py-2 rounded-lg bg-primary text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
              size={20}
            />
          </div>
        </div>

        {/* Wishlist Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-[80px_2fr_1fr_1fr_1fr] bg-primary text-black font-bold py-3 px-4">
            <div>Image</div>
            <div>Product Name</div>
            <div>Price</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          {products.length > 0 ? (
            products.map((item:any) => (
              <Link
               href={`/product/${item?.id}`}
                key={item.id}
                className="grid grid-cols-[80px_2fr_1fr_1fr_1fr] items-center py-4 px-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                {/* Product Image */}
                <div className="w-16 h-16 bg-light-gray-bg rounded-md overflow-hidden flex items-center justify-center">
                  {item.image_url ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${item.image_url}`}
                      alt={item.product_name || "Wishlist product"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>

                {/* Product Name */}
                <div className="font-medium truncate">
                  {item.product_name || "Unnamed Product"}
                </div>

                {/* Product Price */}
                <div className="space-x-2">
                  {item?.original_Price && (
                    <span className="text-gray-500 line-through">
                      ${item?.original_Price}
                    </span>
                  )}
                  <span className="font-semibold text-gray-900">
                    {item.price ? `$${item.price}` : "-"}
                  </span>
                </div>

                <div className="text-green-600 font-medium">Available</div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => removeProduct(item.id)}
                    className="bg-primary text-black px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Remove
                  </button>
                  
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500 font-medium">
              Your wishlist is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
