import ProductDetailsScreen from "@/src/features/product-details/screen/product.details.screen";

interface ProductDetailsPageProps {
  params: { id: string };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  return <ProductDetailsScreen id={id} />;
}
