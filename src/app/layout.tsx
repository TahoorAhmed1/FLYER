"use client";
import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useUser } from "@/store/user/useState";
import { useRouter } from "next/navigation";
import { API } from "@/services";
import { logout } from "@/lib";
import { useEffect, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import { useRetailer } from "@/store/retailer/retailer";
import { useProduct } from "@/store/products/product";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUser, user, } = useUser();
  const { setRetailer } = useRetailer();
  const {  setCategory ,setProduct ,setSlider} = useProduct();

  const fetchCategoryData = async () => {
    try {
      const data = await API.getCategory();
      const response = data.data.data;
      setCategory(response);
    } catch (error) {}
  };
  const FetchGetSlider = async () => {
    try {
      const data = await API.getSlider();
      const response = data.data.data;
      setSlider(response);
    } catch (error) {}
  };
  const fetchProductData = async () => {
    try {
      const data = await API.getProductAll();
      const response = data.data.data;
      setProduct(response);
    } catch (error) {}
  };

  const fetchRetailerData = async () => {
    try {
      const data = await API.getRetailer();
      const response = data.data.data;
      const newResponse=response.filter((data:any)=> data?.flyers_count !== 0)
      setRetailer(newResponse);
    } catch (error) {}
  };

  useLayoutEffect(() => {
    fetchCategoryData();
    fetchRetailerData();
    fetchProductData();
    FetchGetSlider()
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = Cookies.get("token");
    if (!token) return;
    try {
      const data = await API.getUser();
      const response = data.data.data;
      setUser(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <html lang="en">
      <body className={`${jost.className}  antialiased`}>
        <Header user={user} />
        <ToastContainer />

        {children}
        <Footer />
      </body>
    </html>
  );
}
