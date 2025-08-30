"use client";

import { ChevronDown, LogOut, ShoppingCart } from "lucide-react";
import Signup from "./auth/auth-model";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { logout } from "@/lib";
import { useRouter } from "next/navigation";

export default function HeaderBar({ user }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("ENGLISH");
  const ddRef = useRef<HTMLDivElement>(null);
  const router=useRouter()

  const toggleDropdown = () => setOpen((p) => !p);

  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setOpen(false);
  };

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
          <div className="flex lg:flex-row flex-col flex-wrap lg:items-center gap-2 sm:gap-4">
            <button
              className="flex items-center gap-2 text-black font-medium hover:bg-primary px-2 sm:px-3 py-1 rounded transition-colors duration-200"
              aria-label="Selected location"
            >
              <span className="text-xs sm:text-sm">SAUDI ARABIA - JEDDAH</span>
            </button>

            <div className="relative inline-block text-left" ref={ddRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 cursor-pointer text-black font-medium hover:bg-primary px-2 sm:px-3 py-1 rounded transition-colors duration-200"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                <span className="text-xs sm:text-sm">{language}</span>
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>

              {open && (
                <div
                  className="absolute right-0 z-20 mt-2 w-32 bg-white shadow-md border rounded overflow-hidden"
                  role="menu"
                >
                  <button
                    onClick={() => handleSelect("ENGLISH")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleSelect("ARABIC")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Arabic
                  </button>
                </div>
              )}
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
              <LogOut className="text-white"/>

                <span className="text-xs sm:text-[15px] font-normal">
                  Logout
                </span>
              </button></>
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
                              <ShoppingCart className="text-white"/>


              <span className="text-xs sm:text-[15px] font-normal">
                My Offers
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Signup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
