import BannerSlider from "@/components/banner-slider";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import ShopByCategory from "@/components/shop-category";
import React from "react";

function page() {
  return (
    <div>
      <BannerSlider />
      <ShopByCategory />
      <Contactus />
      <Download />
    </div>
  );
}

export default page;
