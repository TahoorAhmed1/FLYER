"use client";

import { ChevronDown, LogOut, ShoppingCart } from "lucide-react";
import Signup from "./auth/auth-model";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { logout } from "@/lib";
import { useRouter } from "next/navigation";
import CountryAndLanguageModal from "./country&language-modal";
import { useLocation } from "@/store/location/location";

export default function HeaderBar({ user, setIsOpen, isOpen, products }: any) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
    const {  country,city,language} = useLocation();

  const ddRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => setOpen((p) => !p);



  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div className="bg-primary">
        <div className="container px-4 py-2 flex flex-row items-center justify-between gap-2">
          {/* Left group */}
          <div onClick={()=>setOpen2(true)} className="flex lg:flex-row flex-col flex-wrap lg:items-center gap-2 sm:gap-4">
            <button
              className="flex items-center gap-2 text-black font-medium hover:bg-primary px-2 sm:px-3 py-1 rounded transition-colors duration-200"
              aria-label="Selected location"
            >
              <span className="text-xs sm:text-base">{country} - {city}</span>
            </button>

            <div className="relative inline-block text-left" ref={ddRef}>
         
                  <button
                    className="block w-full text-base font-medium text-left  py-2 "
                    role="menuitem"
                  >
                    {language}
                  </button>
             
            </div>
          </div>

          {/* Right group */}
          <div className="flex lg:flex-row flex-col lg:items-center items-end gap-4 sm:gap-6">
            {user?.id ? (
              <>
                <button
                  onClick={() => logout(router)}
                  className="flex cursor-pointer items-center gap-2 text-black font-medium hover:bg-primary px-2 sm:px-3 rounded transition-colors duration-200"
                >
                  <LogOut className="text-white" />

                  <span className="text-xs sm:text-[15px] font-normal">
                    Logout
                  </span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="flex cursor-pointer items-center gap-2 text-black font-medium hover:bg-primary px-2 sm:px-3 rounded transition-colors duration-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="5" stroke="white" strokeWidth="2" />
                  <path
                    d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-xs sm:text-[15px] font-normal">
                  Login or Register
                </span>
              </button>
            )}

            <Link
              href={"/wishlist"}
              className="flex items-center gap-2 text-black font-medium hover:bg-primary px-2 sm:px-3 rounded transition-colors duration-200"
            >
              <div className="relative">
                <ShoppingCart className="text-white" />
                {products?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {products?.length}
                  </span>
                )}
              </div>

              <span className="text-xs sm:text-[15px] font-normal">
                My Offers
              </span>
            </Link>
          </div>
        </div>
      </div>

{open2 && <CountryAndLanguageModal setOpen2={setOpen2}/>}
      <Signup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
