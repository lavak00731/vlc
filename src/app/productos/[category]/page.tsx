import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "./../../components/JsonLd";
import { getProductsByCategory } from "./../../lib/products";
import { Breadcrumb } from "@/app/components/navs/Breadcrumb";
import { Badge } from "@/app/components/Badge";
import { ProductFilter } from "@/app/components/ProductFilter";
import categoryData from "@/app/data/categorydata.json";
import type { CategoryInterface } from "@/app/interfaces/CategoryInterface";
import { ProductCard } from "@/app/components/ProductCard";
import { Pagination } from "@/app/components/navs/Pagination";
import { QuantityComponent } from "@/app/components/QuantityComponent";
import { getOrganizationJsonLd } from "./../../lib/site-json-ld";
import { getRequestOrigin } from "./../../lib/site-url";
type Params = { category: string };
type SearchParams = {
  filter?: string | string[];
  page?: string | string[];
};

const PRODUCTS_PER_PAGE = 9;

function getCategorySeo(category: string, productCount: number) {
  return {
    title: `${category} | Productos`,
    description: `Explorá nuestra selección de ${category}: ${productCount} productos.`,
    alternates: { canonical: `/productos/${category}` },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const productos = getProductsByCategory(category);
  if (!productos.length) return {};

  return getCategorySeo(category, productos.length);
}

export default async function CategoriaPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const [{ category }, query] = await Promise.all([params, searchParams]);
  const productos = getProductsByCategory(category);

  if (!productos.length || !Object.hasOwn(categoryData, category)) notFound();

  const prodData = (categoryData as Record<string, CategoryInterface>)[category];

  const origin = await getRequestOrigin();
  const url = new URL(`/productos/${category}`, origin).toString();
  const organization = getOrganizationJsonLd(origin);
  const categorySeo = getCategorySeo(category, productos.length);
  const rawFilter = Array.isArray(query.filter) ? query.filter[0] : query.filter;
  const selectedFilter =
    prodData.filter.find(
      (filter) => normalizeSubcategory(filter) === normalizeSubcategory(rawFilter ?? ""),
    ) ?? null;
  const filteredProducts = selectedFilter
    ? productos.filter((product) => {
        const subcategory = normalizeSubcategory(product.subcategory);
        const filter = normalizeSubcategory(selectedFilter);
        return subcategory === filter || (filter === "floral" && subcategory === "florales");
      })
    : productos;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const rawPage = Array.isArray(query.page) ? query.page[0] : query.page;
  const parsedPage = rawPage && /^[1-9]\d*$/.test(rawPage) ? Number(rawPage) : 1;
  const currentPage = Math.min(parsedPage, totalPages);
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );
 

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: categorySeo.title,
        description: categorySeo.description,
        mainEntityOfPage: { "@id": `${url}#page` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: productos.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: new URL(p["urlcanonica"], origin).toString(),
            name: p.name,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Productos",
            item: new URL("/productos", origin).toString(),
          },
          { "@type": "ListItem", position: 2, name: category, item: url },
        ],
      },
      organization,
    ],
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-col">
          <div className="flex flex-col w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
            <Breadcrumb />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-space-xs">
              <div className="max-w-3xl">
                <Badge
                  icon={prodData.badgeIcon}
                  text={prodData.badgeText}
                />
                <h1 className="text-4xl lg:text-7xl lg:text-display-hero text-on-surface tracking-tight leading-none font-bold mb-5">
                  {prodData.title}
                </h1>
                {
                  prodData.description.map((para:string, i:number) => <p key={'descrip'+i} className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed mb-5 max-w-2xl" dangerouslySetInnerHTML={{ __html: para }}  />)
                }                
              </div>
              <div className="hidden md:block md:col-span-5 rounded-3xl overflow-hidden shadow-xl mb-5">
                <Image preload src={prodData.image} width="400" height="400" alt=""/>
              </div>
            </div>
          </div>
          <section className="bg-surface-container-highest/40 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <ProductFilter
                categoryPath={url}
                filter={prodData.filter}
                selectedFilter={selectedFilter}
              />
            </div>
          </section>
          <section className="w-full py-12">
            <div className="max-w-7xl p-4 md:p-8 mx-auto">
              {filteredProducts.length > 0 &&
              <div>
                <QuantityComponent prods={filteredProducts.length} visibleProds={visibleProducts.length}/>
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {visibleProducts.map((p) => (
                    <li key={p["id"]}>
                      <ProductCard product={p as Parameters<typeof ProductCard>[0]["product"]} />
                    </li>
                  ))}
                </ul>
                </div>
              }
              
              {filteredProducts.length === 0 && (
                <p className="mt-8 text-center text-on-surface-variant">
                  No hay productos para este filtro.
                </p>
              )}
              {totalPages > 1 && (
                <Pagination totalPages={totalPages} selectedFilter={selectedFilter} currentPage={currentPage} url={url} />
              )}
            </div>
          </section>
        </div>
      </div>

      <JsonLd data={jsonLd} />
    </>
  );
}

function normalizeSubcategory(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}
