import Image from "next/image";
import { Badge } from "./components/Badge";
import { SearchComponent } from "./components/search/SearchComponent";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full">
      <section className=" w-full overflow-hidden py-12 flex items-center justify-center">        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-space-xl items-center relative z-10 gap-8 p-4 md:px-8">
          <Badge icon={"psychology_alt"} text={"Extravío Botánico • Código 404"}/>
          <div className="relative w-full max-w-xl mx-auto mb-space-xl flex flex-col items-center flex-nowrap">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest flex items-center justify-center group mb-5">
              <Image
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width="500"
                height="500"
                src="/404.webp"
                alt=""
              />              
            </div>
            <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl px-space-md py-space-xs flex items-center justify-between shadow-md p-4">
                <div className="flex items-center gap-space-xs text-left gap-4">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-[20px]">
                    local_florist
                  </span>
                  <div>
                    <p className="font-headline-sm italic text-[12px] text-secondary">
                      Especie: Desconocida (Taxón 404)
                    </p>
                  </div>
                </div>
              </div>
            <div
              className="hidden sm:flex absolute -right-6 top-6 bg-surface-container-lowest shadow-md rounded-2xl p-space-sm items-center gap-space-xs">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-[20px]">
                wb_sunny
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Buscando mejor luz
              </span>
            </div>
            <div className="hidden sm:flex absolute -left-6 bottom-16 bg-surface-container-lowest shadow-md rounded-2xl p-space-sm items-center gap-space-xs">
              <span aria-hidden="true" className="material-symbols-outlined text-secondary text-[20px]">
                water_drop
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Tierra fresca asegurada
              </span>
            </div>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm font text-4xl lg:text-7xl mb-5 text-balance">
              ¡Ups! Esta planta parece haber cambiado de maceta
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-space-xl mb-5">
              La página o ejemplar que estás buscando no existe, fue podada o se
              mudó a otro rincón soleado de nuestro vivero.
            </p>
            <div className="w-full max-w-lg mb-space-xl mb-5 flex justify-center">
              <SearchComponent />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-5">
              <Link
                className="w-full sm:w-auto flex items-center justify-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container font-label-md text-label-md px-space-xl py-space-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 p-2 gap-2"
                data-path="inicio"
                href="/"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                  home
                </span>
                <span>Volver al Inicio</span>
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs btn-secondary-text-color font-label-md text-label-md rounded-full transition-all duration-200 shadow-sm hover:shadow-md p-2 gap-2"
                data-path="productos"
                href="/productos"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                  park
                </span>
                <span>Explorar Catálogo de Productos</span>
              </Link>
            </div>
            <div className="mt-space-xl pt-space-md flex flex-col items-center justify-center">
              <h2 className="font-headline-sm text-2xl font-bold text-on-surface mb-5">¿Buscabas una variedad específica?</h2>
              <a
                className="group inline-flex w-full sm:w-auto items-center justify-center font-label-md text-label-md text-secondary hover:text-on-surface transition-colors gap-2 btn-secondary-text-color rounded-full p-2 shadow-sm hover:shadow-md"
                href="https://wa.me/543415001111?text=Hola%20Vivero%20del%20Golf,%20estaba%20buscando%20un%20ejemplar%20en%20su%20web%20y%20no%20lo%20encuentro."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                  chat
                </span>                  
                <strong className="underline decoration-secondary/50 font-semibold text-balance">
                  Contactar por WhatsApp
                </strong>
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
