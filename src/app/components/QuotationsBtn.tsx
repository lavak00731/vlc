"use client";

import Link from "next/link";
import { useQuotation } from "../context/QuotationContext";

export const QuotationsBtn = () => {
  const { totalQuantity } = useQuotation();

  return (
    <>
        <div className="flex items-center gap-space-sm shrink-0">
            <Link
            className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all"
            href="/cotizacion"
            >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-inherit">
                shopping_bag
            </span>
            <span className="hidden xl:inline text-inherit">Ver Cotización:</span>
            <span className="ml-4 text-inherit" aria-live="polite"> <span className="sr-only">Cantidad de unidades a cotizar: </span>{totalQuantity}</span>
            </Link>
            
        </div>
    </>
  )
}
