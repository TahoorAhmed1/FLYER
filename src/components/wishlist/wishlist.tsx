"use client"

import { Search, Trash2 } from "lucide-react"

export default function WishlistPage() {
  const wishlistItems = [
    { id: 1, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
    { id: 2, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
    { id: 3, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
    { id: 4, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
    { id: 5, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
    { id: 6, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
    { id: 7, productName: "Xtrada Watch", price: 99, stockStatus: "Ready Stock" },
  ]

  return (
    <div className="relative bg-white min-h-screen">
      {/* Top yellow bar */}

      <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">My Wishlist</h1>
          <div className="relative w-full md:w-auto min-w-[250px]">
            <input
              type="text"
              placeholder="Search on wishlist"
              className="pl-4 pr-10 py-2 rounded-lg bg-primary text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black" size={20} />
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[80px_2fr_1fr_1fr_1fr] bg-primary text-black font-bold py-3 px-4">
            <div className="col-span-1"></div> {/* Empty for the image placeholder */}
            <div>Product Name</div>
            <div>Price</div>
            <div>Stock Status</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[80px_2fr_1fr_1fr_1fr] items-center py-4 px-4 border-b border-gray-200 last:border-b-0"
            >
              <div className="w-16 h-16 bg-light-gray-bg rounded-md"></div> {/* Image Placeholder */}
              <div className="font-medium">{item.productName}</div>
              <div>${item.price}</div>
              <div>{item.stockStatus}</div>
              <div className="flex items-center space-x-2">
                <button className="bg-primary text-black px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity">
                  Remove
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100">
                  <Trash2 size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-primary text-black px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:opacity-90 transition-opacity">
            Show More
          </button>
        </div>
      </div>
    </div>
  )
}
