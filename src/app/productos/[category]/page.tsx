import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "./../../components/JsonLd";
import { getProductsByCategory } from "./../../lib/products";
import { Breadcrumb } from "@/app/components/navs/Breadcrumb";
import { Badge } from "@/app/components/Badge";
import { ProductFilter } from "@/app/components/ProductFilter";
import categoryData from "@/app/data/categorydata.json";
import type { CategoryInterface } from "@/app/interfaces/CategoryInterface";
type Params = { category: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const productos = getProductsByCategory(category);
  if (!productos.length) return {};

  return {
    title: `${category} | Productos`,
    description: `Explorá nuestra selección de ${category}: ${productos.length} productos.`,
    alternates: { canonical: `/productos/${category}` },
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const productos = getProductsByCategory(category);

  if (!productos.length || !Object.hasOwn(categoryData, category)) notFound();

  const prodData = categoryData[category as keyof typeof categoryData] as Omit<
    CategoryInterface,
    "plantas" | "arbolesarbustos"
  >;

  const url = `/productos/${category}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: category,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: productos.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: p["url-canonica"],
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
            item: `/productos`,
          },
          { "@type": "ListItem", position: 2, name: category, item: url },
        ],
      },
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
              <ProductFilter filter={prodData.filter} />
            </div>
          </section>
          <section className="w-full py-12">
            <div className="max-w-7xl p-4 md:p-8 mx-auto">
              <ul>
                {productos.map((p) => (
                  <li key={p["id"]}>
                    <Link
                      href={p["url-canonica"]}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <JsonLd data={jsonLd} />
    </>
  );
}
function notFound(): never {
  throw new Error("Category not found");
}
