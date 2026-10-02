'use client'

import { useState } from "react";

export const ProductFilter = ({ filter }: { filter: string[] }) => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-md mb-space-xl shadow-[0_4px_20px_-4px_rgba(45,55,40,0.06)]">
      <div className="flex flex-wrap items-center gap-space-xs mt-space-sm pt-space-xs border-none p-8 gap-3">
        <h2 className="font-label-sm text-label-sm text-on-surface-variant text-2xl flex items-center">
          <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary">filter_alt</span>
          Filtrar por:
        </h2>
        <ul className="flex gap-3 flex-wrap">
          <li>
            <button aria-pressed={activeFilter === null} onClick={() => setActiveFilter(null)} className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all text-[12px] aria-pressed:bg-surface-container-highest aria-pressed:text-on-surface-variant! aria-pressed:inset-shadow-sm aria-pressed:inset-shadow-black">
              Sin Filtros
            </button>
          </li>
          {
            filter.map((f, i) => <li key={"filt"+i}><button aria-pressed={activeFilter === i} onClick={() => setActiveFilter(i)} className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all capitalize text-[12px] aria-pressed:bg-surface-container-highest aria-pressed:text-on-surface-variant! aria-pressed:inset-shadow-sm aria-pressed:inset-shadow-black">{f}</button></li>)
          }
        </ul> 
        
      </div>
    </section>
  );
};
