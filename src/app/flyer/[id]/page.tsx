import FlyerDetail from "@/components/flyer-detail/flyer-detail";
import { cookies } from "next/headers";

async function getProduct(id: string) {
  try {
    const cookieStore = await cookies(); 
    const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/client/flyer/flyer_page/${id}`,
      {
        headers: {
          authorization: token || "",
        },
        cache: "no-store", 
      }
    );

    if (!res.ok) throw new Error("Failed to fetch product");

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

async function page({ params }: { params: { id: string } }) {
    let pa = await params;
    const product = await getProduct(pa.id);
  return <FlyerDetail product={product} />;
}

export default page;
