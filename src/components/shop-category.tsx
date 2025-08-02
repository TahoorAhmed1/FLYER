import { CategoryItem } from "./shop-category-item";

const categories = [
  {
    id: 1,
    name: "New Arrivals",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Dairy & Milk",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Fresh Produce",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Meat",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Snacks",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "New Arrivals",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    name: "Dairy & Milk",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    name: "Fresh Produce",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 9,
    name: "Meat",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 10,
    name: "Snacks",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 11,
    name: "Dairy & Milk",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 12,
    name: "Fresh Produce",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 13,
    name: "Meat",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function ShopByCategory() {
  return (
    <div className="shopcategorybackground py-12 my-16 bg-white">
      <div className="w-full container    ">
        <h2 className="text-5xl font-bold text-center mb-10 text-black">
          Shop By Category
        </h2>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
          {categories.map((category) => (
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
