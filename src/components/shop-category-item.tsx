import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CategoryItemProps {
  id: string;
  name: string;
  image: string;
}

export function CategoryItem({ id, name, image }: CategoryItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const categoryImage = !imageError && image
    ? `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${image}`
    : "https://via.placeholder.com/200x200/e2e8f0/1e293b?text=Category";

  return (
    <Link
      href={`/category/${id}`}
      className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={categoryImage}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            onError={() => setImageError(true)}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />

          {/* Hover Content */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="font-semibold text-sm">Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="p-4 text-center">
          <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-base truncate">
            {name}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {Math.floor(Math.random() * 50) + 10} items
          </p>
        </div>
      </div>
    </Link>
  );
}