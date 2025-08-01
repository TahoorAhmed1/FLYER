import BannerSlider from "@/components/banner-slider";
import CategorySection from "@/components/category-list";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import OffersSection from "@/components/offer-product";
import RetailersSection from "@/components/retailers-section";
import WhoWeAre from "@/components/whoweare";

function page() {
  return (
    <div>
      <BannerSlider />

      <CategorySection />

      <RetailersSection />
      <OffersSection />
      <WhoWeAre />
      <Contactus />

      <Download />
    </div>
  );
}

export default page;
