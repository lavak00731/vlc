import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "../components/ProductCard";
import { Breadcrumb } from "../components/navs/Breadcrumb";
import { QuantityComponent } from "../components/QuantityComponent";
import { getSearchResults } from "../lib/products";

type SearchParams = {
  q?: string | string[];
};

export const metadata: Metadata = {
  title: "Resultados de búsqueda | Vivero del Golf",
  description: "Encontrá plantas, árboles y productos de jardinería.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const query = (await searchParams).q;
  const searchTerm = (Array.isArray(query) ? query[0] : query)?.trim() ?? "";
  const results = getSearchResults(searchTerm);

  return (
    <div className="flex w-full flex-col">
      <div className="w-full py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          <Breadcrumb />
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-on-surface lg:text-6xl">
            Resultados de búsqueda
          </h1>
          {searchTerm && (
            <p className="max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
              {results.length > 0
                ? `${results.length} productos para “${searchTerm}”`
                : `No encontramos productos para “${searchTerm}”.`}
            </p>
          )}
        </div>
        <section className="w-full">
          <div className="mx-auto max-w-7xl p-4 md:p-8">
            {results.length > 0 ? (
              <>
                <QuantityComponent
                  prods={results.length}
                  visibleProds={results.length}
                />
                <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {results.map((product) => (
                    <li key={product.id}>
                      <ProductCard
                        product={
                          product as Parameters<
                            typeof ProductCard
                          >[0]["product"]
                        }
                      />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              searchTerm && (
                <p className="mt-8 text-center text-on-surface-variant">
                  Probá con otro nombre de producto o explorá nuestro{" "}
                  <Link className="text-primary underline" href="/productos">
                    catálogo
                  </Link>
                  .
                </p>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
