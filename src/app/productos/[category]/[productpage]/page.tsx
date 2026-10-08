import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "../../../components/Badge";
import { JsonLd } from "../../../components/JsonLd";
import { Breadcrumb } from "../../../components/navs/Breadcrumb";
import {
  getAllProducts,
  getProductByCanonicalUrl,
} from "../../../lib/products";
import { Carousel } from "@/app/components/Carousel";

type Params = {
  category: string;
  productpage: string;
};

export function generateStaticParams(): Params[] {
  return getAllProducts().map((product) => {
    const [, , category, productpage] = product.urlcanonica.split("/");
    return { category, productpage };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, productpage } = await params;
  const product = getProductByCanonicalUrl(
    `/productos/${category}/${productpage}`,
  );

  if (!product) return {};

  return {
    title: `${product.name} | Vivero del Golf`,
    description: product.metaDescription,
    alternates: { canonical: product.urlcanonica },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  let categoryName;
  const { category, productpage } = await params;
  const product = getProductByCanonicalUrl(
    `/productos/${category}/${productpage}`,
  );

  if (!product) notFound();

  const productJsonLd = "jsonLd" in product ? product.jsonLd : product.jsonld;

  switch (category) {
    case "plantas":
      categoryName = category
      break;
    case "arboles-y-arbustos":
      categoryName = "Árboles y Arbustos"
      break;  
    default:
      break;
  }
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12 md:px-8">
        <Breadcrumb />
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex min-w-0 flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl bg-surface-container flex flex-col gap-5">
              <Carousel images={product.images} />
            </div>            
          </div> 
          
          <div className="flex min-w-0 flex-col items-start">
            <Badge icon="potted_plant" text={product.subcategory} />
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-on-surface lg:text-6xl">
              {product.name}
            </h1>
            <dl className="mb-5 grid w-full gap-4 rounded-2xl bg-surface-container-highest/40 p-4 sm:grid-cols-2">
              <div>
                <dt className="font-label-sm uppercase tracking-widest text-vivero-badge-stock">
                  Categoría
                </dt>
                <dd className="mt-1 font-semibold text-on-surface capitalize">
                  {categoryName}
                </dd>
              </div>
              <div>
                <dt className="font-label-sm uppercase tracking-widest text-vivero-badge-stock">
                  Subcategoría
                </dt>
                <dd className="mt-1 font-semibold text-on-surface capitalize">
                  {product.subcategory}
                </dd>
              </div>
            </dl>
            <p className="mb-8 max-w-2xl leading-relaxed text-on-surface-variant">
              {product.description}
            </p>

            <button
              type="button"
              className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-al min-w-40 justify-center"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[16px]"
              >
                add_shopping_cart
              </span>
              Cotizar <span className="sr-only">{product.name}</span>
            </button>
          </div>
        </section>
      </div>
      {productJsonLd && (
        <JsonLd data={{ ...productJsonLd, url: product.urlcanonica }} />
      )}
    </>
  );
}
