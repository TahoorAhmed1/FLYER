"use client";

import React, { useState } from "react";
import Cookies from "js-cookie";
import { API } from "@/services";
import { notify } from "@/lib";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function OtpVerification({setIsLogin,setShowOtp}:any) {
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.otpVerification({ otp });
      const token = response?.data?.data?.token;
      if (token) {
        Cookies.set("token", token, { expires: 7 });
        notify("success", "Email verified");
      } else {
        notify("error", "Token missing in response");
      }
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error?.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const resendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.resendOtp();
      notify("success", "OTP resent successfully");
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error?.message);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const otpArray = otp.split("");
    otpArray[index] = value;
    const newOtp = otpArray.join("").padEnd(6, "");
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setOtp("");
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Verify Account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter the 6-digit verification code
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: 6 }, (_, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={otp[index] || ""}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                maxLength={1}
              />
            ))}
          </div>

          {/* Resend */}
          <div className="text-center text-sm text-gray-600">
            Didn’t receive code?{" "}
            <button
              type="button"
              onClick={resendOtp}
              disabled={loading}
              className="text-primary hover:underline disabled:opacity-50"
            >
              Resend
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-primary text-black font-medium rounded-lg disabled:opacity-50 transition"
              disabled={loading}
            >
              {loading ? <Loader className="w-4 h-4 animate-spin" /> : "Verify Code"}
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
