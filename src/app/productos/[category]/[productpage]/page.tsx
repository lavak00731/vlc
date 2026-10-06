
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "../../../components/Badge";
import { JsonLd } from "../../../components/JsonLd";
import { Breadcrumb } from "../../../components/navs/Breadcrumb";
import { getAllProducts, getProductByCanonicalUrl } from "../../../lib/products";

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
  const { category, productpage } = await params;
  const product = getProductByCanonicalUrl(
    `/productos/${category}/${productpage}`,
  );

  if (!product) notFound();

  const productJsonLd =
    "jsonLd" in product ? product.jsonLd : product.jsonld;

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12 md:px-8">
        <Breadcrumb />
        <section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface-container">
              <Image
                className="object-cover"
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            {product.images.length > 1 && (
              <ul className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <li
                    className="relative aspect-square overflow-hidden rounded-2xl bg-surface-container"
                    key={image}
                  >
                    <Image
                      className="object-cover"
                      src={image}
                      alt={`${product.name}, vista ${index + 2}`}
                      fill
                      sizes="(min-width: 1024px) 16vw, 30vw"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col items-start">
            <Badge icon="potted_plant" text={product.subcategory} />
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-on-surface lg:text-6xl">
              {product.name}
            </h1>
            <p className="mb-8 max-w-2xl leading-relaxed text-on-surface-variant">
              {product.description}
            </p>

            <dl className="mb-8 grid w-full gap-4 rounded-2xl bg-surface-container-highest/40 p-6 sm:grid-cols-2">
              <div>
                <dt className="font-label-sm uppercase tracking-widest text-outline">
                  Categoría
                </dt>
                <dd className="mt-1 font-semibold text-on-surface">
                  {product.category}
                </dd>
              </div>
              <div>
                <dt className="font-label-sm uppercase tracking-widest text-outline">
                  Subcategoría
                </dt>
                <dd className="mt-1 font-semibold text-on-surface">
                  {product.subcategory}
                </dd>
              </div>
            </dl>

            <Link
              className="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-surface transition-colors hover:bg-primary-container"
              href={`/productos/${product.category}`}
            >
              Ver más productos
            </Link>
          </div>
        </section>
      </div>
      {productJsonLd && (
        <JsonLd data={{ ...productJsonLd, url: product.urlcanonica }} />
      )}
    </>
  );
}
