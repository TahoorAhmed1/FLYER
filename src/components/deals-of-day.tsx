"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useProduct } from "@/store/products/product";

export default function DealsOfTheDay() {
  const { product } = useProduct();

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dealProduct = product?.[0];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold inline-block mb-5">
              Limited Time Offer
            </span>

            <h2 className="text-4xl font-bold text-black mb-4">
              Deals of the Day
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              Grab the best offers before the timer runs out.
            </p>

            {/* Timer */}
            <div className="flex gap-4 mb-8">
              {[
                { label: "Hrs", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-black text-white px-6 py-4 rounded-lg text-center min-w-[90px]"
                >
                  <div className="text-2xl font-bold">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs opacity-80">{item.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="bg-primary text-black px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-primary/90 transition"
            >
              Shop Now
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* RIGHT SIDE PRODUCT CARD */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">

            <div className="relative h-[320px] mb-6 bg-white rounded-xl flex items-center justify-center">

              {dealProduct ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${dealProduct.image}`}
                  alt={dealProduct.name}
                  fill
                  className="object-contain p-6"
                />
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=800"
                  alt="Sample Product"
                  fill
                  className="object-contain p-6"
                />
              )}
            </div>

            <h3 className="text-2xl font-semibold text-black mb-3">
              {dealProduct?.name || "Premium Wireless Headphones"}
            </h3>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-3xl font-bold text-primary">
                ${dealProduct?.price || 89}
              </span>

              <span className="text-lg line-through text-gray-400">
                ${dealProduct?.originalPrice || 129}
              </span>

              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                {dealProduct?.discount || 30}% OFF
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}