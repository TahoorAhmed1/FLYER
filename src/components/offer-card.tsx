"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Clock, Percent, Tag } from "lucide-react";
import { useWishlist } from "@/store/wishlist/useWishlist";

export default function OfferCard({ offer }: { offer: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addProduct, removeProduct, products } = useWishlist();
  const inWishlist = products?.find((item: any) => item.id === offer.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeProduct(offer.id);
    } else {
      addProduct(offer);
    }
  };

  const discountPercentage = offer.discount || Math.floor(Math.random() * 30) + 10;
  const originalPrice = offer.originalPrice || (offer.price * 100) / (100 - discountPercentage);

  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${offer.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${offer.image}`}
            alt={offer.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          
          {/* Discount Badge */}
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
              <Percent className="w-4 h-4" />
              <span className="font-bold">{discountPercentage}% OFF</span>
            </div>
          </div>

          {/* Limited Time Badge */}
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold">Limited</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={(e) => e.preventDefault()}
          >
            <div className="flex gap-2 w-full">
              <button
                onClick={handleWishlist}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  inWishlist 
                    ? "bg-red-500 text-white hover:bg-red-600" 
                    : "bg-white text-gray-800 hover:bg-primary hover:text-black"
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
                {inWishlist ? "Saved" : "Save"}
              </button>
              
              <button className="flex-1 bg-primary text-black py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 hover:text-primary line-clamp-2 text-base">
            {offer.name}
          </h3>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ${offer.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${Math.round(originalPrice)}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Tag className="w-4 h-4 text-primary" />
              <span className="text-xs text-green-600 font-semibold">
                You save ${Math.round(originalPrice - offer.price)}
              </span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Sold: 128</span>
              <span className="text-gray-600">Available: 45</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${Math.min(100, (128 / 173) * 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Time Left */}
          <div className="mt-3 flex items-center justify-between text-xs bg-orange-50 p-2 rounded-lg">
            <span className="text-orange-600 font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Ends in:
            </span>
            <span className="font-bold text-orange-600">
              23h 45m 12s
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}