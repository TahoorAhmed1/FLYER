import ProductDetail from "@/components/product/product-detail";
import { cookies } from "next/headers";

async function getProduct(id: string) {
  try {
    const cookieStore =await cookies(); // no need for await
    const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/client/product/${id}`,
      {
        headers: {
          authorization: token || "",
        },
        cache: "no-store", // optional: ensures fresh data every request
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
async function Page({ params }: { params: { id: string } }) {
 let pa=await params
  const product = await getProduct(pa.id);

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}

export default Page;
