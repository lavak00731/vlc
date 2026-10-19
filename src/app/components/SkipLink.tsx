import React from 'react'

export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:top-4 focus-visible:bg-white focus-visible:absolute focus-visible:left-1/2 focus-visible:z-5000 focus-visible:text-black focus:p-4 focus:border focus:rounded-md focus-visible:p-4 focus-visible:block"
    >
      Ir al contenido principal
    </a>
  )
}
