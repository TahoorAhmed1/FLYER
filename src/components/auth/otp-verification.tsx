"use client";

import React, { useState } from "react";
import Cookies from "js-cookie";
import { API } from "@/services";
import { notify } from "@/lib";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function OtpVerification() {
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
        router.push("/dashboard");
      } else {
        notify("error", "Token missing in response");
      }
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error?.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
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

  if (!open) return null;

  return (
    <div className="otp-dialog-overlay">
      <div className="otp-dialog">
        <div className="otp-card">
          <div className="otp-card-header">
            <h2 className="otp-title">Verify Account</h2>
            <p className="otp-subtitle">Enter verification code</p>
          </div>
          <div className="otp-card-content">
            <form onSubmit={handleSubmit}>
              <div className="otp-input-group">
                {Array.from({ length: 6 }, (_, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={otp[index] || ""}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="otp-input"
                    maxLength={1}
                  />
                ))}
              </div>

              <div className="otp-resend">
                <span>Didn't receive code? </span>
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={loading}
                  className="otp-resend-btn"
                >
                  Resend...
                </button>
              </div>

              <div className="otp-actions">
                <button
                  type="submit"
                  className="otp-btn otp-btn-primary"
                  disabled={loading}
                >
                  {loading ? <Loader className="w-4 h-4 animate-spin" /> : "Verify Code"}
                </button>
                <button
                  type="button"
                  className="otp-btn otp-btn-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
