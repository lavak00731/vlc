import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "../components/navs/Breadcrumb";
import { Badge } from "../components/Badge";

export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full  py-12  bg-surface-dim/40">
      <div className="relative max-w-7xl w-full px-4 md:px-8 mx-auto overflow-hidden">
        <div className=" mx-auto px-space-md lg:px-space-xl pt-space-xl">
          <Breadcrumb />
          <section className="max-w-3xl mb-space-2xl">
            <Badge icon={"spa"} text={"Atención Botánica y Asesorías"} />
            <h1 className="font-display-hero text-4xl lg:text-7xl text-on-surface tracking-tight font-bold mb-5">
              Ponte en Contacto con Vivero del Golf
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-5">
              Estamos aquí para guiarte en cada etapa: resuelve tus inquietudes
              de cultivo, cotiza intervenciones de paisajismo para tu hogar o
              empresa, o coordina una visita guiada por nuestros invernaderos.
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <aside className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(45,55,40,0.12)] transition-shadow p-4 md:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center ">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary text-[26px]"
                    >
                      chat
                    </span>
                  </div>
                  <p className="bg-surface-container text-primary font-label-sm text-label-sm px-space-xs py-space-xxs rounded-full font-medium p-2">
                    Respuesta inmediata
                  </p>
                </div>
                <h2 className="font-title-md text-2xl text-on-surface font-bold mb-5">
                  WhatsApp Directo
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  Chatea en tiempo real con uno de nuestros especialistas para
                  consultas rápidas sobre disponibilidad de especies o salud de
                  tus plantas.
                </p>

                <a
                  className="w-full inline-flex items-center justify-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container rounded-full p-2 font-label-md text-label-md font-semibold transition-all shadow-md group"
                  href="https://wa.me/543415001111?text=Hola%20Vivero%20del%20Golf,%20quiero%20saber%20sobre%20..."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110"
                  >
                    forum
                  </span>
                  <span>Chatear por WhatsApp</span>
                </a>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)] flex flex-col p-4 md:p-8">
                <div className="flex items-start mb-5 gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary text-[22px]"
                    >
                      location_on
                    </span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-title-md text-on-surface text-xl font-bold mb-5">
                      Dirección y Acceso
                    </h2>
                    <p className="font-body-sm text-on-surface-variant">
                      <span className="block">Av. Jorge Newbery 9320</span>{" "}
                      Rosario, Santa Fe
                    </p>
                  </div>
                </div>
                <figure className="w-full aspect-video rounded-lg overflow-hidden shadow-inner mb-5">
                  <iframe
                    title="Ubicación Vivero del Golf"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.580876884972!2d-60.77203922356906!3d-32.90924797000192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b64d87261ecd63%3A0x8151fda3d7d19f6f!2sVivero%20Del%20Golf!5e0!3m2!1ses-419!2sar!4v1791496027782!5m2!1ses-419!2sar"
                    width="600"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </figure>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-primary text-[22px]"
                    >
                      schedule
                    </span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-title-md text-on-surface text-xl font-bold">
                      Horarios de Atención
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      <strong>Martes a Domingo:</strong> 09:0 a 19:00 hrs
                      continuo.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)] p-4 md:p-8">
                <div className="mb-space-lg">
                  <h2 className="font-headline-md text-on-surface text-xl font-bold tracking-tight">
                    Envíanos un Mensaje
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-5">
                    Completa el formulario y te responderemos en un plazo máximo
                    de 24 horas hábiles.
                  </p>
                </div>
                <form className="flex flex-col gap-space-md" id="contactForm">
                  <fieldset>
                    <div className="flex flex-col mb-5">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface flex mb-2"
                        htmlFor="fullName"
                      >
                        Nombre completo (Obligatorio)
                      </label>
                      <div className="relative">
                        <span aria-hidden="true" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                          person
                        </span>
                        <input
                          className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus-visible:outline-none focus-visible:border-vivero-badge-stock  transition-all font-body-md text-body-md placeholder:text-outline shadow-lg border-2 border-primary "
                          id="fullName"
                          placeholder="Ej. Camila Morales Silva"
                          required
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="flex flex-col mb-5">
                        <label
                          className="font-label-md text-label-md font-semibold text-on-surface flex mb-2" 
                          htmlFor="phone"
                        >
                          Teléfono celular (Obligatorio)                         
                        </label>
                        <div className="relative">
                          <span aria-hidden="true" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                            call
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus-visible:outline-none focus-visible:border-vivero-badge-stock  transition-all font-body-md text-body-md placeholder:text-outline shadow-lg border-2 border-primary"
                            id="phone"
                            placeholder="+54 9 341 600 5678"
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mb-5">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface flex mb-2"
                        htmlFor="subject"
                      >
                        Asunto del contacto (Obligatorio)
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-surface-container-lowest text-on-surface p-3 rounded-lg focus-visible:outline-none focus-visible:border-vivero-badge-stock  transition-all font-body-md text-body-md placeholder:text-outline shadow-lg border-2 border-primary appearance-none"
                          id="subject"
                          required
                        >
                          <option value="">
                            Motivo de tu consulta...
                          </option>
                          <option value="consulta">
                            Consulta de cuidado de especies
                          </option>
                          <option value="cotizacion">
                            Cotización para empresas y paisajistas
                          </option>
                          <option value="postventa">
                            Servicio de postventa
                          </option>
                        </select>
                        <span aria-hidden="true" className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">
                          expand_more
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col  mb-5">
                      <div className="flex items-center gap-5 mb-2">
                        <label
                          className="font-label-md text-label-md font-semibold text-on-surface"
                          htmlFor="message"
                        >
                          Mensaje detallado (Obligatorio)
                        </label>
                      </div>
                      <textarea
                        className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus-visible:outline-none focus-visible:border-vivero-badge-stock  transition-all font-body-md text-body-md placeholder:text-outline shadow-lg border-2 border-primary"
                        id="message"
                        maxLength={800}
                        placeholder="Escribe aquí las dimensiones de tu espacio, requerimientos de luz solar, especie de interés o detalles de tu proyecto paisajístico..."
                        required
                      ></textarea>
                    </div>

                    <div className="pt-space-xs">
                      <button
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container p-3 rounded-full font-label-md text-label-md font-bold transition-all shadow-md"
                        type="submit"
                      >
                        <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                          send
                        </span>
                        <span>Enviar Mensaje</span>
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </section>

          <section className="mt-space-xl bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-2xl shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)] p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-5">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold mb-5 text-[12px]">
                  Resolución Rápida
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight text-2xl">
                  Preguntas Frecuentes sobre Visitas y Envíos
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Información esencial sobre nuestra logística de traslado seguro
                y soporte posterior a la compra de ejemplares.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between p-4">
                <div>
                  <div className="flex items-center gap-5 mb-5 text-primary">
                    <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                      local_shipping
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Hacen despachos a Rosario o a Funes?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-5">
                    Sí, pero debemos establecer un monto mínimo y tener en cuenta de qué mercadería estamos tratando.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span>Plazos de 48 a 72 hrs hábiles</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-5 text-primary">
                    <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                      eco
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Cómo garantizan que las plantas lleguen sanas?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-5">
                    En cada caso tomamos los recaudos necesarios desde nuestra experiencia, seguimos un protocolo estricto donde cuidamos los bienes que enviamos, y sobretodo los ejemplares que son seres vivos, tenemos siempre en cuenta su integridad.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    shield
                  </span>
                  <span>Seguimos estrictos protocolos de seguridad y envío</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-5 text-primary">
                    <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                      group
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Se necesita agendamiento previo para visitas
                      particulares?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-5">
                    No requieres reserva para recorrer nuestras galerías y
                    sectores de venta libre. 
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    info
                  </span>
                  <span>Ingreso libre de Martes a Domingo</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between p-4">
                <div>
                  <div className="flex items-center gap-5 mb-5 text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      potted_plant
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Ofrecen servicio de asesoramiento?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-5">
                    Totalmente. Somos expertos en el ámbito de las especies vegetales y todo lo relacionado al uso de herramientas y decoración para tus espacios.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    volunteer_activism
                  </span>
                  <span>Servicio de asesoramiento profesional</span>
                </div>
              </div>
            </div>

            <div className="mt-space-xl p-space-lg bg-surface-container-high rounded-xl flex flex-col sm:flex-row items-center justify-between gap-5 p-4">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-[24px]">
                    support_agent
                  </span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    ¿Tienes una duda técnica más específica?
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conversa con nuestro equipo botánico en vivo y aclara
                    sustratos, podas o abonados.
                  </p>
                </div>
              </div>
              <a
                className="shrink-0 inline-flex items-center bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container px-space-lg py-space-xs rounded-full font-label-md text-label-md font-semibold transition-all p-2"
                href="https://wa.me/543415001111?text=Hola%20Vivero%20del%20Golf,%20necesito%20ayuda%20experta%20..."
              >
                <span>Consultar a un Experto</span>
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
