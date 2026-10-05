import Link from "next/link";

export const Pagination = ({
  totalPages,
  selectedFilter,
  currentPage,
  url,
}: {
  totalPages: number;
  selectedFilter: string | null;
  currentPage: number;
  url: string;
}) => {
  const getPageHref = (page: number) => {
    const params = new URLSearchParams();
    if (selectedFilter) params.set("filter", selectedFilter);
    if (page > 1) params.set("page", String(page));
    const queryString = params.toString();
    return queryString ? `${url}?${queryString}` : url;
  };
  return (
    <nav
      aria-label="Paginación de productos"
      className="mt-10 flex flex-wrap justify-center gap-2"
    >
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Link
            key={page}
            href={getPageHref(page)}
            aria-current={page === currentPage ? "page" : undefined}
            aria-label={`Página ${page}`}
            className={`inline-flex min-w-10 items-center justify-center rounded-full p-2 ${
              page === currentPage
                ? "aria-[current=page]:bg-surface-container-highest aria-[current=page]:text-on-surface-variant! aria-[current=page]:inset-shadow-sm aria-[current=page]:inset-shadow-black"
                : "bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container"
            }`}
          >
            {page}
          </Link>
        ),
      )}
    </nav>
  );
};
