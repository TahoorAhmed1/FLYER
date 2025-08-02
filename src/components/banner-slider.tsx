"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { banner, banner2 } from "@/assets";
import Image from "next/image";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const bannerImages = [banner, banner2];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [bannerImages.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [bannerImages.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden group">
      <div className=" w-full h-full">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              width={1000}
              height={1000}
              src={image}
              alt={"image"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 rounded-2xl bg-white/20 text-center flex justify-center items-center hover:bg-white/30 text-white border-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12"
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 rounded-2xl flex justify-center items-center bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12"
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BannerSlider;
