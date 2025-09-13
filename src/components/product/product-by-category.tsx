"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

import { useProduct } from "@/store/products/product";
import { API } from "@/services";
import OfferCard from "../offer-card";

export default function FlyerDetail({ params }: { params: { category_id: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { category } = useProduct();

  const filteredCategories = category?.filter((c: any) =>
    c?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setProducts([]); // reset while fetching new category
        const data = await API.getProductByCategory(params?.category_id);
        setProducts(data.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params?.category_id) {
      fetchProducts();
    }
  }, [params?.category_id]);

  return (
    <div className="flex min-h-screen container my-10">
      <aside className="w-64 bg-white border-gray-200 flex-shrink-0">
        <div className="p-4 border-gray-100">
          <h2 className="font-semibold text-sm text-gray-800 mb-4 tracking-wide">
            CATEGORIES
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
            />
            {searchTerm && (
              <X
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 cursor-pointer"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>
        </div>

        <nav className="overflow-y-auto">
          {filteredCategories.map(({ name, id }: any, index: any) => {
            const isActive = params?.category_id == id;
            return (
              <Link
                href={`/category/${id}`}
                key={index}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center rounded-md ${
                  isActive
                    ? "bg-slate-50/10 text-primary font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`mr-2 ${
                    isActive ? " text-primary" : "text-gray-400"
                  }`}
                >
                  ›
                </span>
                {name}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 px-6 flex flex-col pt-12">
        {loading ? (
          <p className="text-gray-400">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((offer: any, index: any) => (
              <OfferCard key={index} index={index} offer={offer} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found for this flyer.</p>
        )}
      </div>
    </div>
  );
}
