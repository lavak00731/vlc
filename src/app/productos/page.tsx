import { Breadcrumb } from "../components/navs/Breadcrumb";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";

const Productos = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
          <Breadcrumb />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mt-space-xs">
            <div className="max-w-3xl">
              <Badge
                icon={"eco"}
                text={"Productos ideales para tu parque y jardín"}
              />
              <h1 className="text-4xl lg:text-7xl lg:text-display-hero text-on-surface tracking-tight leading-none font-bold mb-5">
                Catálogo de Productos
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed mb-5 max-w-2xl">
                Descubre nuestra selección de especímenes y productos que
                engalarán tus espacios. Selecciona los ejemplares que deseas
                incorporar a tu jardín o proyecto y añádelos a tu{" "}
                <strong className="text-on-surface font-semibold">
                  lista de cotización
                </strong>
                ; nuestro equipo técnico evaluará portes, stock en tiempo real y
                despacho directo a obra o domicilio.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-lowest rounded-xl shadow-sm border-0 shrink-0 p-2 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  potted_plant
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                  +680
                </span>
                <span className="font-label-sm text-label-sm text-outline tracking-normal">
                  Especies en Cultivo Activo
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-surface-container-highest/40 py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              id="categories-grid"
            >
              <Card
                url={"/productos/plantas"}
                img={"/plantas.webp"}
                title={"Plantas"}
                ariaLabel={
                  "Plantas, de interiores, sombra y florales aromáticas"
                }
                description={
                  "Interiores luminosos, sombra profunda y florales aromáticas."
                }
                footerDescription={"Monstera, Ficus, Helechos..."}
                spansInTwo={true}
              />
              <Card
                url={"/productos/arboles"}
                img={"/arboles.webp"}
                title={"Árboles y Arbustos"}
                ariaLabel={
                  "Árboles y Arbustos, Especies nativas, cítricos frutales y arbustos perennes de cerco."
                }
                description={
                  "Especies nativas, cítricos frutales y arbustos perennes de cerco."
                }
                footerDescription={"Limones, Acacias, Liquidambar..."}
                spansInTwo={false}
              />
              <Card
                url={"/productos/macetas"}
                img={"/macetas.webp"}
                title={"Macetas &amp; Contenedores"}
                ariaLabel={
                  "Macetas &amp; Contenedores, Cerámica esmaltada, terracota porosa tradicional y fibrocemento moderno."
                }
                description={
                  "Cerámica esmaltada, terracota porosa tradicional y fibrocemento moderno."
                }
                footerDescription={"Varios tamaños y drenajes"}
                spansInTwo={false}
              />
              <Card
                url={"/productos/herramientas"}
                img={"/herramientas.webp"}
                title={"Accesorios &amp; Herramientas"}
                ariaLabel={
                  "Accesorios &amp; Herramientas, Equipamiento para amantes de las plantas"
                }
                description={
                  "Tijeras de poda japonesas, regaderas de precisión de latón, tutores de musgo y medidores de humedad."
                }
                footerDescription={"Equipamiento para amantes de las plantas"}
                spansInTwo={false}
              />
              <Card
                url={"/productos/fertilizantes"}
                img={"/fertilizantes.webp"}
                title={"Sustratos &amp; Nutrición"}
                ariaLabel={
                  "Fertilizantes y sustratos, Mezclas listas y específicas"
                }
                description={
                  "Humus de lombriz, perlita, turba rubia y bioestimulantes biológicos."
                }
                footerDescription={"Mezclas listas y específicas"}
                spansInTwo={false}
              />
            </ul>
          </div>
        </section>
        <section className="w-full bg-surface-container rounded-3xl py-12">
          <div className="max-w-7xl p-4 md:p-8 mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-surface-container-highest/80 p-4 md:p-8 rounded-3xl mb-5 flex-wrap">
              <div className="flex flex-col md:flex-row md:items-center items-start justify-between md:min-w-full">
                <div className="mb-5">
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-5 ">
                    Proceso Transparente
                  </p>
                  <h2 className="font-headline-sm text-3xl font-bold text-on-surface">
                    ¿Cómo funciona nuestra cotización en línea?
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mb-5">
                  Los seres vivos no son productos en serie: verificamos vigor
                  radicular, tamaño real disponible y logística de transporte
                  antes de confirmar tu pedido.
                </p>
              </div>
              <ol className="md:w-full grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl md:min-w-full gap-8">
                <li className="bg-surface-container-lowest rounded-2xl flex flex-col gap-space-xs shadow-sm p-4 md:p-8">
                  <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center font-headline-sm">
                    1
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    Elige tus ejemplares
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Explora las categorías y presiona &quot;Añadir a
                    Cotización&quot; indicando cantidades y tamaños aproximados.
                  </p>
                </li>

                <li className="bg-surface-container-lowest p-space-md rounded-2xl flex flex-col gap-space-xs shadow-sm p-4 md:p-8">
                  <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center font-headline-sm">
                    2
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    Revisión Botánica
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    En menos de 2 horas hábiles nuestros agrónomos validan
                    inventario y condiciones de entrega.
                  </p>
                </li>

                <li className="bg-surface-container-lowest p-space-md rounded-2xl flex flex-col gap-space-xs shadow-sm p-4 md:p-8">
                  <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center font-headline-sm">
                    3
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    Reserva &amp; Despacho
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Recibes una propuesta detallada con fotos reales de los
                    ejemplares y opciones de envío protegido.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-highest/40 text-on-primary rounded-3xl overflow-hidden shadow-xl p-space-lg lg:p-space-2xl relative">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
            <svg
              fill="currentColor"
              height="420"
              viewBox="0 0 200 200"
              width="420"
            >
              <path
                d="M42.7,-64.1C55.4,-57.1,65.8,-46,72.4,-32.8C79,-19.6,81.9,-4.3,79.5,10.2C77,24.7,69.2,38.3,58.7,48.9C48.2,59.5,35,67,20.8,70.8C6.6,74.6,-8.7,74.7,-23.7,70.5C-38.7,66.3,-53.4,57.7,-63.9,45.1C-74.4,32.5,-80.7,16.2,-79.8,0.5C-78.9,-15.2,-70.8,-30.4,-60.1,-41.7C-49.4,-53,-36.1,-60.4,-22.5,-66.9C-8.9,-73.4,5,-79,18.8,-77.3C32.6,-75.7,30,-71,42.7,-64.1Z"
                transform="translate(100 100)"
              ></path>
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-on-primary-container text-label-sm font-label-sm w-fit">
              <span className="material-symbols-outlined text-[16px]">
                domain
              </span>
              <span>Proyectos • Paisajistas • Empresas</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary leading-tight">
              ¿Necesitas un presupuesto por volumen o asesoría botánica en
              terreno?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              Trabajamos de la mano con estudios de arquitectura, desarrollos
              inmobiliarios y particulares. Ofrecemos listas de especies nativas
              a granel, fichas técnicas de mantención y visita diagnóstica a
              parcela.
            </p>
            <div className="flex flex-wrap items-center gap-space-md mt-space-sm">
              <a
                className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary hover:bg-surface-container px-space-xl py-space-sm rounded-full font-title-md text-title-md font-bold transition-all shadow-md"
                href="#"
              >
                <span className="material-symbols-outlined text-[22px]">
                  contact_support
                </span>
                <span>Solicitar Asesoría Mayorista</span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs text-on-primary hover:text-on-primary-container font-label-md text-label-md transition-colors"
                href="https://wa.me/56987654321"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                <span>Escribir directamente por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Productos;
