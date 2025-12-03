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
          src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${images}`}
          width={1000}
          height={1000}
          alt="Product"
          className=" h-full w-full object-contain"
        />
      </div>

      
  );
}
