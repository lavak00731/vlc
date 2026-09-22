import Image from "next/image";
import Link from "next/link";
import { VideoComponent } from "./components/VideoComponent";

export default function Home() {
  return (
    <div className="flex flex-col w-full p-4 md:py-12 md:px-8">
      <section className="relative overflow-hidden pt-space-xl pb-space-3xl px-space-md lg:px-space-xl pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-space-xl items-center relative z-10 gap-8">
          <div className="md:col-span-7 flex flex-col items-start space-y-space-md">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-highest/80 p-2 px-space-md py-space-xxs rounded-full text-on-surface shadow-elevated mb-6">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-primary text-[18px]"
              >
                eco
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary">
                Botánica &amp; Jardinería Artesanal
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl lg:text-display-hero text-on-surface tracking-tight leading-none font-bold mb-5">
              Vida y naturaleza para tus espacios
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface/85 max-w-xl mb-5">
              Cultivamos ejemplares botánicos seleccionados con dedicación
              orgánica. Diseñamos paisajes que inspiran paz, purifican tus
              rincones y transforman cualquier habitación en un oasis vivo.
            </p>
            <div className="flex flex-wrap items-center gap-5 md:gap-6 mb-5 sm:justify-between w-full max-w-2xl">
              <Link
                className="group inline-flex items-center gap-space-xs px-8 py-3.5 rounded-full font-label-md text-label-md transition-all duration-300 shadow-sm hover:shadow-md bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container w-full justify-center gap-4 md:max-w-80"
                href="/productos"
              >
                <span className="text-inherit">Explorar Productos</span>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-inherit"
                >
                  arrow_forward
                </span>
              </Link>
              <a
                className="inline-flex items-center gap-space-xs bg-transparent text-primary hover:bg-primary/10 px-7 py-3 rounded-full font-label-md text-label-md transition-colors w-full  btn-secondary-text-color shadow-xl justify-center gap-4 md:max-w-80"
                href="https://wa.me/543412590671"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-inherit"
                >
                  assignment
                </span>
                <span className="text-inherit">Cotizar Directamente</span>
              </a>
            </div>
            <div className="flex gap-4 pt-space-lg w-full mb-5 justify-center max-w-2xl">
              <div className="flex flex-col bg-white gap-3 rounded-2xl p-2 shadow-xl">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-[24px] text-center"
                >
                  verified
                </span>
                <div>
                  <p className="font-title-md text-sm font-bold text-on-surface leading-tight text-center">
                    100%
                  </p>
                  <p className="font-body-sm text-sm text-on-surface/70 text-center">
                    Sanidad vegetal
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white gap-3 rounded-2xl p-2 shadow-xl">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-[24px] text-center"
                >
                  local_shipping
                </span>
                <div>
                  <p className="font-title-md text-sm font-bold text-on-surface leading-tight text-center">
                    Envíos
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface/70 text-center">
                    Seguros en zona
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white gap-3 rounded-2xl p-2 shadow-xl">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-primary text-[24px] text-center"
                >
                  support_agent
                </span>
                <div>
                  <p className="font-title-md text-sm font-bold text-on-surface leading-tight text-center">
                    Asesoría
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface/70 text-center">
                    Botánica guiada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 mt-space-lg lg:mt-0 mb-5">
            <div className="relative w-full aspect-720/1280 rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest mb-5">
              <VideoComponent
                className="w-full"
                width="720"
                height="1280"
                poster="/posterlisto.webp"
                src="/viverovideo.mp4"
              />
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-xl flex items-center gap-space-sm p-4 gap-4 w-full">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[26px]"
                >
                  potted_plant
                </span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                  Cultivo Artesanal
                </span>
                <p className="font-title-md text-title-md text-on-surface font-semibold leading-snug">
                  Más de 250 especies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-surface-container-low -mx-6  px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md mb-5">
            <div>
              <div className="flex items-center gap-space-xs text-primary mb-space-xxs mb-5 md:mb-0">
                <span className="material-symbols-outlined text-[20px]">
                  category
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  Catálogo Curado
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-6xl font-bold text-on-surface tracking-tight">
                Categorías de Productos
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-space-xs text-secondary hover:underline font-label-md text-label-md font-semibold"
              href="/productos"
            >
              <span>Ver catálogo completo</span>
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                trending_flat
              </span>
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-space-md">
            <li>
              <Link
                className="group h-full relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col"
                aria-label="Plantas, de interiores, sombra y florales aromáticas"
                href="/productos/plantas"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt=""
                    width="300"
                    height="300"
                    src="/plantas.webp"
                  />
                </div>
                <div className="p-8 grow flex flex-col justify-between bg-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
                      Plantas
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs mb-5">
                      Interiores luminosos, sombra profunda y florales
                      aromáticas.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Monstera, Ficus, Helechos...
                    </span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-[18px]"
                      >
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="group h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col"
                aria-label="Árboles y Arbustos, Especies nativas, cítricos frutales y arbustos perennes de cerco."
                href="/productos/arboles"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="300"
                    height="300"
                    loading="lazy"
                    alt=""
                    src="/arboles.webp"
                  />
                </div>
                <div className="p-8 grow flex flex-col justify-between bg-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
                      Árboles y Arbustos
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs mb-5">
                      Especies nativas, cítricos frutales y arbustos perennes de
                      cerco.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Limones, Acacias, Liquidambar...
                    </span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
                      <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="group h-full relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col"
                href="/productos/macetas"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="300"
                    height="300"
                    loading="lazy"
                    alt=""
                    src="/macetas.webp"
                  />
                </div>
                <div className="p-8 grow flex flex-col justify-between bg-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
                      Macetas &amp; Contenedores
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs mb-5">
                      Cerámica esmaltada, terracota porosa tradicional y
                      fibrocemento moderno.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Varios tamaños y drenajes
                    </span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
                      <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="lg:col-span-2">
              <Link
                className="group h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col lg:flex-row lg:min-h-105.5"
                aria-label="Accesorios &amp; Herramientas, Equipamiento para amantes de las plantas"
                href="/productos/herramientas"
              >
                <div className="relative w-full lg:w-1/2  lg:min-h-105.5 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    alt=""
                    width="300"
                    height="300"
                    src="/herramientas.webp"
                  />
                </div>
                <div className="p-8 lg:w-1/2 flex flex-col justify-between bg-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
                      Accesorios &amp; Herramientas
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xs mb-5">
                      Tijeras de poda japonesas, regaderas de precisión de
                      latón, tutores de musgo y medidores de humedad.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm mt-space-xs">
                    <span className="font-label-md text-label-md text-secondary font-semibold max-w-[190px]">
                      Equipamiento para amantes de las plantas
                    </span>
                    <span className="w-9 h-9 rounded-full flex items-center justify-center btn-text-color bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
                      <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
                <Link
                  className="group h-full relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col md:h-auto"
                  aria-label="Fertilizantes y sustratos, "
                  href="/productos/fertilizantes"
                >
                  <div className="relative w-full h-full lg:h-56.5 overflow-hidden">
                    <Image
                      alt=""
                      width="396"
                      height="226"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/fertilizantes.webp"
                    />
                  </div>
                  <div className="p-8 grow flex flex-col justify-between bg-surface-container-lowest">
                    <div>
                      <h3 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
                        Sustratos &amp; Nutrición
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs mb-5">
                        Humus de lombriz, perlita, turba rubia y bioestimulantes
                        biológicos.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">
                        Mezclas listas y específicas
                      </span>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center  btn-text-color bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container transition-colors">
                        <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
            </li>            
          </ul>
        </div>
      </section>
      <section className="py-12 px-6 -mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-space-xl gap-space-md">
            <div className="w-full">
              <div className="flex items-center gap-space-xs text-secondary mb-5">
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                  photo_camera
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  Comunidad Verde
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-6xl font-bold text-on-surface tracking-tight mb-5">
                Seguinos en Instagram y en Facebook
              </h2>
              <p className="font-body-md text-body-md text-on-surface/75 mt-space-xxs mb-5">
                Aprende sobre cuidados, trasplantes y novedades semanales.           
              </p>
              <p className="font-body-md text-body-md text-on-surface/75 mt-space-xxs mb-5">
                Encontranos en: 
              </p>
              <ul className="flex flex-col sm:flex-row justify-between items-center w-full max-w-lg mx-auto gap-8">
                <li className="flex flex-col justify-center items-center">
                 <h3 className="mb-5 text-2xl">Instagram</h3> 
                 <a
                className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all gap-2"
                href="https://www.instagram.com/viverolacumbrecita/"
                rel="noopener noreferrer"
                target="_blank"
              > 
                <Image loading="lazy" alt="" width="32" height="32" src="/instagram.svg"/>                
                @viverolacumbrecita
              </a></li>
                <li className="flex flex-col justify-center items-center">
                  <h3 className="mb-5 text-2xl">Facebook</h3> 
                  <a
                  className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all gap-2"
                  href="https://www.facebook.com/ViveroLaCumbrecitaRosario/"
                  rel="noopener noreferrer"
                  target="_blank"
                >   
                  <Image loading="lazy" alt="" width="32" height="32" src="/facebook.svg"/>                   
                  ViveroLaCumbrecitaRosario
                </a>
                </li>
              </ul>
              
            </div>

          </div>
          
        </div>
      </section>

      <section className="py-12 px-6 -mx-6 bg-surface-container-highest/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-2xl">
            <div className="inline-flex items-center gap-space-xs bg-tertiary-fixed text-on-surface px-space-md py-space-xxs rounded-full mb-space-xs font-semibold bg-vivero-badge-stock p-2 mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">
                verified_user
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Simple, Transparente y Rápido
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-6xl font-bold text-on-surface tracking-tight mb-5 text-balance">
              ¿Cómo cotizar tu pedido online?
            </h2>
            <p className="font-body-md text-body-md text-on-surface/80 mt-space-xs mb-6">
              Comprar plantas requiere asesoramiento. Prepara tu lista y
              nuestro equipoverificará el stock y las condiciones
              óptimas de despacho para tus ejemplares.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-6">
            <li className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-md flex flex-col items-start transition-transform duration-300 hover:-translate-y-1 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-space-md font-bold text-2xl font-headline-md">
                01
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-space-xs flex gap-2 items-center">
                <span aria-hidden="true" className="material-symbols-outlined text-primary">
                  travel_explore
                </span>
                Explora y Elige
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80">
                Navega por las categorías de nuestro catálogo botánico. Revisa
                las fichas técnicas con requerimientos de luz solar, frecuencia
                de riego y dimensiones finales.
              </p>
              <div className="mt-space-md pt-space-md w-full">
                <span aria-hidden="true" className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider block">
                  Recomendación
                </span>
                <span className="font-body-sm text-body-sm text-on-surface/70">
                  Usa los filtros de sombra o sol según tu ambiente.
                </span>
              </div>
            </li>

            <li className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-md flex flex-col items-start transition-transform duration-300 hover:-translate-y-1 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-space-md font-bold text-2xl font-headline-md">
                02
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-space-xs flex gap-2 items-center">
                <span aria-hidden="true" className="material-symbols-outlined text-primary">
                  add_shopping_cart
                </span>
                Agrega a tu Cotización
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80">
                Haz clic en "Agregar a cotización" en cada planta, maceta de
                greda o bolsa de sustrato que te interese. No requiere pago
                inmediato ni tarjetas.
              </p>
              <div className="mt-space-md pt-space-md w-full">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider block">
                  Flexibilidad
                </span>
                <span className="font-body-sm text-body-sm text-on-surface/70">
                  Añade notas específicas sobre el tamaño o macetero deseado.
                </span>
              </div>
            </li>

            <li className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-md flex flex-col items-start transition-transform duration-300 hover:-translate-y-1 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-space-md font-bold text-2xl font-headline-md">
                03
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-space-xs flex gap-2 items-center">
                <span aria-hidden="true" className="material-symbols-outlined text-primary">
                  local_shipping
                </span>
                Envía y Coordinamos
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80">
                Ingresa tus datos y tu dirección. Recibirás respuesta inmediata
                con fotos reales de los ejemplares en stock, valor final y fecha
                estimada de entrega o retiro.
              </p>
              <div className="mt-space-md pt-space-md w-full">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider block">
                  Garantía
                </span>
                <span className="font-body-sm text-body-sm text-on-surface/70">
                  Embalaje acolchado especial para preservar la raíz y follaje.
                </span>
              </div>
            </li>
          </ul>
          <div className="text-center">
            <a
              className="inline-flex items-center gap-space-xs bg-primary text-white! hover:bg-primary-container hover:text-on-surface-variant! px-8 py-3.5 rounded-full font-label-md text-label-md transition-all shadow-sm gap-2"
              target="_blank"
              href="https://wa.me/543412590671?text=Hola%20Vivero%20La%20Cumbrecita,%20quisiera%20asesoramiento%20y%20cotizar%20algunas%20plantas"
            >
              <span>Comenzar mi cotización ahora</span>
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                east
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 -mx-6">
        <div className="max-w-7xl mx-auto bg-linear-to-r from-primary via-primary to-primary-container text-on-primary rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <svg
            aria-hidden="true"
            className="lg:block hidden absolute -right-16 -bottom-16 w-80 h-80 text-white/5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 200 200"
          >
            <path d="M42.5,31.2C56.8,17.4,77.7,11.5,96.6,18.3C115.5,25.2,132.5,44.9,130.6,65.3C128.8,85.6,108.1,106.6,87.7,117.8C67.3,129.1,47.2,130.6,33.5,120.3C19.8,110,12.5,87.9,15.7,66.7C18.9,45.5,28.2,45,42.5,31.2Z"></path>
          </svg>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="max-w-2xl text-center lg:text-left space-y-space-xs mb-5 lg:mb-0">
              <div className="inline-flex items-center gap-space-xs bg-white/15 backdrop-blur px-space-md py-space-xxs rounded-full text-on-primary p-2 mb-5">
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
                <span className="font-label-sm text-base font-semibold tracking-wider uppercase">
                  Respuesta en menos de 30 minutos
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-white! tracking-tight mb-5">
                ¿Dudas sobre qué planta elegir o necesitas asesoramiento para un
                proyecto?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/85 max-w-xl">
                Escríbenos directamente por WhatsApp. Nuestro equipo botánico te
                enviará fotos de plantas disponibles en el vivero hoy mismo,
                resolverá consultas de cuidados y te guiará paso a paso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0">
              <a
                className="inline-flex gap-2 items-center gap-space-sm bg-surface text-primary! hover:bg-surface-container-high px-8 py-4 rounded-full font-label-md text-label-md font-bold shadow-lg hover:scale-105 transition-all duration-300"
                href="https://wa.me/543412590671?text=Hola%20Vivero%20La%20Cumbrecita,%20quisiera%20asesoramiento%20y%20cotizar%20algunas%20plantas"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                  chat
                </span>
                <span>Chatear por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
