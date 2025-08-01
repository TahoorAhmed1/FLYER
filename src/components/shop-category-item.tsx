import { category } from "@/assets";
import Image from "next/image";

interface CategoryItemProps {
  name: string;
  image: string;
}

export function CategoryItem({ name, image }: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative w-16 h-16 sm:w-24 sm:h-24 mb-4 transition-transform duration-200 group-hover:scale-105">
        <Image
          src={category}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full rounded-full object-cover border-2 border-gray-200 group-hover:border-gray-300 transition-colors duration-200"
        />
      </div>

      <span className="text-lg font-semibold text-black text-center leading-tight group-hover:text-gray-900 transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}
