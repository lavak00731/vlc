import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden py-space-2xl md:py-space-3xl flex items-center justify-center">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary-fixed/25 blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl w-full mx-auto px-space-md lg:px-space-xl flex flex-col items-center text-center">
          <div className="flex items-center gap-space-xs px-space-md py-space-xxs rounded-full bg-surface-container-high/80 text-primary mb-space-lg shadow-sm">
            <span className="material-symbols-outlined text-[16px]">
              psychology_alt
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
              Extravío Botánico • Código 404
            </span>
          </div>
          <div className="relative w-full max-w-xl mx-auto mb-space-xl flex flex-col items-center">
            <div className="relative w-72 h-80 sm:w-88 sm:h-96 rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest flex items-center justify-center group">
              <Image
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width="500"
                height="500"
                src="/404.webp"
                alt=""
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl px-space-md py-space-xs flex items-center justify-between shadow-md">
                <div className="flex items-center gap-space-xs text-left">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    local_florist
                  </span>
                  <div>
                    <p className="font-title-md text-[14px] leading-tight text-on-surface font-semibold">
                      Brote Fuera de Curso
                    </p>
                    <p className="font-headline-sm italic text-[12px] text-secondary">
                      Especie: Desconocida (Taxón 404)
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm bg-tertiary-fixed text-tertiary px-space-xs py-0.5 rounded-full">
                  Resiliente
                </span>
              </div>
            </div>
            <div
              className="hidden sm:flex absolute -right-6 top-6 bg-surface-container-lowest shadow-md rounded-2xl p-space-sm items-center gap-space-xs animate-bounce">
              <span className="material-symbols-outlined text-primary text-[20px]">
                wb_sunny
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Buscando mejor luz
              </span>
            </div>
            <div className="hidden sm:flex absolute -left-6 bottom-16 bg-surface-container-lowest shadow-md rounded-2xl p-space-sm items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[20px]">
                water_drop
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Tierra fresca asegurada
              </span>
            </div>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
              ¡Ups! Esta planta parece haber cambiado de maceta
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-space-xl">
              La página o ejemplar que estás buscando no existe, fue podada o se
              mudó a otro rincón soleado de nuestro vivero.
            </p>
            <div className="w-full max-w-lg mb-space-xl">
              <form
                className="relative flex items-center bg-surface-container-lowest rounded-full p-1.5 shadow-lg"
                
              >
                <span className="material-symbols-outlined text-outline ml-3 text-[22px] shrink-0">
                  search
                </span>
                <input
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface px-space-xs py-space-xs focus:outline-none placeholder:text-outline/70"
                  id="search-input"
                  placeholder="¿Buscabas Ficus, Monstera, macetas de greda...?"
                  type="text"
                />
                <button
                  className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-space-xs rounded-full transition-all duration-200 shrink-0 shadow-sm hover:shadow"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-xl py-space-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                data-path="inicio"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  home
                </span>
                <span>Volver al Inicio</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md px-space-xl py-space-sm rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                data-path="productos"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  park
                </span>
                <span>Explorar Catálogo de Productos</span>
              </a>
            </div>
            <div className="mt-space-xl pt-space-md flex items-center justify-center">
              <a
                className="group inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-on-surface transition-colors"
                href="https://wa.me/56987654321?text=Hola%20La%20Cumbrecita,%20estaba%20buscando%20un%20ejemplar%20en%20su%20web%20y%20no%20lo%20encuentro."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">
                  chat
                </span>
                <span>
                  ¿Buscabas una variedad específica?{" "}
                  <strong className="underline decoration-secondary/50 font-semibold">
                    Contactar a un Asesor por WhatsApp
                  </strong>
                </span>
                <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
