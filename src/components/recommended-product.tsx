"use client";

import { useProduct } from "@/store/products/product";
import ProductCard from "./product-card";

export default function RecommendedProducts() {
  const { product } = useProduct();
  const recommended = product?.slice(8, 11) || [];

  if (!recommended.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <h3 className="font-bold text-lg mb-4 pb-2 border-b border-gray-200">
        Recommended
      </h3>
      <div className="space-y-4">
        {recommended.map((item:any) => (
          <ProductCard key={item.id} product={item}  />
        ))}
      </div>
    </div>
  );
}