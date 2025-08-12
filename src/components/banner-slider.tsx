"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const togglePlayPause = () => setIsPlaying((p) => !p);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 4000);
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

  // --- Mobile swipe (no visual change) ---
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta > 0 ? prevSlide() : nextSlide();
    touchStartX.current = null;
  };

  return (
    <div
      className="
        relative w-full overflow-hidden group
        h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px]
      "
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="w-full h-full">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={image}
              alt="banner"
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next (same look on desktop; always visible on touch) */}
      <button
        className="
          absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-2xl
          flex justify-center items-center border-0 cursor-pointer
          bg-white/20 text-white backdrop-blur-sm hover:bg-white/30
          transition-all duration-300
          opacity-100 md:opacity-0 md:group-hover:opacity-100
        "
        onClick={prevSlide}
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="
          absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-2xl
          flex justify-center items-center border-0 cursor-pointer
          bg-white/20 text-white backdrop-blur-sm hover:bg-white/30
          transition-all duration-300
          opacity-100 md:opacity-0 md:group-hover:opacity-100
        "
        onClick={nextSlide}
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots (kept minimal, same feel, scales nicely) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-opacity ${
              i === currentSlide
                ? "bg-white/90"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
