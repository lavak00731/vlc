"use client";
import { useState } from 'react';

export const ContactForm = () => {
     const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const WHATSAPP_NUMBER = '5493415001111'; // Reemplaza con tu número (incluye código de país, sin el signo +)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Estructurar el mensaje de texto de forma legible
    const textoMensaje = `*Nuevo contacto desde la Web*\n\n` +
                         `*Nombre:* ${formData.nombre}\n` +
                         `*Telefono:* ${formData.telefono}\n` +
                         `*Asunto:* ${formData.asunto}\n` +
                         `*Mensaje:* ${formData.mensaje}`;

    // 2. Codificar los caracteres especiales para la URL
    const mensajeCodificado = encodeURIComponent(textoMensaje);

    // 3. Crear la URL final de WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;

    // 4. Redirigir al usuario en una nueva pestaña
    window.open(whatsappUrl, '_blank');

    setFormData({
        nombre: "",
        telefono: "",
        asunto: "",
        mensaje: "",
        });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-md" id="contactForm">
      <fieldset>
        <div className="flex flex-col mb-5">
          <label
            className="font-label-md text-label-md font-semibold text-on-surface flex mb-2"
            htmlFor="fullName"
          >
            Nombre completo (Obligatorio)
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
            >
              person
            </span>
            <input
              className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus-visible:outline-none focus-visible:border-vivero-badge-stock  transition-all font-body-md text-body-md placeholder:text-outline shadow-lg border-2 border-primary "
              id="fullName"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
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
              <span
                aria-hidden="true"
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
              >
                call
              </span>
              <input
                className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-space-md py-3 rounded-lg focus-visible:outline-none focus-visible:border-vivero-badge-stock  transition-all font-body-md text-body-md placeholder:text-outline shadow-lg border-2 border-primary"
                id="phone"
                value={formData.telefono}
                onChange={handleChange}
                name="telefono"
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
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            >
              <option value="">Motivo de tu consulta...</option>
              <option value="consulta">Consulta de cuidado de especies</option>
              <option value="cotizacion">
                Cotización para empresas y paisajistas
              </option>
              <option value="postventa">Servicio de postventa</option>
            </select>
            <span
              aria-hidden="true"
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]"
            >
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
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe aquí las dimensiones de tu espacio, requerimientos de luz solar, especie de interés o detalles de tu proyecto paisajístico..."
            required
          ></textarea>
        </div>

        <div className="pt-space-xs">
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-visible:bg-primary-container p-3 rounded-full font-label-md text-label-md font-bold transition-all shadow-md"
            type="submit"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px]"
            >
              send
            </span>
            <span>Enviar Mensaje</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
};
