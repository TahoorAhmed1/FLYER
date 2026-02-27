"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useWishlist } from "@/store/wishlist/useWishlist";
import { productImage } from "@/assets";

export default function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addProduct, removeProduct, products } = useWishlist();
  
  // Check if product is in wishlist using find
  const inWishlist = products?.find((item: any) => item.id === product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log("Added to cart:", product);
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={productImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          
          {/* Badges */}
          {product.discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold z-10">
              -{product.discount}%
            </span>
          )}
          
          {product.isNew && (
            <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold z-10">
              New
            </span>
          )}

          {/* Quick Actions */}
          <div 
            className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={(e) => e.preventDefault()}
          >
            <button
              onClick={handleWishlist}
              className={`p-3 rounded-full transition-all hover:scale-110 ${
                inWishlist 
                  ? "bg-red-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
            </button>
            
            <Link
              href={`/product/${product.id}`}
              className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
              onClick={(e) => e.stopPropagation()}
              aria-label="View product details"
            >
              <Eye className="w-5 h-5" />
            </Link>
            
            <button 
              onClick={handleAddToCart}
              className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 hover:text-primary line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 4)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews || 0})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart(e);
              }}
              className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="Quick add to cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}