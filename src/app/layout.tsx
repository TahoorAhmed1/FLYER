"use client";
import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useUser } from "@/store/user/useState";
import { useRouter } from "next/navigation";
import { API } from "@/services";
import { logout } from "@/lib";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUser,user } = useUser();
  const router = useRouter();

  const fetchUserData = async () => {
    const token = Cookies.get("token");
    if (!token) return;
    try {
      const data = await API.getUser();
      const response = data.data.data;
      setUser(response);
    } catch (error) {
      logout(router);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <html lang="en">
      <body className={`${jost.className}  antialiased`}>
        <Header  user={user}/>
        <ToastContainer key="toast-container" />

        {children}
        <Footer />
      </body>
    </html>
  );
}
