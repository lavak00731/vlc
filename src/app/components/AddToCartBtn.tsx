'use client'
import type ProductInterface from "../interfaces/ProductInterface";
import { useQuotation } from "../context/QuotationContext";

export default function AddToCartBtn ({product}:{product:ProductInterface}) {
    const { items, addProduct } = useQuotation();
    const isSelected = items.some((item) => item.product.id === product.id);
  return (
    <button type="button" onClick={() => addProduct(product)} className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-al min-w-40 justify-center">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
            {isSelected ? "check" : "add_shopping_cart"}
        </span>
        {isSelected ? "Agregar otra" : "Cotizar"} <span className="sr-only">{product.name}</span>
     </button>
)
}
