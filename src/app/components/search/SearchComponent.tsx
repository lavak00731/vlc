"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { ComponentType } from "react";
import type { SearchProduct } from "../../lib/products";

type SearchInteractiveProps = {
  searchProducts: SearchProduct[];
  initialQuery: string;
  autoFocus: boolean;
};

export const SearchComponent = ({
  searchProducts,
  autoFocus = false,
  loadOnMount = false,
}: {
  searchProducts: SearchProduct[];
  autoFocus?: boolean;
  loadOnMount?: boolean;
}) => {
  const inputId = useId();
  const isLoadingInteractive = useRef(false);
  const [query, setQuery] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const [InteractiveSearch, setInteractiveSearch] =
    useState<ComponentType<SearchInteractiveProps> | null>(null);

  const loadInteractiveSearch = useCallback(() => {
    if (isLoadingInteractive.current) return;

    isLoadingInteractive.current = true;
    void import("./SearchInteractive").then(({ default: SearchInteractive }) => {
      setInteractiveSearch(() => SearchInteractive);
    });
  }, []);

  const activateSearch = () => {
    setIsActivated(true);
    loadInteractiveSearch();
  };

  useEffect(() => {
    if (loadOnMount) loadInteractiveSearch();
  }, [loadInteractiveSearch, loadOnMount]);

  if (InteractiveSearch) {
    return (
      <InteractiveSearch
        autoFocus={autoFocus || isActivated}
        initialQuery={query}
        searchProducts={searchProducts}
      />
    );
  }

  return (
    <form
      action="/buscar"
      aria-label="Buscar productos"
      className="relative md:block w-70 group"
      role="search"
    >
      <div className="p-2 flex items-center bg-surface-container-lowest rounded-full px-space-sm py-space-xxs shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <label htmlFor={inputId} className="sr-only">
          Buscar productos
        </label>
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-outline text-[18px] mr-space-xxs"
        >
          search
        </span>
        <input
          autoFocus={autoFocus}
          autoComplete="off"
          className="w-full bg-transparent ml-2 font-body-sm text-body-sm text-on-surface focus:outline-none placeholder:text-outline"
          id={inputId}
          minLength={2}
          name="q"
          onChange={(event) => setQuery(event.target.value)}
          onFocus={activateSearch}
          placeholder="Buscar plantas, macetas..."
          required
          type="search"
          value={query}
        />
        <button
          type="submit"
          className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all"
        >
          <span className="sr-only">Buscar producto</span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-2xl mr-space-xxs text-inherit"
          >
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
};
