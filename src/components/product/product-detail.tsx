"use client";

import { useState } from "react";
import { ProductImageGallery } from "./product-image-gallery";
import { StarRating } from "./star-rating";
import { ExpandableSection } from "./expandable-section";
import Contactus from "../contact";
import Download from "../download";
import OffersSection from "../offer-product";
import { useWishlist } from "@/store/wishlist/useWishlist";

export default function ProductDetail({ product }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addProduct, removeProduct, products } = useWishlist();

  const {
    id,
    name,
    description,
    sale_price,
    price,
    image,
    title
  } = product;

  // Calculate discount properly
  const discount =
    price && sale_price
      ? Math.round(((parseFloat(price) - parseFloat(sale_price)) / parseFloat(price)) * 100)
      : 0;

  const isInWishlist = products.some((p) => p.id === id);

  return (
    <div className="min-h-screen my-20">
      <div className="productDetailOverlay py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            <div className="w-full">
              <ProductImageGallery images={image} />
            </div>

            <div className="w-full space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

              <div className="flex items-center gap-4">
                {discount > 0 && (
                  <div className="bg-primary text-black px-3 py-1 rounded-md font-bold text-sm">
                    -{discount}%
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {price && (
                    <span className="text-gray-500 line-through text-lg">
                      Rs {price}
                    </span>
                  )}
                </div>
              </div>

              {/* Final Sale Price */}
              <div className="text-4xl font-bold text-gray-900">
                Rs {sale_price}
              </div>

              <StarRating rating={4.5} reviewCount={12} />

              {/* Wishlist Button */}
              <button
                onClick={() =>
                  isInWishlist
                    ? removeProduct(id)
                    : addProduct({
                        id,
                        product_name:title,
                        price: sale_price,
                        image_url:image, // fixed (no image_url)
                      })
                }
                className="bg-primary hover:bg-primary text-black font-semibold px-6 py-2 rounded-xl transition-colors duration-200"
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>

              {/* Description Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  Description
                </h2>

                <ExpandableSection title="Overview" defaultExpanded={true}>
                  <p>{description}</p>
                </ExpandableSection>

                <ExpandableSection title="Materials">
                  <p>
                    Premium materials including high-quality plastic build,
                    durable long-life finish, and resistant surface.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Sections */}
      <OffersSection />
      <Contactus />
      <Download />
    </div>
  );
}
