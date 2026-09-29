import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "./../../components/JsonLd";
import { getProductsByCategory } from "./../../lib/products";
import { Breadcrumb } from "@/app/components/navs/Breadcrumb";
import { Badge } from "@/app/components/Badge";

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
  if (!productos.length) notFound();

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
            url: `${url}/${p["url-canonica"]}`,
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mt-space-xs">
              <div className="max-w-3xl">
                <Badge
                  icon={"potted_plant"}
                  text={"Plantas para cada uno de tus ambientes"}
                />
                <h1 className="text-4xl lg:text-7xl lg:text-display-hero text-on-surface tracking-tight leading-none font-bold mb-5">
                  Catálogo de Plantas
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed mb-5 max-w-2xl">
                  Descubre nuestra amplia variedad de plantas de interior, de exterior, aromáticas, kokedamas, suculentas, cactus y florales. 
                  Elegí las que más te gusten y se ajusten a tu plan, y agregalas a la cotización. Nosotros te asesoraremos sobre sus cuidados 
                  y te guiaremos en su cuidado.                   
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-7xl mx-auto py-12 px-4 md:px-8">

          </div>
        </div>
      </div>
      <ul>
        {productos.map((p) => (
          <li key={p["id"]}>
            <Link href={`/productos/${p.category}/${p["url-canonica"]}`}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
      <JsonLd data={jsonLd} />
    </>
  );
}
function notFound(): never {
  throw new Error("Category not found");
}
