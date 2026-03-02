"use client";

import { useState } from "react";
import { useProduct } from "@/store/products/product";
import { ChevronRight, PlusSquare } from "lucide-react";
import Link from "next/link";

export default function VerticalCategoryMenu() {
  const { category }:any = useProduct();
  const [showAll, setShowAll] = useState(false);

  // Filter categories with icons (or just use first 12)
  const categories = category?.filter((c:any) => c.name) || [];
  const visibleCategories = showAll ? categories : categories.slice(0, 12);
  const hasMore = categories.length > 12;

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 shadow-sm">
      <div className="bg-primary text-black p-3 rounded-t-lg font-bold flex items-center gap-2">
        <span className="text-lg">☰</span>
        <span>All Categories</span>
      </div>
      <ul className="p-2">
        {visibleCategories.map((cat:any, idx:any) => (
          <li key={cat.id || idx} className="border-b border-gray-100 last:border-0">
            <Link
              href={`/category/${cat.id}`}
              className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded transition group"
            >
              <span className="text-sm text-gray-700 group-hover:text-primary">
                {cat.name}
              </span>
              {cat.children?.length > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
              )}
            </Link>
          </li>
        ))}
        {hasMore && (
          <li className="pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-semibold w-full justify-center py-2"
            >
              <PlusSquare className="w-4 h-4" />
              <span>{showAll ? "Show Less" : "More Categories"}</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}