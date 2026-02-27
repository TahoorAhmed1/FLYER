import BannerSlider from "@/components/banner-slider";
import CategorySection from "@/components/category-list";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import OffersSection from "@/components/offer-product";
import RetailersSection from "@/components/retailers-section";
import WhoWeAre from "@/components/whoweare";
import FeaturedProducts from "@/components/featured-products";
import DealsOfTheDay from "@/components/deals-of-day";
import BrandSection from "@/components/brand-section";
import NewsletterSection from "@/components/newsletter";

function page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BannerSlider />
      
      {/* Quick Services Bar */}
      <div className="bg-white shadow-sm border-y border-gray-200">
        <div className="container py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🚚", title: "Free Delivery", desc: "Orders over $49.86" },
              { icon: "🛡️", title: "Secure Payment", desc: "100% secure" },
              { icon: "🎁", title: "Special Gifts", desc: "Exclusive offers" },
              { icon: "↩️", title: "30 Days Return", desc: "Money back guarantee" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CategorySection />
      <DealsOfTheDay />
      <FeaturedProducts />
      <RetailersSection />  
      <FeaturedProducts />

      <OffersSection />
      <BrandSection />
      <WhoWeAre />
      <Contactus />
      <Download />
    </main>
  );
}

export default page;