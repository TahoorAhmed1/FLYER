import { AppStore, Collection, Google } from "@/assets";
import Image from "next/image";
import React from "react";
import { Smartphone, Star, Download as DownloadIcon, ChevronRight, CheckCircle } from "lucide-react";

function Download() {
  const features = [
    "Exclusive wishlist discounts",
    "Track your favorite items",
    "Personalized deals",
    "Real-time price alerts",
    "Early access to sales"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Smartphone className="w-4 h-4" />
                Mobile App
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Download the App for{" "}
                <span className="text-primary">Exclusive</span>
                <br className="hidden md:block" />
                Wishlist Discounts
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Get access to over 6 million downloads and track your favorite items
                for discounts with ease. Enjoy personalized deals and updates on
                your wishlist items.
              </p>

              {/* Feature List */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-left">App Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-left">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Cards */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Google Play</p>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-lg">4.4</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 13.58 4.34 10.8c.68-1.36 1.91-2.22 3.25-2.24 1.02-.02 1.98.69 2.6.69.63 0 1.8-.85 3.02-.72.52.02 1.98.21 2.92 1.56-.08.05-1.74 1.02-1.72 3.04.02 2.35 2.06 3.13 2.08 3.14-.02.07-.33 1.12-1.08 2.22zM15.95 2.23c.79 1.01.69 2.38.65 2.41-.63.05-1.4-.45-1.85-1.07-.48-.65-.78-1.59-.54-2.53.3-.02 1.28-.1 1.74 1.19z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">App Store</p>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-lg">4.4</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
                <a
                  href="#"
                  className="group relative overflow-hidden bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </a>
                
                <a
                  href="#"
                  className="group relative overflow-hidden bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>6M+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>4.4 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 shadow-2xl">
                {/* Floating Badge 1 */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-semibold">Live Now</span>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">4.4/5 Rating</span>
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={Collection}
                    alt="App collection preview"
                    width={1000}
                    height={423}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* App Store Buttons (Mobile Only) */}
                <div className="mt-6 flex sm:hidden justify-center gap-3">
                  <Image
                    src={Google}
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="w-[120px] h-auto"
                  />
                  <Image
                    src={AppStore}
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="w-[120px] h-auto"
                  />
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-xl shadow-md p-3 mb-2 border border-gray-100">
                    <span className="text-2xl font-bold text-primary">6M+</span>
                  </div>
                  <p className="text-xs text-gray-600">Downloads</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl shadow-md p-3 mb-2 border border-gray-100">
                    <span className="text-2xl font-bold text-primary">50K+</span>
                  </div>
                  <p className="text-xs text-gray-600">Products</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl shadow-md p-3 mb-2 border border-gray-100">
                    <span className="text-2xl font-bold text-primary">10K+</span>
                  </div>
                  <p className="text-xs text-gray-600">Retailers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-6">
              Trusted by thousands of shoppers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <span className="text-gray-400 font-semibold">Secure Payment</span>
              <span className="text-gray-400 font-semibold">SSL Encrypted</span>
              <span className="text-gray-400 font-semibold">24/7 Support</span>
              <span className="text-gray-400 font-semibold">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;