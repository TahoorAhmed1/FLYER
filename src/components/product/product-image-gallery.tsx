"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: any[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function ProductImageGallery({
  images,
  currentIndex,
  onPrevious,
  onNext,
}: ProductImageGalleryProps) {
  return (
    <div className="">
      {/* Previous Button
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-md"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button> */}

      <div className="flex-1 flex justify-center">
        <Image
          src={images[currentIndex]}
          width={1000}
          height={1000}
          alt="Product"
          className="h-[535.3432006835938] w-full object-contain"
        />
      </div>

      {/* <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-md"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button> */}
    </div>
  );
}
