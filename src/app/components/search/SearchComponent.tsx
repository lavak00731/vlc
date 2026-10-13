'use client'

import { useEffect, useId, useMemo, useState } from "react";
import type { SearchProduct } from "../../lib/products";

const DEBOUNCE_DELAY = 250;
const MAX_SUGGESTIONS = 8;

export const SearchComponent = ({
  searchProducts,
}: {
  searchProducts: SearchProduct[];
}) => {
  const inputId = useId();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isDebouncing, setIsDebouncing] = useState(false);
  const normalizedQuery = normalizeQuery(query);
  const suggestions = useMemo(
    () =>
      debouncedQuery.length >= 2
        ? searchProducts
            .filter((product) =>
              normalizeQuery(product.name).includes(debouncedQuery),
            )
            .slice(0, MAX_SUGGESTIONS)
        : [],
    [debouncedQuery, searchProducts],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(normalizedQuery);
      setIsDebouncing(false);
    }, DEBOUNCE_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [normalizedQuery, query]);
  const visibleSuggestions =
    !isDebouncing && normalizedQuery === debouncedQuery ? suggestions : [];

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
          autoComplete="off"
          className="w-full bg-transparent ml-2 font-body-sm text-body-sm text-on-surface focus:outline-none placeholder:text-outline"
          id={inputId}
          list={listId}
          minLength={2}
          name="q"
          onChange={(event) => {
            setIsDebouncing(true);
            setQuery(event.target.value);
          }}
          placeholder="Buscar plantas, macetas..."
          required
          type="search"
        />
        <datalist id={listId}>
          {visibleSuggestions.map((product) => (
            <option key={product.urlcanonica} value={product.name} />
          ))}
        </datalist>
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
      <p aria-live="polite" className="sr-only">
        {normalizedQuery.length < 2
          ? ""
          : isDebouncing || normalizedQuery !== debouncedQuery
            ? "Buscando sugerencias."
            : `${suggestions.length} sugerencias disponibles.`}
      </p>
    </form>
  );
}

function normalizeQuery(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
