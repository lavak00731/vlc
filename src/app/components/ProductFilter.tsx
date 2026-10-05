import Link from "next/link";

type ProductFilterProps = {
  categoryPath: string;
  filter: string[];
  selectedFilter: string | null;
};

export const ProductFilter = ({
  categoryPath,
  filter,
  selectedFilter,
}: ProductFilterProps) => {
  const getFilterHref = (value: string | null) => {
    const params = new URLSearchParams();
    if (value) params.set("filter", value);
    const query = params.toString();
    return query ? `${categoryPath}?${query}` : categoryPath;
  };

  return (
    <nav aria-label="filtro por subcategoría" className="bg-surface-container-lowest rounded-xl p-space-md mb-space-xl shadow-[0_4px_20px_-4px_rgba(45,55,40,0.06)]">
      <div className="flex flex-wrap items-center gap-space-xs mt-space-sm pt-space-xs border-none p-8 gap-3">
        <h2 className="font-label-sm text-label-sm text-on-surface-variant text-2xl flex items-center">
          <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary">filter_alt</span>
          Filtrar por:
        </h2>
        <ul className="flex gap-3 flex-wrap">
          <li>
            <Link
              href={getFilterHref(null)}
              aria-current={selectedFilter === null ? "page" : undefined}
              className="group inline-flex p-2 items-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container rounded-full font-label-md text-label-md transition-all text-[14px] aria-[current=page]:bg-surface-container-highest aria-[current=page]:text-on-surface-variant! aria-[current=page]:inset-shadow-sm aria-[current=page]:inset-shadow-black"
            >
              Sin Filtros
            </Link>
          </li>
          {
            filter.map((f) => (
              <li key={f}>
                <Link
                  href={getFilterHref(f)}
                  aria-current={selectedFilter === f ? "page" : undefined}
                  className="group inline-flex p-2 items-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container rounded-full font-label-md text-label-md transition-all capitalize text-[14px] aria-[current=page]:bg-surface-container-highest aria-[current=page]:text-on-surface-variant! aria-[current=page]:inset-shadow-sm aria-[current=page]:inset-shadow-black"
                >
                  {f}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};
