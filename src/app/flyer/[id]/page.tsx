import FlyerDetail from "@/components/flyer-detail/flyer-detail";
import { cookies } from "next/headers";

async function getProduct(id: string) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/flyers/show/${id}`,
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
    return null;
  }
}

async function page({ params }: any) {
  const pa = await params;
  const product = await getProduct(pa.id);
  console.log('product', product)
  return <FlyerDetail product={product} flyer_id={pa?.id} />;
}

export default page;
