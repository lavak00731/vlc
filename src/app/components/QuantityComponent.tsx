import React from 'react'

export const QuantityComponent = ({prods, visibleProds}:{prods:number, visibleProds:number}) => {
  return (
    <div aria-live='polite' className="bg-surface-container text-vivero-accent p-4 rounded-sm mb-5 inline-flex border-outline-variant border-2 shadow-2xl">
        <p><span>{visibleProds}</span> productos de un total de <span>{prods}</span></p>
    </div>
  )
}

