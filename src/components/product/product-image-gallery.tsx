"use client";

import Image from "next/image";

interface ProductImageGalleryProps {
  images: any

}

export function ProductImageGallery({
  images,

}: ProductImageGalleryProps) {
  return (
      

      <div className="flex-1 flex  justify-center">
        <Image
          src={images}
          width={1000}
          height={1000}
          alt="Product"
          className=" h-full w-full object-contain"
        />
      </div>

      
  );
}
