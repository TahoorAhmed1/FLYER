import BannerSlider from "@/components/banner-slider";
import Contactus from "@/components/contact";
import Download from "@/components/download";
import OfferCard from "@/components/offer-card";
import { cookies } from "next/headers";

async function getProduct(id: string) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/client/product/flyer/${id}`,
      {
        headers: {
          authorization: token || "",
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
async function page({ params }:any  ) {
  const pa = await params;
  const offers = await getProduct(pa.id);

  return (
    <div>
      <BannerSlider />
      <div className="container mt-20 mb-10">
        
        <div className="grid grid-cols-5 gap-10  my-8">
          {offers?.products?.map((offer: any, index: any) => (
            <div key={index}>
              <OfferCard index={index} offer={offer} />
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center">
          <button className="w-[180px] mt-10 mx-auto  bg-primary hover:bg-primary text-black font-bold py-2.5  px-4 rounded-md transition-colors duration-200 text-sm">
            Show more{" "}
          </button>
        </div> */}
      </div>

      <Contactus />

      <Download />
    </div>
  );
}

export default page;
