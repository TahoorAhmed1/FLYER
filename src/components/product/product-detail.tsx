"use client";

import { useState } from "react";
import { ProductImageGallery } from "./product-image-gallery";
import { StarRating } from "./star-rating";
import { ExpandableSection } from "./expandable-section";
import { productDetail } from "@/assets";
import Contactus from "../contact";
import Download from "../download";
import OffersSection from "../offer-product";

const productData = {
  name: "iPhone 14 pro",
  originalPrice: 7.12,
  salePrice: 5.23,
  discount: 15,
  rating: 4,
  reviewCount: 19,
  images: [productDetail],
};

export default function ProductDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productData.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productData.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen  my-20  ">
      <div className="productDetailOverlay py-10">
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <ProductImageGallery
                images={productData.images}
                currentIndex={currentImageIndex}
                onPrevious={handlePreviousImage}
                onNext={handleNextImage}
              />
            </div>

            {/* Product Information */}
            <div className="w-full space-y-6">
              {/* Product Title */}
              <h1 className="text-3xl font-bold text-gray-900">
                {productData.name}
              </h1>

              {/* Price Section */}
              <div className="flex items-center gap-4">
                <div className="bg-primary text-black px-3 py-1 rounded-md font-bold text-sm">
                  -{productData.discount}%
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 line-through text-lg">
                    ${productData.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="text-4xl font-bold text-gray-900">
                ${productData.salePrice.toFixed(2)}
              </div>

              {/* Rating */}
              <StarRating
                rating={productData.rating}
                reviewCount={productData.reviewCount}
              />

              {/* Add to Wishlist Button */}
              <button className="bg-primary hover:bg-primary text-black font-semibold px-6 py-2 rounded-xl transition-colors duration-200">
                Add to Wishlist
              </button>

              {/* Description Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  Description
                </h2>

                <div className="space-y-0">
                  <ExpandableSection title="Overview" defaultExpanded={true}>
                    <p>
                      Our glow-up of the Pornstar Martini.Tart passionfruit,
                      soft vanilla, and functional botanicals support calm
                      clarity and elevated energy. Tropical sparkle with
                      botanical depth.
                    </p>
                    <p className="mt-2">
                      Sip solo or pour over ice for a party moment with no
                      regrets.
                    </p>
                  </ExpandableSection>

                  <ExpandableSection title="Materials">
                    <p>
                      Premium materials including aerospace-grade aluminum,
                      ceramic shield front, and precision-milled back glass.
                      Water resistant to IP68 standard.
                    </p>
                  </ExpandableSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OffersSection />
      <Contactus />
      <Download />
    </div>
  );
}
