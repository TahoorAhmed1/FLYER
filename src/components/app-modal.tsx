import { android } from "@/assets";
import { X } from "lucide-react";
import Image from "next/image";

export default function AppModal({ setMobilePop }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs p-4 sm:p-6">
      {/* modal */}
      <div className="relative w-full max-w-[650px] max-h-[85vh] overflow-hidden rounded-2xl bg-white p-6 sm:p-10 md:p-16 text-center shadow-lg">
        {/* bg visual (kept) */}
        <Image
          src={android}
          width={500}
          height={500}
          className="pointer-events-none select-none absolute right-0 bottom-0 h-[240px] sm:h-[360px] md:h-[500px] w-auto object-contain"
          alt="root"
          priority={false}
        />

        {/* close */}
        <button
          onClick={() => setMobilePop(false)}
          className="absolute cursor-pointer right-3 top-3 sm:right-4 sm:top-4 rounded-full p-1.5 text-black-primary hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-black/20"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* scroll-safe content */}
        <div className="relative z-10 mx-auto flex max-h-[77vh] flex-col items-center gap-2 overflow-y-auto px-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-primary">
            We love Android{" "}
            <span role="img" aria-label="heart eyes emoji">
              😍
            </span>
          </h2>

          <p className="text-base sm:text-lg font-bold text-black">
            and are cooking up an amazing app! Join our waitlist to be the first
            to know when it&apos;s ready.
          </p>

          {/* card */}
          <div className="w-full rounded-2xl bg-primary px-4 sm:px-6 md:px-8 py-5 sm:py-6 mt-6 sm:mt-8 border border-black">
            <div className="flex items-center justify-between gap-2 font-bold text-black">
              <svg
                width="30"
                height="32"
                viewBox="0 0 40 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 sm:w-[38px] sm:h-[40px]"
              >
                <path
                  d="M1.06464 1.85889C0.601205 2.33188 0.333008 3.06829 0.333008 4.02198V38.0392C0.333008 38.9929 0.601205 39.7293 1.06464 40.2023L1.17902 40.3062L20.7299 21.2517V20.8018L1.17902 1.74737L1.06464 1.85889Z"
                  fill="black"
                />
                <path
                  d="M29.6054 27.6067L23.0957 21.252V20.8021L29.6133 14.4474L29.7593 14.5301L37.4779 18.812C39.6806 20.0272 39.6806 22.0269 37.4779 23.2497L29.7593 27.524L29.6054 27.6067Z"
                  fill="black"
                />
                <path
                  d="M28.5769 28.7069L21.9133 22.2099L2.24805 41.3855C2.97968 42.1354 4.17277 42.2257 5.52953 41.4759L28.5769 28.7069Z"
                  fill="black"
                />
                <path
                  d="M28.5769 13.3465L5.52953 0.577581C4.17277 -0.1646 2.97968 -0.0742326 2.24805 0.675639L21.9133 19.8435L28.5769 13.3465Z"
                  fill="black"
                />
              </svg>
              <p className="font-semibold text-xl sm:text-2xl">
                Join HelloCity Android Wishlist
              </p>
            </div>

            {/* input row */}
            <div className="mt-4 flex w-full flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-xl border-2 border-black bg-white px-4 py-2 text-black-primary focus:border-yellow-primary focus:outline-none"
              />
              <button className="rounded-xl bg-black px-6 py-2 font-semibold text-primary shadow-md transition-colors hover:bg-gray-800">
                Join
              </button>
            </div>
          </div>

          {/* store buttons */}
          <div className="mt-6 sm:mt-8 w-full flex flex-col gap-3 sm:flex-row sm:gap-2">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFEFC6] bg-gradient-to-t from-primary px-5 py-2 font-bold text-black-primary shadow-md transition-colors">
              <svg
                width="30"
                height="36"
                viewBox="0 0 37 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 sm:w-[39px] sm:h-[46px]"
              >
                <path
                  d="M30.148 23.354C30.0977 17.8722 34.7254 15.2053 34.937 15.0811C32.3162 11.3342 28.2539 10.8223 26.8264 10.7814C23.4146 10.4294 20.1051 12.7833 18.3671 12.7833C16.5944 12.7833 13.9181 10.8155 11.0336 10.8733C7.32167 10.9294 3.84915 13.0367 1.94464 16.3091C-1.98579 22.9815 0.945554 32.7868 4.71121 38.1801C6.5949 40.8215 8.79601 43.7707 11.6771 43.667C14.4957 43.553 15.5485 41.9049 18.9499 41.9049C22.3201 41.9049 23.3088 43.667 26.2471 43.6007C29.2721 43.553 31.1766 40.9474 32.9944 38.2822C35.1712 35.2547 36.0454 32.2731 36.0801 32.1201C36.009 32.0962 30.2053 29.9243 30.148 23.354Z"
                  fill="black"
                />
                <path
                  d="M24.5975 7.2335C26.1135 5.3745 27.1508 2.84536 26.8628 0.278809C24.6687 0.374055 21.9246 1.76704 20.3445 3.58522C18.9465 5.18741 17.6976 7.81349 18.0202 10.2831C20.485 10.4634 23.0156 9.0636 24.5975 7.2335Z"
                  fill="black"
                />
              </svg>
              <div className="w-full">
                <p className="text-xs sm:text-sm">Download on the</p>
                <p className="text-xl sm:text-2xl font-bold">App Store</p>
              </div>
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFEFC6] bg-gradient-to-t from-primary px-5 py-2 text-lg font-bold text-black-primary shadow-md transition-colors">
              <svg
                width="32"
                height="36"
                viewBox="0 0 43 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 sm:w-[41px] sm:h-[45px]"
              >
                <path
                  d="M0.848045 2.52704C0.335616 3.05004 0.0390625 3.86431 0.0390625 4.91883V42.5327C0.0390625 43.5872 0.335616 44.4015 0.848045 44.9245L0.974519 45.0393L22.5925 23.9703V23.4728L0.974519 2.40373L0.848045 2.52704Z"
                  fill="black"
                />
                <path
                  d="M32.406 30.9968L25.208 23.9703V23.4728L32.4147 16.4462L32.5761 16.5376L41.1108 21.2723C43.5464 22.616 43.5464 24.8271 41.1108 26.1792L32.5761 30.9054L32.406 30.9968Z"
                  fill="black"
                />
                <path
                  d="M31.2688 32.2138L23.9007 25.0299L2.15625 46.2329C2.96523 47.0621 4.28447 47.162 5.78469 46.3328L31.2688 32.2138Z"
                  fill="black"
                />
                <path
                  d="M31.2688 15.2292L5.78469 1.11019C4.28447 0.289535 2.96523 0.389456 2.15625 1.21861L23.9007 22.4131L31.2688 15.2292Z"
                  fill="black"
                />
              </svg>
              <div>
                <p className="text-xs sm:text-sm">GET IT ON</p>
                <p className="text-xl sm:text-2xl">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
