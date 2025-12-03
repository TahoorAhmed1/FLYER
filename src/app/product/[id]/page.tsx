import ProductDetail from "@/components/product/product-detail";
import { cookies } from "next/headers";

async function getProduct(id: string) {
  try {
    // const cookieStore =await cookies(); // no need for await

    const res = await fetch(`https://olive-wolverine-763801.hostingersite.com/api/products/${id}`);


    const data:any = await res.json();
    console.log('data', data)
    return data?.data 
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
async function Page({ params }: any) {
 let pa=await params
  const product = await getProduct(pa.id);
console.log('product', product)
  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}

export default Page;
