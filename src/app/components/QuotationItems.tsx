"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuotation } from "../context/QuotationContext";

export function QuotationCount() {
  const { items } = useQuotation();

  return (
    <>
      {items.length} {items.length === 1 ? "ítem" : "ítems"}
    </>
  );
}

export function QuotationItems() {
  const { items, totalQuantity, addProduct, decrementProduct, removeProduct } =
    useQuotation();
console.log(items)
  if (items.length === 0) {
    return (
      <div className="rounded-lg bg-surface-container-low p-8 text-center">
        <p className="mb-4 text-on-surface-variant">
          Todavía no agregaste productos a tu solicitud.
        </p>
        <Link
          className="font-label-md text-label-md text-secondary"
          href="/productos"
        >
          <span className="underline">Explorar el catálogo</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul className="mb-5 flex flex-col gap-4" id="cart-list">
        {items.map(({ product, quantity }) => (
          <li
            className="flex flex-col items-center gap-5 rounded-lg bg-surface-container-low p-8 transition-all hover:shadow-md sm:flex-row"
            key={product.id}
          >
            <div className="mb-5 h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-surface-container sm:mb-0">
              <Image
                alt={product.name}
                className="h-full w-full object-cover"
                width={300}
                height={300}
                src={product.images[0]}
              />
            </div>
            <div className="flex w-full min-w-0 grow flex-col sm:w-auto">
              <div className="flex items-start justify-between gap-space-xs">
                <div>
                  <h3 className="font-headline-sm text-xl text-on-surface">
                    <Link
                      className="transition-colors animated-link"
                      href={product.urlcanonica}
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {product.subcategory}
                  </p>
                </div>
                <button
                  aria-label={`Eliminar ${product.name} de la cotización`}
                  className="p-1 text-outline transition-colors hover:text-error"
                  onClick={() => removeProduct(product.id)}
                  title="Eliminar ítem"
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[20px]"
                  >
                    delete
                  </span>
                </button>
              </div>
              <div className="mt-space-sm flex items-center justify-between pt-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Cantidad solicitada:
                </span>
                <div className="flex items-center rounded-full bg-surface-container-lowest p-1 shadow-sm">
                  <button
                    aria-label={`Quitar una unidad de ${product.name}`}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-high"
                    onClick={() => decrementProduct(product.id)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[16px]"
                    >
                      remove
                    </span>
                  </button>
                  <span
                    aria-live="polite"
                    className="min-w-7 px-space-sm text-center font-title-md text-title-md text-on-surface"
                  >
                    {quantity}
                  </span>
                  <button
                    aria-label={`Agregar una unidad de ${product.name}`}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-high"
                    onClick={() => addProduct(product)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[16px]"
                    >
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-between gap-5 rounded-lg bg-surface-container p-8 sm:flex-row">
        <div className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-primary text-[24px]"
          >
            receipt_long
          </span>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Productos para cotizar
            </span>
            <span
              aria-live="polite"
              className="font-title-md text-title-md font-bold text-on-surface"
              id="total-summary-text"
            >
              {totalQuantity} {totalQuantity === 1 ? "unidad" : "unidades"} en{" "}
              {items.length} {items.length === 1 ? "producto" : "productos"}
            </span>
          </div>
        </div>
        <Link
          className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-on-surface"
          href="/productos"
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[18px]"
          >
            add_circle
          </span>
          <span className="underline">Seguir explorando el catálogo</span>
        </Link>
      </div>
    </>
  );
}
