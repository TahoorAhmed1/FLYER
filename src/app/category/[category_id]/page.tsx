
import ProductByCategory from "@/components/product/product-by-category";

export  default async function FlyerDetail({ params }: any) {


  const {  category_id } = await params; 
  return (
    <ProductByCategory params={{category_id}} />
  );
}
