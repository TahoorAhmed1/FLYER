"use client";
import Image from "next/image";
import { Logo } from "../assets/index";
import NavigationButtons from "./fliter-header";
import HeaderBar from "./top-header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppModal from "./app-modal";
import { useEffect, useRef, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [mobilePop, setMobilePop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <div className="bg-[#FFFEF3]">
      <HeaderBar />

      {/* main header */}
      <div className="container relative z-50 flex items-center justify-between py-4 lg:py-6 px-4">
        {/* logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={500}
            height={500}
            className="w-[140px] sm:w-[170px]"
            priority
          />
        </div>

        {/* desktop nav + cta */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="lg:flex hidden items-center gap-8 text-[17px]">
            <Link
              href="/"
              className="hover:font-bold font-normal text-black transition-all hover:text-primary cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:font-bold font-normal text-black transition-all hover:text-primary cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/shop"
              className="hover:font-bold font-normal text-black transition-all hover:text-primary cursor-pointer"
            >
              Shop
            </Link>
            <li
              onClick={() => setMobilePop(true)}
              className="hover:font-bold font-normal text-black transition-all hover:text-primary cursor-pointer"
            >
              Flyer Hive Mobile App
            </li>
            <Link
              href="/contact-us"
              className="hover:font-bold font-normal text-black transition-all hover:text-primary cursor-pointer"
            >
              Contact Us
            </Link>
          </ul>

          <Link
            href="/wishlist"
            className="bg-primary hover:bg-primary/70 px-3 py-2.5 text-black font-semibold rounded-[10px] lg:text-[18px] text-[16px] whitespace-nowrap"
          >
            Join Wishlist
          </Link>
        </div>

        {/* mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/wishlist"
            className="bg-primary hover:bg-primary/70 px-3 py-2 text-black font-semibold rounded-[10px]"
          >
            <span className="block leading-none text-[clamp(12px,3.6vw,18px)] lg:text-[18px]">
              Join Wishlist
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="pointer-events-none"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="pointer-events-none"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="container px-4 lg:hidden relative z-30">
          <div   className="rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden">
            <ul className="flex flex-col divide-y divide-black/5 text-[16px]">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-3 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block px-4 py-3 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setMobilePop(true);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-black/5"
                >
                  Flyer Hive Mobile App
                </button>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block px-4 py-3 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {mobilePop && <AppModal setMobilePop={setMobilePop} />}
      {pathname !== "/" && <NavigationButtons />}
    </div>
  );
}

export default Header;
