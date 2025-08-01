import BannerSlider from "@/components/banner-slider";
import CategorySection from "@/components/category-list";
import Contactus from "@/components/contact";
import Download from "@/components/download";

function page() {
  return (
    <div>
      <BannerSlider />
      <CategorySection />
      <Contactus />
      <Download />
    </div>
  );
}

export default page;
