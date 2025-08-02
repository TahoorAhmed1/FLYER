import { offerProduct } from "@/assets";
import BannerSlider from "@/components/banner-slider";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import OfferCard from "@/components/offer-card";

function page() {
  const offers = [
    {
      name: "iPhone 14 pro",
      image: offerProduct,
      discount: 18,
      category: "Electronics",
    },
    {
      name: "Cosmetics",
      image: offerProduct,
      discount: 18,
      category: "Beauty",
    },
    {
      name: "Tomato",
      image: offerProduct,
      discount: 18,
      category: "Fresh Produce",
    },
    {
      name: "Air Pods",
      image: offerProduct,
      discount: 18,
      category: "Electronics",
    },
    {
      name: "Green Apples",
      image: offerProduct,
      discount: 18,
      category: "Fresh Produce",
    },
    {
      name: "T-shirt",
      image: offerProduct,
      discount: 18,
      category: "Fashion",
    },
    {
      name: "Laptop",
      image: offerProduct,
      discount: 25,
      category: "Electronics",
    },
    {
      name: "Milk",
      image: offerProduct,
      discount: 15,
      category: "Dairy",
    },
  ];

  return (
    <div>
      <BannerSlider />
      <div className="container mt-20 mb-10">
        <h2 className="text-6xl font-bold text-center">Offers in Jeddah </h2>
        <div className="grid grid-cols-5 gap-10  mt-8">
          {offers.map((offer, index) => (
            <div key={index}>
              <OfferCard index={index} offer={offer} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="w-[180px] mt-10 mx-auto  bg-primary hover:bg-primary text-black font-bold py-2.5  px-4 rounded-md transition-colors duration-200 text-sm">
            Show more{" "}
          </button>
        </div>
      </div>

      <Contactus />

      <Download />
    </div>
  );
}

export default page;
