import React from 'react'

export const QuotationsBtn = () => {
  return (
    <>
        <div className="flex items-center gap-space-sm shrink-0">
            <a
            className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all"
            href="#"
            >
            <span className="material-symbols-outlined text-[18px] text-inherit">
                shopping_bag
            </span>
            <span className="hidden xl:inline text-inherit">Ver Cotización:</span>
            <span className="ml-4 text-inherit" aria-live="polite"> <span className="sr-only">Cantidad de Items a cotizar</span>0</span>
            </a>
            
        </div>
    </>
  )
}
