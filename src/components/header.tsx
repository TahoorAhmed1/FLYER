import Image from "next/image";
import { Logo } from "../assets/index";
import NavigationButtons from "./fliter-header";
import HeaderBar from "./top-header";

function Header() {
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
            <li className="hover:font-bold font-normal  transition-all hover:text-primary cursor-pointer">
              Home
            </li>
            <li className="hover:font-bold font-normal transition-all hover:text-primary cursor-pointer">
              About Us
            </li>
            <li className="hover:font-bold font-normal transition-all hover:text-primary cursor-pointer">
              Solution
            </li>
            <li className="hover:font-bold font-normal transition-all hover:text-primary cursor-pointer">
              Flyer Hive Mobile App
            </li>
            <li className="hover:font-bold font-normal transition-all hover:text-primary cursor-pointer">
              Contact Us
            </li>
          </ul>
          <button className=" bg-primary px-3 py-2 text-black font-semibold rounded-[10px] text-[18px]">
            Join Waitlist
          </button>
        </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default Header;
