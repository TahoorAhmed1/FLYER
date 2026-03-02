"use client";

import { useState } from "react";
import { useProduct } from "@/store/products/product";
import ProductCard from "./product-card";

const tabs = [
  { id: 'best', label: 'Best Seller' },
  { id: 'new', label: 'New Arrivals' },
  { id: 'rating', label: 'Most Rating' },
];

export default function ListingTabs() {
  const { product } = useProduct();
  const [activeTab, setActiveTab] = useState('best');

  // Filter products based on tab (mock logic)
  const getProducts = () => {
    switch(activeTab) {
      case 'best': return product?.slice(0, 8) || [];
      case 'new': return product?.slice(2, 10) || [];
      case 'rating': return product?.slice(4, 12) || [];
      default: return [];
    }
  };

  const products = getProducts();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <ul className="flex gap-4 text-sm font-medium">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 px-1 transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <a href="#" className="text-primary hover:underline text-sm">View All</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((item:any) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}