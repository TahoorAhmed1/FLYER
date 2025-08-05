"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Signup({ isOpen, setIsOpen }: any) {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed  transition-all backdrop-blur-xs inset-0 z-50 flex items-center overflow-hidden justify-center bg-black/10 p-4">
          {isLogin ? (
            <div className="relative w-full max-w-lg rounded-xl bg-white shadow-lg">
              <button
                onClick={toggleModal}
                className="absolute right-4 top-4 cursor-pointer text-gray-600 hover:text-gray-900"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 text-left">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Create a free account
                  </h2>
                  <p className="text-sm text-gray-600">
                    Sign up for free account
                  </p>
                </div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#E0E0E0] text-primary  focus:ring-primary "
                      />
                      <label
                        htmlFor="terms"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        I have read and agree to the{" "}
                        <Link
                          href="#"
                          className="font-medium text-primary  hover:underline"
                        >
                          Terms & Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Already have an Account?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="font-medium text-primary cursor-pointer  hover:underline"
                    >
                      Sign in here.
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary  py-2 font-semibold text-black hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-primary  focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Log in</h2>
                <p className="text-sm text-gray-600">Welcome back!</p>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-[#E0E0E0] px-4 py-2 focus:border-primary  focus:outline-none focus:ring-1 focus:ring-primary "
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  New here?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="font-medium text-primary cursor-pointer  hover:underline"
                  >
                    Create an account
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary  py-2 font-semibold text-black hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-primary  focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
