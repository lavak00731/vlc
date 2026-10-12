import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { getOrganizationJsonLd } from "../lib/site-json-ld";
import { getRequestOrigin } from "../lib/site-url";
import { Badge } from "../components/Badge";

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
                    3 items
                  </span>
                </div>
                <ul className="flex flex-col gap-4 mb-5" id="cart-list">
                  <li
                    className="cart-item bg-surface-container-low rounded-lg p-8 flex flex-col sm:flex-row items-center gap-space-md transition-all hover:shadow-md gap-5"
                  >
                    <div className="w-24 h-28 rounded-lg overflow-hidden shrink-0 bg-surface-container mb-5">
                      <Image
                        alt="Monstera Deliciosa in a terracotta handcrafted pot with vibrant fenestrated green leaves, warm ambient afternoon lighting in a botanical conservatory with earthy background tones."
                        className="w-full h-full object-cover"
                        width={300}
                        height={300}
                        src="/AR-001-1.webp"
                      />
                    </div>
                    <div className="flex flex-col grow min-w-0 w-full sm:w-auto">
                      <div className="flex items-start justify-between gap-space-xs">
                        <div>
                          <h3 className="font-headline-sm text-xl text-on-surface">
                            Monstera Deliciosa
                          </h3>
                        </div>
                        <button
                          className="btn-remove text-outline hover:text-error transition-colors p-1"
                          title="Eliminar ítem"
                          type="button"
                        >
                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined text-[20px]"
                          >
                            delete
                          </span>
                          <span className="sr-only">Borrar Monstera</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-space-sm pt-space-xs">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Cantidad Solicitada:
                        </span>
                        <div className="flex items-center bg-surface-container-lowest rounded-full p-1 shadow-sm">
                          <button
                            className="btn-qty-minus w-7 h-7 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                            type="button"
                          >
                            <span
                              aria-hidden="true"
                              className="material-symbols-outlined text-[16px]"
                            >
                              remove
                            </span>
                            <span className="sr-only">
                              Quitar una unidad de Monstera
                            </span>
                          </button>
                          <span className="qty-display font-title-md text-title-md px-space-sm text-on-surface min-w-7 text-center">
                            3
                          </span>
                          <button
                            className="btn-qty-plus w-7 h-7 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                            type="button"
                          >
                            <span
                              aria-hidden="true"
                              className="material-symbols-outlined text-[16px]"
                            >
                              add
                            </span>
                            <span className="sr-only">
                              Agregar una unidad de Monstera
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="bg-surface-container rounded-lg p-space-md flex flex-col sm:flex-row items-center justify-between p-8 gap-5">
                  <div className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary text-[24px]"
                    >
                      receipt_long
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Balance Estimado
                      </span>
                      <span
                        aria-live="polite"
                        className="font-title-md text-title-md font-bold text-on-surface"
                        id="total-summary-text"
                      >
                        10 productos para cotizar
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center gap-2 text-secondary hover:text-on-surface font-label-md text-label-md"
                    href="/productos"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px]"
                    >
                      add_circle
                    </span>
                    <span className="underline">
                      Seguir explorando el catálogo
                    </span>
                  </Link>
                </div>
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
                    Comunícanos tus datos para enviarte el desglose formal en
                    PDF y contactarte por WhatsApp.
                  </p>
                </div>
                <form
                  className="flex flex-col gap-space-md"
                  id="quotation-form"
                >
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                      htmlFor="client-name"
                    >
                      <span>
                        Nombre y Apellido{" "}
                        <span className="text-error font-bold">*</span>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs shadow-sm focus:outline-none focus:bg-surface-container-low transition-all"
                        id="client-name"
                        name="name"
                        placeholder="Ej. Constanza Silva"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                      htmlFor="client-phone"
                    >
                      <span>
                        Teléfono / WhatsApp{" "}
                        <span className="text-error font-bold">*</span>
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Respuestas directas
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs shadow-sm focus:outline-none focus:bg-surface-container-low transition-all"
                        id="client-phone"
                        name="phone"
                        placeholder="+56 9 9123 4567"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                      htmlFor="client-email"
                    >
                      <span>
                        Correo Electrónico{" "}
                        <span className="text-error font-bold">*</span>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs shadow-sm focus:outline-none focus:bg-surface-container-low transition-all"
                        id="client-email"
                        name="email"
                        placeholder="ejemplo@dominio.com"
                        required
                        type="email"
                        value="usuario-invalido@"
                      />
                    </div>
                    <div className="bg-error-container text-on-error-container rounded-md p-space-xs mt-1 flex items-center gap-space-xs text-body-sm font-body-sm shadow-sm">
                      <span className="material-symbols-outlined text-[18px] shrink-0">
                        error
                      </span>
                      <span>
                        Por favor ingresa un correo electrónico válido
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                      htmlFor="client-address"
                    >
                      <span>Dirección o Comuna / Localidad</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Opcional para flete
                      </span>
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs shadow-sm focus:outline-none focus:bg-surface-container-low transition-all"
                      id="client-address"
                      name="address"
                      placeholder="Ej. Las Condes, Santiago / Camino La Cumbre s/n"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="client-notes"
                    >
                      Notas adicionales o requerimientos especiales
                    </label>
                    <textarea
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg p-space-xs shadow-sm focus:outline-none focus:bg-surface-container-low transition-all resize-none"
                      id="client-notes"
                      name="notes"
                      placeholder="Indícanos requerimientos de exposición solar, pisos de balcón, trasplante en destino o fecha preferente..."
                      rows={3}
                    ></textarea>
                  </div>

                  <button
                    className="w-full mt-space-xs bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md py-space-sm px-space-xl rounded-full shadow-md transition-all flex items-center justify-center gap-space-xs cursor-pointer group"
                    type="submit"
                  >
                    <span>Enviar pedido de cotización</span>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                  <div className="flex items-center justify-center gap-space-xs text-on-surface-variant text-center pt-space-xxs">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      verified_user
                    </span>
                    <span className="font-label-sm text-label-sm font-medium">
                      Garantía de respuesta botánica en menos de 24 horas
                      hábiles.
                    </span>
                  </div>
                </form>
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
