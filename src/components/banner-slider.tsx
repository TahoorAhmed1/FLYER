"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useProduct } from "@/store/products/product";
import Link from "next/link";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { slider } = useProduct();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  }, [slider.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  }, [slider.length]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slider?.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-110"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${slide.image}`}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="max-w-2xl text-white">
                    <span className="bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      New Arrival
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      Summer Sale
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 text-gray-200">
                      Up to 50% off on selected items
                    </p>
                    <Link
                      href="/shop"
                      className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:gap-3"
                    >
                      Shop Now
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-20 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slider.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;