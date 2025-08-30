"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { API } from "@/services";
import { useUser } from "@/store/user/useState";
import { notify } from "@/lib";
import { useRouter } from "next/navigation";
import OtpVerification from "./otp-verification";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // shows error under confirmPassword field
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function AuthModel({ isOpen, setIsOpen }: any) {
  const toggleModal = () => setIsOpen(!isOpen);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const { setUser }: any = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // React Hook Form setup
  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: { fullName: "", email: "", phone: "", password: "", confirmPassword: "" },
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSignup = async (values: any) => {
    setLoading(true);
    try {
      const res = await API.registerUser({
        email: values.email,
        password: values.password,
        full_name: values.fullName,
        phoneNumber: values.phone,
      });
      notify("success", "Email sent successfully!");
      localStorage.setItem("email_token", res?.data?.data?.token);
      setUser(res?.data?.data?.user);
      setShowOtp(true);
    } catch (err: any) {
      notify("error", err?.response?.data?.message || err?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (values: any) => {
    setLoading(true);
    try {
      const res = await API.loginUser(values);
      Cookies.set("token", res?.data?.data?.token);
      notify("success", "Login successful");
      setUser(res?.data?.data?.user);
      router.push("/shop");
      toggleModal();
    } catch (err: any) {
      notify("error", err?.response?.data?.message || err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed transition-all backdrop-blur-xs inset-0 z-50 flex items-center overflow-hidden justify-center bg-black/10 p-4">
          {showOtp ? (
            <OtpVerification />
          ) : isLogin ? (
            /* Signup Form */
            <div className="relative w-full max-w-lg rounded-xl bg-white shadow-lg p-8">
              <button onClick={toggleModal} className="absolute right-4 top-4">✖</button>
              <h2 className="text-2xl font-bold mb-2">Create a free account</h2>
              <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-3">
                <input {...signupForm.register("fullName")} placeholder="Full Name" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {signupForm.formState.errors.fullName && <p className="text-red-500 text-sm">{signupForm.formState.errors.fullName.message}</p>}

                <input {...signupForm.register("email")} type="email" placeholder="Email" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {signupForm.formState.errors.email && <p className="text-red-500 text-sm">{signupForm.formState.errors.email.message}</p>}

                <input {...signupForm.register("phone")} placeholder="Phone Number" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {signupForm.formState.errors.phone && <p className="text-red-500 text-sm">{signupForm.formState.errors.phone.message}</p>}

                <input {...signupForm.register("password")} type="password" placeholder="Password" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {signupForm.formState.errors.password && <p className="text-red-500 text-sm">{signupForm.formState.errors.password.message}</p>}

                <input {...signupForm.register("confirmPassword")} type="password" placeholder="Confirm Password" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {signupForm.formState.errors.confirmPassword && <p className="text-red-500 text-sm">{signupForm.formState.errors.confirmPassword.message}</p>}

                <button type="submit" disabled={loading} className="w-full bg-primary py-2 cursor-pointer rounded-md  ">
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </form>
              <div className="text-sm mt-3">Already have account? <button onClick={() => setIsLogin(false)} className="text-primary">Login</button></div>
            </div>
          ) : (
            /* Login Form */
            <div className="relative w-full max-w-lg rounded-xl bg-white shadow-lg p-8">
              <button onClick={toggleModal} className="absolute right-4 top-4">✖</button>
              <h2 className="text-2xl font-bold mb-2">Log in</h2>
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-3">
                <input {...loginForm.register("email")} type="email" placeholder="Email" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {loginForm.formState.errors.email && <p className="text-red-500 text-sm">{loginForm.formState.errors.email.message}</p>}

                <input {...loginForm.register("password")} type="password" placeholder="Password" className="w-full border border-slate-300 rounded-md px-3 py-2" />
                {loginForm.formState.errors.password && <p className="text-red-500 text-sm">{loginForm.formState.errors.password.message}</p>}

                <button type="submit" disabled={loading} className="w-full bg-primary cursor-pointer py-2 rounded-md">
                  {loading ? "Logging In..." : "Login"}
                </button>
              </form>
              <div className="text-sm mt-3">New here? <button onClick={() => setIsLogin(true)} className="text-primary ">Create an account</button></div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
