"use client";

import { ChevronDown, User, ShoppingBag } from "lucide-react";

export default function HeaderBar() {
  return (
    <div className="bg-primary ">
      <div className="container   px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-black font-medium hover:bg-primary px-3 py-1 rounded transition-colors duration-200">
            <span className="text-sm">SAUDI ARABIA - JEDDAH</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 text-black font-medium hover:bg-primary px-3 py-1 rounded transition-colors duration-200">
            <span className="text-sm">ENGLISH</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-black font-medium hover:bg-primary px-3 py-1 rounded transition-colors duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="8" r="5" stroke="white" stroke-width="2" />
              <path
                d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[15px] font-normal">Login or Register</span>
          </button>

          <button className="flex items-center gap-2 text-black font-medium hover:bg-primary px-3 py-1 rounded transition-colors duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.42188 18.8203C8.39604 18.8203 9.18731 19.6108 9.1875 20.585C9.1875 21.5609 8.39445 22.3496 7.42188 22.3496C6.44774 22.3494 5.6582 21.5591 5.6582 20.585C5.65839 19.6127 6.44615 18.8205 7.42188 18.8203Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6748 18.8203C19.649 18.8203 20.4402 19.6108 20.4404 20.585C20.4404 21.5609 19.6474 22.3496 18.6748 22.3496C17.7024 22.3494 16.9102 21.5608 16.9102 20.585C16.9103 19.611 17.7008 18.8205 18.6748 18.8203Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <mask
                id="path-3-outside-1_158_1742"
                maskUnits="userSpaceOnUse"
                x="-0.25"
                y="0.25"
                width="24"
                height="19"
                fill="black"
              >
                <rect fill="white" x="-0.25" y="0.25" width="24" height="19" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.75 3.25L4.83 3.61L5.793 15.083C5.871 16.018 6.652 16.736 7.59 16.736H18.502C19.398 16.736 20.158 16.078 20.287 15.19L21.236 8.632C21.353 7.823 20.726 7.099 19.909 7.099H5.164"
                />
              </mask>
              <path
                d="M3.09108 1.2793C2.00269 1.09092 0.967674 1.82053 0.779299 2.90892C0.590924 3.99731 1.32053 5.03233 2.40892 5.2207L3.09108 1.2793ZM4.83 3.61L6.82299 3.44272C6.74686 2.53572 6.06793 1.79452 5.17108 1.6393L4.83 3.61ZM5.793 15.083L7.78608 14.9167L7.78599 14.9157L5.793 15.083ZM20.287 15.19L22.2662 15.4775L22.2664 15.4764L20.287 15.19ZM21.236 8.632L23.2154 8.91843L23.2154 8.91827L21.236 8.632ZM5.164 5.099C4.05943 5.099 3.164 5.99443 3.164 7.099C3.164 8.20357 4.05943 9.099 5.164 9.099V5.099ZM2.75 3.25L2.40892 5.2207L4.48892 5.5807L4.83 3.61L5.17108 1.6393L3.09108 1.2793L2.75 3.25ZM4.83 3.61L2.83701 3.77728L3.80001 15.2503L5.793 15.083L7.78599 14.9157L6.82299 3.44272L4.83 3.61ZM5.793 15.083L3.79992 15.2493C3.96445 17.2215 5.61257 18.736 7.59 18.736V16.736V14.736C7.69143 14.736 7.77755 14.8145 7.78608 14.9167L5.793 15.083ZM7.59 16.736V18.736H18.502V16.736V14.736H7.59V16.736ZM18.502 16.736V18.736C20.3931 18.736 21.9946 17.3471 22.2662 15.4775L20.287 15.19L18.3078 14.9025C18.3214 14.8089 18.4029 14.736 18.502 14.736V16.736ZM20.287 15.19L22.2664 15.4764L23.2154 8.91843L21.236 8.632L19.2566 8.34557L18.3076 14.9036L20.287 15.19ZM21.236 8.632L23.2154 8.91827C23.5068 6.90339 21.9446 5.099 19.909 5.099V7.099V9.099C19.5074 9.099 19.1992 8.74261 19.2566 8.34573L21.236 8.632ZM19.909 7.099V5.099H5.164V7.099V9.099H19.909V7.099Z"
                fill="white"
                mask="url(#path-3-outside-1_158_1742)"
              />
              <path
                d="M14.126 10.795H16.899"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[15px] font-normal">My Offers</span>
          </button>
        </div>
      </div>
    </div>
  );
}
