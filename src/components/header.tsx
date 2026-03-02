"use client";
import Image from "next/image";
import { Logo } from "../assets/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useWishlist } from "@/store/wishlist/useWishlist";
import { useProduct } from "@/store/products/product";
import { useLocation } from "@/store/location/location";
import AppModal from "./app-modal";
import NavigationButtons from "./fliter-header";
import CountryAndLanguageModal from "./country&language-modal";
import { 
  Heart, 
  Search, 
  User, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown,
  MapPin,
  TrendingUp,
  Percent,
  Sparkles,
  Star,
  Truck,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

function Header({ user }: any) {
  const pathname = usePathname();
  const { products } = useWishlist();
  const { category } = useProduct();
  const { city } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePop, setMobilePop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCountry, setCountry] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [locations, setLocations] = useState(["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX"]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  
  const panelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const categoryButtonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Close category dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        categoryRef.current && 
        !categoryRef.current.contains(e.target as Node) &&
        categoryButtonRef.current && 
        !categoryButtonRef.current.contains(e.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close search results on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close location dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setShowLocationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    try {
      // Implement search API call
      // const results = await API.searchProducts(searchQuery);
      // setSearchResults(results.data.data);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  // Get cart count from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Get active categories
  const activeCategories = category?.filter((cat: any) => cat?.name) || [];
  const featuredCategories = activeCategories.slice(0, 8);
  
  // Popular brands (can be fetched from API)
  const popularBrands = ["Nike", "Adidas", "Puma", "Zara", "H&M", "Apple", "Samsung", "Sony"];
  
  // Trending categories
  const trendingCategories = ["Electronics", "Fashion", "Home & Living", "Sports", "Beauty", "Books", "Toys", "Automotive"];

  return (
    <header className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${
      scrolled ? "shadow-lg" : "shadow-sm"
    }`}>
      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-r from-primary to-gray-800 text-white text-sm">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                <span className="hidden sm:inline">Free delivery on orders above 1000 PKR</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">24/7 Support</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+1 (800) 123-4567</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <Link href="#" className="hover:text-primary transition">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
              <Link href="/track-order" className="hover:text-primary transition">
                Track Order
              </Link>
              <Link href="/help" className="hover:text-primary transition">
                Help
              </Link>
              <button
                onClick={() => setCountry(true)}
                className="hover:text-primary transition flex items-center gap-1"
              >
                <span>🌐</span>
                <span className="hidden lg:inline">EN / PKR</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={Logo}
              alt="FlyerHive"
              width={160}
              height={60}
              className="w-[120px] md:w-[150px]"
              priority
            />
          </Link>

       

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative" ref={searchRef}>
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex w-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border-primary focus-within:border-primary transition-colors">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  placeholder="Search for products, brands, and categories..."
                  className="flex-1 px-4 py-3 outline-none text-sm"
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 px-8 font-semibold text-black transition-colors flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </form>

            {/* Search Results Dropdown */}
            {showSearchResults && searchQuery && (
              <div className="absolute  z-50 top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">Search results for "{searchQuery}"</p>
                  {/* Map search results here */}
                  <div className="text-center py-8 text-gray-500">
                    No results found
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Account */}
            <>
              {user?.id ? (
                <Link href="/account" className="flex items-center gap-2 hover:text-primary transition group">
                  <div className="flex flex-col items-end text-sm">
                    <span className="font-semibold">Hi, {user?.name?.split(' ')[0] || 'User'}</span>
                    <span className="text-xs text-gray-500">My Account</span>
                  </div>
                  <div className="w-9 h-9 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    {user?.profile_image ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${user.profile_image}`}
                        alt={user.name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8" />
                    )}
                  </div>
                </Link>
              ) : (
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex items-center gap-2 hover:text-primary transition group"
                >
                  <div className="flex flex-col items-end text-sm">
                    <span className="font-semibold">Sign In</span>
                    <span className="text-xs text-gray-500">Account</span>
                  </div>
                  <div className="w-9 h-9 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                </button>
              )}
            </>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative group">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 bg-gray-100 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                  <Heart className="w-4 h-4 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs hidden sm:block">Wishlist</span>
              </div>
              {products?.length > 0 && (
                <span className="absolute  z-50 -top-1 -right-1 bg-primary text-black text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {products.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative group">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 bg-gray-100 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                  <ShoppingBag className="w-4 h-4 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs hidden sm:block">Cart</span>
              </div>
              {cartCount > 0 && (
                <span className="absolute  z-50 -top-1 -right-1 bg-primary text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden border border-gray-200 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <form onSubmit={handleSearch} className="flex border border-gray-200 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2.5 outline-none text-sm"
            />
            <button type="submit" className="bg-primary px-6 font-semibold text-black">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* ================= NAVIGATION BAR WITH CATEGORY DROPDOWN ================= */}
      <div className="hidden lg:block border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Category Dropdown Button */}
            <div className="relative">
              <button
                ref={categoryButtonRef}
                onClick={() => setCategoryOpen(!categoryOpen)}
                className={`flex items-center gap-2 px-6 py-3.5 font-semibold transition-all duration-300 ${
                  categoryOpen 
                    ? "bg-primary text-black" 
                    : "bg-gray-100 text-gray-700 hover:bg-primary/80"
                }`}
              >
                <Menu className="w-5 h-5" />
                <span>All Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  categoryOpen ? "rotate-180" : ""
                }`} />
              </button>

              {/* Mega Menu Dropdown */}
              {categoryOpen && (
                <div 
                  // ref={categoryRef}
                  className="absolute  top-full left-0 w-[1000px] bg-white shadow-2xl rounded-b-2xl border-t-2 border-primary z-50 animate-fadeIn"
                >
                  <div className="grid grid-cols-4 gap-6 p-6">
                    {/* Categories Column */}
                    <div className="col-span-1">
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Shop by Category
                      </h3>
                      <ul className="space-y-2">
                        {featuredCategories.map((cat: any, idx: number) => (
                          <li key={idx}>
                            <Link
                              href={`/category/${cat.id}`}
                              className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all block"
                              onClick={() => setCategoryOpen(false)}
                            >
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/category"
                        className="text-sm font-semibold text-primary mt-4 inline-block hover:underline"
                        onClick={() => setCategoryOpen(false)}
                      >
                        View All Categories →
                      </Link>
                    </div>

                    {/* Popular Brands Column */}
                    <div className="col-span-1">
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Popular Brands
                      </h3>
                      <ul className="space-y-2">
                        {popularBrands.map((brand, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/brand/${brand.toLowerCase()}`}
                              className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all block"
                              onClick={() => setCategoryOpen(false)}
                            >
                              {brand}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Trending Column */}
                    <div className="col-span-1">
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        Trending Now
                      </h3>
                      <ul className="space-y-2">
                        {trendingCategories.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/trending/${item.toLowerCase().replace(/ /g, '-')}`}
                              className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all block"
                              onClick={() => setCategoryOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Promo Column */}
                    <div className="col-span-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4">
                      <Percent className="w-8 h-8 text-primary mb-2" />
                      <h3 className="font-bold text-gray-900 mb-1">Special Offers</h3>
                      <p className="text-xs text-gray-600 mb-3">Up to 70% off on selected items</p>
                      <Link
                        href="/offers"
                        className="text-sm font-semibold text-primary hover:underline"
                        onClick={() => setCategoryOpen(false)}
                      >
                        Shop Now →
                      </Link>
                      
                      {/* Quick Contact */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">Need help?</p>
                        <Link href="/contact-us" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          Contact Support
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <div className="flex items-center ml-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`px-4 py-3.5 text-sm font-medium hover:text-primary transition-colors ${
                    pathname === item.href ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Hot Deals */}
            <Link
              href="/deals"
              className="ml-auto flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute  z-50 inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Hot Deals
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div ref={panelRef} className="lg:hidden border-t bg-white shadow-lg fixed inset-x-0 top-[164px] bottom-0 z-40 overflow-y-auto animate-slideDown">
          <div className="p-4 space-y-4">
            {/* Mobile User Info */}
            {user?.id ? (
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  {user?.profile_image ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${user.profile_image}`}
                      alt={user.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setMobileOpen(false);
                }}
                className="w-full bg-primary text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                Sign In / Register
              </button>
            )}

            {/* Mobile Location */}
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Deliver to
              </h3>
              <select 
                value={city}
                // onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                {locations.map((loc, idx) => (
                  <option key={idx} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Mobile Categories */}
            <div className="border-b pb-4">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {featuredCategories.slice(0, 8).map((cat: any, idx: number) => (
                  <Link
                    key={idx}
                    href={`/category/${cat.id}`}
                    className="text-sm text-gray-600 hover:text-primary p-2 bg-gray-50 rounded-lg text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/category"
                className="text-sm font-semibold text-primary mt-3 inline-block"
                onClick={() => setMobileOpen(false)}
              >
                View All Categories →
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobilePop(true);
                  setMobileOpen(false);
                }}
                className="block text-gray-700 hover:text-primary font-medium py-2 w-full text-left"
              >
                Mobile App
              </button>
            </div>

            {/* Mobile Contact */}
            <div className="border-t pt-4">
              <p className="text-sm font-semibold mb-2">Contact Us</p>
              <a href="tel:+18001234567" className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                +1 (800) 123-4567
              </a>
              <a href="mailto:support@flyerhive.com" className="text-sm text-gray-600 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@flyerhive.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {mobilePop && <AppModal setMobilePop={setMobilePop} />}
      {isCountry && <CountryAndLanguageModal setCountry={setCountry} />}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            {/* Add your sign-in form here */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-primary text-black py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {pathname !== "/" && <NavigationButtons />}
    </header>
  );
}

export default Header;