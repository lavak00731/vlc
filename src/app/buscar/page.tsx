import { notFound, redirect } from "next/navigation";
import { getProductByName } from "../lib/products";

type SearchParams = {
  q?: string | string[];
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const query = (await searchParams).q;
  const productName = Array.isArray(query) ? query[0] : query;
  const product = productName?.trim()
    ? getProductByName(productName)
    : undefined;

  if (!product) notFound();

  redirect(product.urlcanonica);
}
