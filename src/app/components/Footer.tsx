import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-vivero-badge-stock px-4 pt-6 pb-18 mt-8">
      <div className="flex flex-col items-center text-center gap-4 max-w-sm mx-auto">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl mb-6">
            Vivero La Cumbrecita
          </h2>
          <p className="font-body-sm text-on-surface-variant">
            <span className="block">Av. Presidente Perón 3765</span> (ex Av. Godoy), Rosario, Santa Fe
          </p>

        </div>
        <a
          className="group inline-flex items-center gap-2 bg-primary btn-text-color focus-within:bg-primary-container px-5 py-2.5 rounded-full font-label-md text-xs tracking-wide shadow-[0_2px_10px_rgba(61,102,94,0.2)] hover:bg-primary-container active:scale-95 transition-all"
          href="https://wa.me/543412590671"
          rel="noopener"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[18px] text-inherit">chat</span>
          <span className="text-inherit">WhatsApp: +54 341 259 - 0671</span>
        </a>
        <p className="font-label-sm text-[10px] text-[#000000]/60 tracking-wider uppercase pt-2">
          © { new Date().getFullYear() } Vivero La Cumbrecita. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
