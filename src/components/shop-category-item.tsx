import { category } from "@/assets";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  id: string;
  name: string;
  image: string;
}

export function CategoryItem({id, name, image }: CategoryItemProps) {
  return (
    <Link
      href={`/category/${id}`}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="relative w-16 h-16 sm:w-24 sm:h-24 mb-4 transition-transform duration-200 group-hover:scale-105">
        <Image
          src={category}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full rounded-full object-cover border-2 border-gray-200 group-hover:border-gray-300 transition-colors duration-200"
        />
      </div>

      <span className="text-base font-semibold text-black text-center leading-tight group-hover:text-gray-900 transition-colors duration-200">
        {name}
      </span>
    </Link>
  );
}
