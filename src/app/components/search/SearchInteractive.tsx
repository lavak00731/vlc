"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { SearchProduct } from "../../lib/products";
import { normalizeProductName } from "../../lib/products";

const DEBOUNCE_DELAY = 250;
const MAX_SUGGESTIONS = 8;

const SearchInteractive = ({
  searchProducts,
  initialQuery,
  autoFocus,
}: {
  searchProducts: SearchProduct[];
  initialQuery: string;
  autoFocus: boolean;
}) => {
  const router = useRouter();
  const inputId = useId();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<SearchProduct | null>(null);
  const normalizedQuery = normalizeProductName(query);
  const isDebouncing = normalizedQuery !== debouncedQuery;
  const suggestions = useMemo(
    () =>
      debouncedQuery.length >= 2
        ? searchProducts
            .filter((product) =>
              normalizeProductName(product.name).includes(debouncedQuery),
            )
            .slice(0, MAX_SUGGESTIONS)
        : [],
    [debouncedQuery, searchProducts],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(normalizedQuery);
    }, DEBOUNCE_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [normalizedQuery]);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const visibleSuggestions = isDebouncing ? [] : suggestions;

  const selectSuggestion = (suggestion: SearchProduct) => {
    setQuery(suggestion.name);
    setSelectedSuggestion(suggestion);
    setActiveIndex(-1);
    setIsOpen(false);
  };

  return (
    <form
      action="/buscar"
      aria-label="Buscar productos"
      className="relative md:block w-70 group"
      onSubmit={(event) => {
        if (!selectedSuggestion) return;

        event.preventDefault();
        router.push(selectedSuggestion.urlcanonica);
      }}
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
          ref={inputRef}
          autoComplete="off"
          aria-activedescendant={
            isOpen && activeIndex >= 0
              ? `${listId}-option-${activeIndex}`
              : undefined
          }
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={isOpen && visibleSuggestions.length > 0}
          className="w-full bg-transparent ml-2 font-body-sm text-body-sm text-on-surface focus:outline-none placeholder:text-outline"
          id={inputId}
          minLength={2}
          name="q"
          onChange={(event) => {
            setQuery(event.target.value);
            setSelectedSuggestion(null);
            setActiveIndex(-1);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          role="combobox"
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" && visibleSuggestions.length > 0) {
              event.preventDefault();
              setIsOpen(true);
              setActiveIndex((currentIndex) =>
                Math.min(currentIndex + 1, visibleSuggestions.length - 1),
              );
            } else if (
              event.key === "ArrowUp" &&
              visibleSuggestions.length > 0
            ) {
              event.preventDefault();
              setIsOpen(true);
              setActiveIndex((currentIndex) =>
                currentIndex <= 0
                  ? visibleSuggestions.length - 1
                  : currentIndex - 1,
              );
            } else if (event.key === "Escape") {
              setIsOpen(false);
              setActiveIndex(-1);
            } else if (
              event.key === "Enter" &&
              isOpen &&
              activeIndex >= 0 &&
              visibleSuggestions[activeIndex]
            ) {
              event.preventDefault();
              selectSuggestion(visibleSuggestions[activeIndex]);
            }
          }}
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
      {isOpen && visibleSuggestions.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-2xl bg-surface-container-lowest p-2 shadow-xl"
          id={listId}
          role="listbox"
          aria-label="Productos sugeridos"
        >
          {visibleSuggestions.map((product, index) => (
            <li
              aria-selected={activeIndex === index}
              className={`cursor-pointer rounded-xl px-4 py-3 font-body-sm text-on-surface hover:bg-surface-container ${
                activeIndex === index ? "bg-surface-container" : ""
              }`}
              id={`${listId}-option-${index}`}
              key={product.urlcanonica}
              onClick={() => selectSuggestion(product)}
              onMouseDown={(event) => event.preventDefault()}
              role="option"
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
      {isOpen &&
        normalizedQuery.length >= 2 &&
        !isDebouncing &&
        visibleSuggestions.length === 0 && (
          <p className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl bg-surface-container-lowest p-4 text-body-sm text-on-surface shadow-xl">
            Sin sugerencias. Presioná buscar para ver resultados.
          </p>
        )}
      <p aria-live="polite" className="sr-only">
        {normalizedQuery.length < 2
          ? ""
          : isDebouncing || normalizedQuery !== debouncedQuery
            ? "Buscando sugerencias."
            : `${visibleSuggestions.length} sugerencias disponibles.`}
      </p>
    </form>
  );
};

export default SearchInteractive;
