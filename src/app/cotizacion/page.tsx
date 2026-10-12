import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { getOrganizationJsonLd } from "../lib/site-json-ld";
import { getRequestOrigin } from "../lib/site-url";
import { Badge } from "../components/Badge";
import { QuotationForm } from "../components/QuotationForm";
import { QuotationCount, QuotationItems } from "../components/QuotationItems";

export const metadata: Metadata = {
  title: "Cotización online | Vivero del Golf",
  description:
    "Prepará tu lista de plantas, árboles y productos de vivero para solicitar una cotización a Vivero del Golf en Rosario.",
  alternates: { canonical: "/cotizacion" },
};

export default async function Cotizacion() {
  const origin = await getRequestOrigin();
  const pageUrl = new URL("/cotizacion", origin).toString();
  const organization = getOrganizationJsonLd(origin);
  const quotationPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Cotización online | Vivero del Golf",
        description: metadata.description,
        mainEntity: { "@id": organization["@id"] },
      },
      organization,
    ],
  };

  return (
    <>
      <JsonLd data={quotationPageJsonLd} />
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        <section className="relative overflow-hidden  py-12">
          <div className="flex flex-col px-4 md:px-8">
            <div className="max-w-3xl">
              <Badge icon={"eco"} text={"Revisá tu cotización"} />
            </div>
            <h1 className="text-4xl lg:text-7xl lg:text-display-hero text-on-surface leading-none font-bold mb-5 tracking-tight">
              Tu Solicitud de Cotización
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-5">
              Un asesor técnico de{" "}
              <span className="font-bold text-on-surface">Vivero del Golf</span>{" "}
              evaluará tus especímenes seleccionados y te responderá a la
              brevedad con la confirmación de inventario vivo, costos logísticos
              y fechas estimadas de entrega.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start px-4 md:px-8 gap-5 mb-5">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest rounded-xl p-4 md:p-8 shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-headline-lg text-xl md:text-2xl font-bold text-on-surface tracking-tight text-balance flex items-center gap-5">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary text-[22px]"
                    >
                      nest_eco_leaf
                    </span>
                    Especies e Insumos Seleccionados
                  </h2>
                  <span
                    className="font-label-sm text-label-sm bg-surface-container text-on-surface p-3 rounded-lg text-center"
                    aria-live="polite"
                    id="items-counter-badge"
                  >
                    <QuotationCount />
                  </span>
                </div>
                <QuotationItems />
                <div className="bg-surface-container-low rounded-lg p-space-md flex items-center p-8">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center gap-2 shrink-0">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary text-[20px]"
                    >
                      local_shipping
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs md:text-sm">
                    Los costos de flete y embalaje botánico acolchado se
                    calcularán según el volumen total y la distancia a tu zona
                    para resguardar la salud de las raíces.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 sticky top-24">
              <div className="bg-surface-container-lowest rounded-xl p-4 md:p-8 shadow-sm flex flex-col gap-5">
                <div className="flex flex-col gap-space-xxs">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Datos de contacto para la cotización
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Comunícanos tus datos para enviarte el desglose formal y contactarte por WhatsApp.
                  </p>
                </div>
                <QuotationForm />
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8">
            <ul className="bg-surface-container-low rounded-xl p-space-lg grid grid-cols-1 md:grid-cols-3 items-center gap-5 max-w-7xl mx-auto">
              <li className="flex items-center gap-2 p-4 md:p-8">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[26px]"
                  >
                    potted_plant
                  </span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2 text-xl">
                    Selección en Raíz Viva
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Revisamos la sanidad foliar antes del envío.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 p-4 md:p-8">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[26px]"
                  >
                    support_agent
                  </span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2 text-xl">
                    Asistencia Post-Venta
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Guía de aclimatación y sustratos adaptados.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 p-4 md:p-8">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[26px]"
                  >
                    shield
                  </span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2 text-xl">
                    Presupuestos Clarísimos
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Valores transparentes sin recargos sorpresa.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
