"use client";
import Image from "next/image";
import { Logo } from "../assets/index";
import NavigationButtons from "./fliter-header";
import HeaderBar from "./top-header";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <div className=" bg-[#FFFEF3]">
      <HeaderBar />
      <div className="flex  container items-center justify-between py-6">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={500}
            height={500}
            className="w-[170px]"
          ></Image>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8   text-[17px]   ">
            <Link
              href={"/"}
              className="hover:font-bold font-normal   text-black transition-all hover:text-primary cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:font-bold font-normal  text-black transition-all hover:text-primary cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href={"/shop"}
              className="hover:font-bold font-normal  text-black transition-all hover:text-primary cursor-pointer"
            >
              Shop
            </Link>
            <li className="hover:font-bold font-normal  text-black transition-all hover:text-primary cursor-pointer">
              Flyer Hive Mobile App
            </li>
            <Link
              href={"/"}
              className="hover:font-bold font-normal  text-black transition-all hover:text-primary cursor-pointer"
            >
              Contact Us
            </Link>
          </ul>
          <Link
            href={"/wishlist"}
            className=" bg-primary hover:bg-primary/70 px-3 py-2 text-black font-semibold rounded-[10px] text-[18px]"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
      {pathname !== "/" && <NavigationButtons />}
    </div>
  );
}

export default Header;
