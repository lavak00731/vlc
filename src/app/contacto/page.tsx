import React from "react";
import { Breadcrumb } from "../components/navs/Breadcrumb";
import { Badge } from "../components/Badge";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full  py-12  bg-surface-dim/40">
      <div className="relative max-w-7xl w-full px-4 md:px-8 mx-auto overflow-hidden">
        <div className=" mx-auto px-space-md lg:px-space-xl pt-space-xl">
          <Breadcrumb />
          <section className="max-w-3xl mb-space-2xl">
            <Badge icon={'spa'} text={"Atención Botánica y Asesorías"}/>
            <h1 className="font-display-hero text-4xl lg:text-7xl text-on-surface tracking-tight font-bold mb-5">
              Ponte en Contacto con Vivero La Cumbrecita
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-5">
              Estamos aquí para guiarte en cada etapa: resuelve tus inquietudes
              de cultivo, cotiza intervenciones de paisajismo para tu
              hogar o empresa, o coordina una visita guiada por nuestros
              invernaderos.
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-space-3xl">
            <aside className="lg:col-span-5 flex flex-col">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(45,55,40,0.12)] transition-shadow p-4 md:p-8">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span aria-hidden="true" className="material-symbols-outlined text-primary text-[26px]">
                      chat
                    </span>
                  </div>
                  <span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-space-xs py-space-xxs rounded-full font-medium">
                    Respuesta inmediata
                  </span>
                </div>
                <h2 className="font-title-md text-2xl text-on-surface font-bold mb-5">
                  WhatsApp Directo
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  Chatea en tiempo real con uno de nuestros horticultores para
                  consultas rápidas sobre disponibilidad de especies o salud
                  foliar.
                </p>
                
                <a
                  className="w-full inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary hover:bg-primary-container px-space-lg py-space-sm rounded-full font-label-md text-label-md font-semibold transition-all shadow-md group"
                  href="https://wa.me/56987654321"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                    forum
                  </span>
                  <span>Chatear por WhatsApp</span>
                </a>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)] flex flex-col gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-bold">
                      Dirección y Acceso
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface mt-space-xxs font-medium">
                      Camino Los Coihues 420, La Cumbrecita
                    </p>
                    <div className="mt-space-xs inline-flex items-center gap-space-xxs bg-surface-container-high px-space-xs py-1 rounded text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        local_parking
                      </span>
                      <span>
                        Estacionamiento privado y gratuito para clientes
                        (capacidad 35 vehículos).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm pt-space-xs">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      schedule
                    </span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-bold">
                      Horarios de Atención
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xxs">
                      <strong>Martes a Domingo:</strong> 09:30 a 19:00 hrs
                      continuo.
                      <br />
                      <span className="text-on-surface-variant/80">
                        Lunes cerrado por mantenimiento agronómico y
                        aclimatación de plántulas.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="relative w-full rounded-lg overflow-hidden mt-space-xs shadow-inner">
                  <div
                    className="w-full h-56 bg-cover bg-center"
                    data-location="Camino Los Coihues 420, La Cumbrecita, Chile"
                  ></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-sm p-space-xs rounded-lg flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        directions_car
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        A 12 min de la plaza central
                      </span>
                    </div>
                    <a
                      className="font-label-sm text-label-sm text-secondary hover:underline font-semibold flex items-center gap-0.5"
                      href="https://maps.google.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ver ruta GPS
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-tertiary-fixed/60 rounded-xl p-space-md flex items-center gap-space-md shadow-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    psychology_alt
                  </span>
                </div>
                <div>
                  <h5 className="font-title-md text-title-md font-bold text-on-surface">
                    ¿Dudas con una planta enferma?
                  </h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Puedes traer una muestra de hoja protegida en bolsa
                    hermética para diagnóstico presencial sin costo.
                  </p>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)]">
                <div className="mb-space-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold block mb-space-xxs">
                    Envío de Solicitudes
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                    Envíanos un Mensaje
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Completa el formulario y te responderemos en un plazo máximo
                    de 24 horas hábiles.
                  </p>
                </div>
                <form className="flex flex-col gap-space-md" id="contactForm">
                  <div className="flex flex-col gap-space-xxs">
                    <label
                      className="font-label-md text-label-md font-semibold text-on-surface flex justify-between"
                      htmlFor="fullName"
                    >
                      <span>Nombre completo</span>
                      <span className="text-on-surface-variant font-normal text-body-sm">
                        Obligatorio
                      </span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        person
                      </span>
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all font-body-md text-body-md placeholder:text-outline shadow-inner"
                        id="fullName"
                        placeholder="Ej. Camila Morales Silva"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xxs">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="email"
                      >
                        Correo electrónico
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                          mail
                        </span>
                        <input
                          className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all font-body-md text-body-md placeholder:text-outline shadow-inner"
                          id="email"
                          placeholder="tu@correo.cl"
                          required
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xxs">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="phone"
                      >
                        Teléfono celular
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                          call
                        </span>
                        <input
                          className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all font-body-md text-body-md placeholder:text-outline shadow-inner"
                          id="phone"
                          placeholder="+56 9 1234 5678"
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-space-xxs">
                    <label
                      className="font-label-md text-label-md font-semibold text-on-surface"
                      htmlFor="subject"
                    >
                      Asunto del contacto
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-surface-container-lowest text-on-surface pl-space-md pr-10 py-3 rounded-lg focus:outline-none focus:bg-surface-container-low transition-all font-body-md text-body-md appearance-none cursor-pointer shadow-inner"
                        id="subject"
                        required
                      >
                        <option disabled selected value="">
                          Selecciona el motivo de tu consulta...
                        </option>
                        <option value="botanica">
                          Consulta botánica o cuidado de especies
                        </option>
                        <option value="cotizacion">
                          Cotización para empresas y paisajistas
                        </option>
                        <option value="visita">
                          Visita grupal o educativa al vivero
                        </option>
                        <option value="postventa">
                          Reclamos, garantías o servicio de postventa
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-space-xxs">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="message"
                      >
                        Mensaje detallado
                      </label>
                      <span
                        className="font-body-sm text-body-sm text-on-surface-variant"
                        id="charCounter"
                      >
                        0 / 800
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-surface-container-lowest text-on-surface p-space-md rounded-lg focus:outline-none focus:bg-surface-container-low transition-all font-body-md text-body-md placeholder:text-outline resize-none shadow-inner"
                      id="message"
                      maxLength={800}
                     
                      placeholder="Escribe aquí las dimensiones de tu espacio, requerimientos de luz solar, especie de interés o detalles de tu proyecto paisajístico..."
                      required
                    
                    ></textarea>
                  </div>

                  <div className="pt-space-xxs">
                    <label className="flex items-start gap-space-xs cursor-pointer select-none">
                      <input
                        className="mt-1 w-4 h-4 rounded text-primary focus:ring-secondary accent-primary cursor-pointer"
                        id="privacyConsent"
                        required
                        type="checkbox"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        He leído y acepto la política de manejo biológico y el{" "}
                        <a
                          className="text-secondary underline hover:text-on-surface transition-colors"
                          href="#"
                        >
                          aviso de privacidad
                        </a>{" "}
                        para el tratamiento de mis datos de contacto.
                      </span>
                    </label>
                  </div>

                  <div
                    className="hidden rounded-lg p-space-sm bg-error-container/30 text-error flex items-start gap-space-xs"
                    id="formErrorBanner"
                  >
                    <span className="material-symbols-outlined text-[20px] shrink-0 text-error">
                      error
                    </span>
                    <div className="text-body-sm font-body-sm leading-snug">
                      <strong className="font-semibold">Atención:</strong> Por
                      favor completa todos los campos obligatorios antes de
                      continuar el envío.
                    </div>
                  </div>

                  <div
                    className="hidden rounded-lg p-space-sm bg-tertiary-fixed text-on-tertiary-fixed flex items-start gap-space-xs"
                    id="formSuccessBanner"
                  >
                    <span className="material-symbols-outlined text-[20px] shrink-0 text-primary">
                      check_circle
                    </span>
                    <div className="text-body-sm font-body-sm leading-snug">
                      <strong className="font-semibold">
                        ¡Mensaje enviado con éxito!
                      </strong>{" "}
                      Un botánico especialista te responderá a la brevedad.
                    </div>
                  </div>

                  <div className="pt-space-xs">
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary hover:bg-primary-container active:bg-on-primary-fixed-variant px-space-xl py-3 rounded-full font-label-md text-label-md font-bold transition-all shadow-md"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                      <span>Enviar Mensaje</span>
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </section>

          <section className="mt-space-xl bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-2xl shadow-[0_4px_20px_-4px_rgba(45,55,40,0.08)]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold block mb-space-xxs">
                  Resolución Rápida
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                  Preguntas Frecuentes sobre Visitas y Envíos
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Información esencial sobre nuestra logística de traslado seguro
                y soporte posterior a la compra de ejemplares.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      local_shipping
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Hacen despachos a regiones de todo el país?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Sí, enviamos a todas las regiones continentales. Para
                    especies de follaje sensible o arbolado de gran porte (más
                    de 1.80m), utilizamos una flota climatizada propia para la
                    zona central y convenios de transporte especializado con
                    furgones de control térmico hacia el norte y sur.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-space-xxs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span>Plazos de 48 a 72 hrs hábiles</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      eco
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Cómo garantizan que las plantas lleguen sanas?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Cada planta pasa por un riguroso riego de hidratación
                    profunda e hidratación de cepellón 24 horas antes del viaje.
                    Su contenedor es embalado con mallas de fibra biodegradable
                    y cajas respirables anti-vuelco con soportes internos para
                    evitar el quiebre foliar y el estrés hídrico.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-space-xxs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    shield
                  </span>
                  <span>Garantía biológica de reposición de 15 días</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      group
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Se necesita agendamiento previo para visitas
                      particulares?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    No requieres reserva para recorrer nuestras galerías y
                    sectores de venta libre. Sin embargo, para grupos de más de
                    8 personas o asesorías de paisajismo en terreno con un
                    arquitecto botánico, recomendamos escribirnos con 48 hrs de
                    antelación.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-space-xxs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    info
                  </span>
                  <span>Ingreso libre de Martes a Domingo</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      potted_plant
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      ¿Ofrecen servicio de trasplante con macetas de greda?
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Totalmente. Si compras tanto la planta como su maceta o
                    jardinera artesanal en nuestro vivero, realizamos el montaje
                    biológico con nuestro sustrato poroso enriquecido con
                    micorrizas sin costo adicional antes de retirar o despachar.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center gap-space-xxs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    volunteer_activism
                  </span>
                  <span>Servicio de armado artesanal incluido</span>
                </div>
              </div>
            </div>

            <div className="mt-space-xl p-space-lg bg-surface-container-high rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[24px]">
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
                className="shrink-0 inline-flex items-center gap-space-xs bg-primary text-on-primary hover:bg-primary-container px-space-lg py-space-xs rounded-full font-label-md text-label-md font-semibold transition-all"
                href="https://wa.me/56987654321"
              >
                <span>Consultar a un Experto</span>
                <span className="material-symbols-outlined text-[18px]">
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
