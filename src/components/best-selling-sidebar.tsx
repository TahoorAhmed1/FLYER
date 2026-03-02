"use client";

import { useProduct } from "@/store/products/product";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function BestSellingSidebar() {
  const { product } = useProduct();
  // Take first 4 as best selling (you can sort by sold count if available)
  const bestSelling = product?.slice(0, 4) || [];

  if (!bestSelling.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <h3 className="font-bold text-lg mb-4 pb-2 border-b border-gray-200">
        Best Selling
      </h3>
      <div className="space-y-4">
        {bestSelling.map((item:any) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                width={64}
                height={64}
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <Link href={`/product/${item.id}`} className="text-sm font-medium hover:text-primary line-clamp-2">
                {item.name}
              </Link>
              <div className="flex items-center gap-1 text-yellow-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">${item.price}</span>
                {item.oldPrice && (
                  <span className="text-gray-400 text-xs line-through">${item.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}