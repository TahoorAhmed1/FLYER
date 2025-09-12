"use client"
import { useProduct } from "@/store/products/product";
import { CategoryItem } from "./shop-category-item";


export default function ShopByCategory() {

    const {category}=useProduct()
  

  return (
    <div className="shopcategorybackground py-12 my-16 bg-white">
      <div className="w-full container    ">
        <h2 className="text-5xl font-bold text-center mb-10 text-black">
          Shop By Category
        </h2>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
          {category.map((category:any) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
