import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Store, Tag, ChevronRight, MapPin, Star, Heart } from "lucide-react";

interface RetailerCardProps {
  retailer: {
    id: string;
    name: string;
    flyers_count?: number;
    total_flyer_products_count?: number;
    verified?: boolean;
    location?: string;
    rating?: number;
    profile?: {
      profile_image: string;
    };
  };
}

function RetailerCard({ retailer }: RetailerCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Default values if data is missing
  const flyersCount = retailer?.flyers_count ?? 0;
  const offersCount = retailer?.total_flyer_products_count ?? 0;
  const rating = retailer?.rating || (Math.random() * 2 + 3).toFixed(1);
  const reviewCount = Math.floor(Math.random() * 200) + 20;
  
  // Handle image URL
  const storeImage = !imageError && retailer?.profile?.profile_image
    ? `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${retailer.profile.profile_image}`
    : "https://via.placeholder.com/400x300/e2e8f0/1e293b?text=Store";

  return (
    <Link
      href={`/retailers/${retailer?.id}`}
      className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30">
        {/* Image Container */}
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={storeImage}
            alt={retailer?.name || "Retailer store"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            onError={() => setImageError(true)}
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          
          {/* Verified Badge */}
          {retailer?.verified && (
            <div className="absolute top-3 right-3 bg-green-500 text-white px-2.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg z-10">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Verified
            </div>
          )}

          {/* Store Type Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1 z-10">
            <Store className="w-3 h-3" />
            Retail Store
          </div>

          {/* Wishlist Button */}
          <button 
            className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add to favorites logic
            }}
          >
            <Heart className="w-4 h-4 text-gray-700 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Header with Name and Rating */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors text-lg truncate">
                {retailer?.name || "Store Name"}
              </h3>
              
              {/* Location */}
              {retailer?.location && (
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{retailer.location}</span>
                </p>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg ml-2">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-xs">{rating}</span>
              <span className="text-xs text-gray-500">({reviewCount})</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-primary/5 rounded-lg p-3 text-center">
              <Store className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xl font-bold text-gray-900 leading-none">
                {flyersCount}
              </p>
              <p className="text-xs text-gray-600 mt-1">Active Flyers</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <Tag className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <p className="text-xl font-bold text-gray-900 leading-none">
                {offersCount}
              </p>
              <p className="text-xs text-gray-600 mt-1">Special Offers</p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn">
            <span>Visit Store</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* Quick Info */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 bg-green-500 rounded-full" />
              Open Now
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 bg-primary rounded-full" />
              Fast Response
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RetailerCard;