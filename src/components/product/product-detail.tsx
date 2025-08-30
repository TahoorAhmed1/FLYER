"use client";

import { useState } from "react";
import { ProductImageGallery } from "./product-image-gallery";
import { StarRating } from "./star-rating";
import { ExpandableSection } from "./expandable-section";
import Contactus from "../contact";
import Download from "../download";
import OffersSection from "../offer-product";

export default function ProductDetail({ product }: any) {
  console.log("product", product);

  // Manage current image index for gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extract data safely from product object
  const {
    product_name,
    description,
    price,
    original_Price,
    image_url,
  } = product;

  // Calculate discount percentage
  const discount = original_Price
    ? Math.round(
        ((parseFloat(original_Price) - parseFloat(price)) /
          parseFloat(original_Price)) *
          100
      )
    : 0;

  return (
    <div className="min-h-screen my-20">
      <div className="productDetailOverlay py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Product Images */}
            <div className="w-full">
              <ProductImageGallery
                images={image_url} // expects an array
              />
            </div>

            {/* Product Info */}
            <div className="w-full space-y-6">
              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-900">
                {product_name}
              </h1>

              {/* Price & Discount */}
              <div className="flex items-center gap-4">
                {discount > 0 && (
                  <div className="bg-primary text-black px-3 py-1 rounded-md font-bold text-sm">
                    -{discount}%
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {original_Price && (
                    <span className="text-gray-500 line-through text-lg">
                      {original_Price}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-4xl font-bold text-gray-900">{price}</div>

              {/* Rating - placeholder since your data doesn't have it */}
              <StarRating rating={4.5} reviewCount={12} />

              {/* Wishlist Button */}
              <button className="bg-primary hover:bg-primary text-black font-semibold px-6 py-2 rounded-xl transition-colors duration-200">
                Add to Wishlist
              </button>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  Description
                </h2>

                <ExpandableSection title="Overview" defaultExpanded={true}>
                  <p>{description}</p>
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

      {/* Additional Sections */}
      <OffersSection />
      <Contactus />
      <Download />
    </div>
  );
}
