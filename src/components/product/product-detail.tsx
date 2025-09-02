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
console.log('products', products)
  const {
    id,
    product_name,
    description,
    price,
    original_Price,
    image_url,
  } = product;

  const discount = original_Price
    ? Math.round(
        ((parseFloat(original_Price) - parseFloat(price)) /
          parseFloat(original_Price)) *
          100
      )
    : 0;

  const isInWishlist = products.some((p) => p.id === id);

  return (
    <div className="min-h-screen my-20">
      <div className="productDetailOverlay py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <ProductImageGallery images={image_url} />
            </div>

            <div className="w-full space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {product_name}
              </h1>

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

              <StarRating rating={4.5} reviewCount={12} />

              <button
                onClick={() =>
                  isInWishlist
                    ? removeProduct(id)
                    : addProduct({ id, product_name, price, image_url })
                }
                className="bg-primary hover:bg-primary text-black font-semibold px-6 py-2 rounded-xl transition-colors duration-200"
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>

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

      <OffersSection />
      <Contactus />
      <Download />
    </div>
  );
}
