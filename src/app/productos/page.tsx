import React from "react";

const Productos = () => {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="max-w-7xl mx-auto w-full px-space-md lg:px-space-xl py-space-lg flex flex-col gap-space-xl pb-8">
        <div className="flex flex-col gap-space-xs">
          <nav
            aria-label="Miga de pan"
            className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest"
          >
            <a
              className="hover:text-on-surface transition-colors flex items-center gap-1"
              href="#"
            >
              <span className="material-symbols-outlined text-[14px]">
                home
              </span>{" "}
              Inicio
            </a>
            <span className="text-outline-variant select-none">/</span>
            <span aria-current="page" className="text-on-surface font-bold">
              Productos
            </span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mt-space-xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-surface text-label-sm font-label-sm mb-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  eco
                </span>
                <span>Colección Botánica • Temporada 2025</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight text-balance font-bold">
                Catálogo de Productos
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                Descubre nuestra selección cultivada en altura y adaptada al
                clima local. Selecciona los ejemplares que deseas incorporar a
                tu jardín o proyecto y añádelos a tu{" "}
                <strong className="text-on-surface font-semibold">
                  lista de cotización
                </strong>
                ; nuestro equipo técnico evaluará portes, stock en tiempo real y
                despacho directo a obra o domicilio.
              </p>
            </div>

            <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border-0 shrink-0">
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

        <div className="w-full bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-md">
          <div className="relative w-full lg:w-96">
            <span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">
              search
            </span>
            <input
              className="w-full pl-11 pr-space-md py-space-xs rounded-full bg-surface text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-outline"
              id="catalog-filter-input"
              placeholder="Buscar por categoría, especie o sustrato..."
              type="text"
            />
          </div>

          <div className="flex flex-wrap items-center gap-space-xs w-full lg:w-auto justify-start lg:justify-end">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider hidden sm:inline mr-space-xxs">
              Filtrar:
            </span>
            <button
              className="filter-chip active bg-primary text-on-primary px-space-sm py-1.5 rounded-full font-label-sm text-label-sm transition-all"
              data-category="all"
              type="button"
            >
              Todos (5)
            </button>
            <button
              className="filter-chip bg-surface-container-high text-on-surface hover:bg-tertiary-fixed px-space-sm py-1.5 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-1"
              data-category="plantas"
              type="button"
            >
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>{" "}
              Plantas
            </button>
            <button
              className="filter-chip bg-surface-container-high text-on-surface hover:bg-tertiary-fixed px-space-sm py-1.5 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-1"
              data-category="arboles"
              type="button"
            >
              <span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span>{" "}
              Árboles
            </button>
            <button
              className="filter-chip bg-surface-container-high text-on-surface hover:bg-tertiary-fixed px-space-sm py-1.5 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-1"
              data-category="macetas"
              type="button"
            >
              <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>{" "}
              Macetas
            </button>
            <button
              className="filter-chip bg-surface-container-high text-on-surface hover:bg-tertiary-fixed px-space-sm py-1.5 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-1"
              data-category="insumos"
              type="button"
            >
              <span className="w-2 h-2 rounded-full bg-surface-tint inline-block"></span>{" "}
              Sustratos &amp; Herramientas
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg"
          id="categories-grid"
        >
          <article
            className="category-card lg:col-span-7 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            data-tags="plantas interior exterior monstera ficus helecho flores orquideas"
          >
            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Close-up of vibrant lush tropical conservatory plants featuring oversized fenestrated Monstera Deliciosa, velvety Philodendron verrucosum, and cascading ferns illuminated by diffused morning sunlight in a terracotta boutique nursery greenhouse, rich emerald and deep sage tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC72uVFerBSfpq8EJDoeEGGAVuvR6U6ykuOp_8Oyvcu9d40pK83sA087Pis3iKN8Q6tTgb4XNriPHgPK1rftL-y8Xz1BtRvvb67Q2clOZNsvMaY7J9u9m1B5eFSYaGTnWEs7NqAg2-gpfzIYJlfvDluNQYAwR-yaUgh8vTwZ7K5jW-i_M-6aBYYpaLYAsbKmluRQ3SfFnwgKhJlAznqILXbbgz-NnCKddy_gnpvbk4SgcXldHxwSQy4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>

              <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs">
                <span className="bg-primary text-on-primary px-space-sm py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    psychiatry
                  </span>{" "}
                  +120 Variedades
                </span>
                <span className="bg-surface/90 backdrop-blur-md text-on-surface px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm">
                  Interior &amp; Exterior
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md text-surface">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-1 font-semibold">
                  Botánica Ornamental
                </p>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary leading-tight">
                  Plantas de Follaje y Flor
                </h2>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Especies aclimatadas bajo estricto control agroecológico.
                  Desde colecciones de{" "}
                  <em className="font-headline-sm italic text-on-surface">
                    Aráceas
                  </em>{" "}
                  para interiores luminosos hasta herbáceas perennes y gramíneas
                  rústicas preparadas para jardines de bajo consumo hídrico.
                </p>

                <div className="flex flex-wrap gap-space-xs mt-space-xs">
                  <span className="px-space-xs py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Monsteras &amp; Filodendros
                  </span>
                  <span className="px-space-xs py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Ficus Lyrata &amp; Elastica
                  </span>
                  <span className="px-space-xs py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Helechos Nativos
                  </span>
                  <span className="px-space-xs py-1 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Suculentas Raras
                  </span>
                </div>
              </div>
              <div className="pt-space-sm flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[20px]">
                    verified
                  </span>
                  <span>Garantía de adaptación radicular</span>
                </div>
                <a
                  className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm"
                  href="#"
                >
                  <span>Ver Plantas</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </article>

          <article
            className="category-card lg:col-span-5 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            data-tags="arboles arbustos cipres cerco vivo liquidambar frutales nativos limonero"
          >
            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Majestic young liquidambar tree with autumn golden-amber leaves standing beside tall slender Italian cypress trees in a mountain nursery field in La Cumbrecita, warm golden-hour lighting, crisp rustic atmosphere."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYJ63FCma8jVAvpv2t_e2Vg0ZMpei4ylxNDh294VP_2CTdTl5kceGElDvPaw7m1wJMyOY_gs3VXw9jdj3I_s_Yj5dvt5iMvIcbp9nGOEV3HbzwvMsqtlQ1mq_hTfXOjCdYTEUo7almnPtWjGDlylSPRuOL22g2xokpyBII3TbnIhKwQgjVNWH-gId5Zzu9-W4IfxNhyufGrvZknnqcMv-AoFRRMuSkBV4S6XE0iuo1B8_LCgD9Il_Z"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>
              <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs">
                <span className="bg-tertiary text-on-tertiary px-space-sm py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    forest
                  </span>{" "}
                  Paisajismo &amp; Sombra
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md text-surface">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-1 font-semibold">
                  Estructura &amp; Cortavientos
                </p>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary leading-tight">
                  Árboles y Arbustos
                </h2>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Ejemplares rústicos de raíz protegida listos para plantación
                  definitiva. Disponibles en formatos desde contenedores de 10L
                  hasta ejemplares añosos de gran porte para proyectos de
                  arquitectura y cortinas vegetales.
                </p>
                <ul className="grid grid-cols-2 gap-y-1 font-body-sm text-body-sm text-on-surface mt-space-xs">
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      check_circle
                    </span>{" "}
                    Árboles Frutales Injertados
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      check_circle
                    </span>{" "}
                    Cipreses Sempervirens
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      check_circle
                    </span>{" "}
                    Cercos Vivos (Crataegus/Ligustro)
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      check_circle
                    </span>{" "}
                    Liquidámbar &amp; Robles
                  </li>
                </ul>
              </div>
              <div className="pt-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Portes: 1.5m a 4.5m
                </span>
                <a
                  className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-xs rounded-full font-label-md text-label-md transition-all shadow-sm"
                  href="#"
                >
                  <span>Ver Árboles y Arbustos</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </article>

          <article
            className="category-card lg:col-span-4 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            data-tags="macetas jardineras greda artesanal terracota plastico reciclado vasijas"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Artisanal clay pots and handmade porous terracotta planters lined in soft light, authentic earthy reddish-brown tones, tactile ceramic textures and modern flared geometric lightweight recycled polymer planters, studio composition."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuG5igVkjP5MWFjoxa0QkHH7wA7hMKjKnDurM2VYPKw8-TpjQDxRohybZ8ktCDyk4k0JLzpnzKkhP39huKbvx4D_xRKV3Nb6LlYiWuvsQMfvi5pITPnYD50sT7bUXUOJFQSPUt6dPwlFlCaes0iUx7nGajNiNCf3KMXPbf3lOIzpsTXhtYh3FOq2B3ic6jkIe8_yoCB2ZwpoFdut5VOpDronVWg22v7ivefSCG9qQ8eTbrrBznxUsW"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
              <div className="absolute top-space-md left-space-md">
                <span className="bg-surface/90 backdrop-blur-md text-on-surface px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm">
                  Alfarería &amp; Polímeros
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md">
                <h2 className="font-headline-md text-headline-md font-bold text-on-primary">
                  Macetas &amp; Contenedores
                </h2>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Recipientes diseñados para favorecer la oxigenación del cepellón
                y evitar la asfixia radicular:
              </p>
              <div className="flex flex-col gap-space-xxs font-body-sm text-body-sm text-on-surface">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface">
                  <span className="font-semibold">
                    Greda Tradicional Pomaire
                  </span>
                  <span className="text-secondary font-label-sm">
                    Porosidad 100%
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface">
                  <span className="font-semibold">
                    Terracota Cocida Italiana
                  </span>
                  <span className="text-secondary font-label-sm">
                    Resistente a heladas
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface">
                  <span className="font-semibold">Plástico Reciclado HDPE</span>
                  <span className="text-secondary font-label-sm">
                    Ultra livianas
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary w-full py-space-xs rounded-full font-label-md text-label-md transition-all mt-space-xs"
                href="#"
              >
                <span>Ver Macetas</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>

          <article
            className="category-card lg:col-span-4 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            data-tags="accesorios herramientas palas tijeras felco guantes tutores musgo regaderas"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Professional gardener tools arranged neatly: Swiss Felco pruning shears with red handles, brass and antique zinc watering can, natural sphagnum moss poles, forged stainless steel trowel, and sturdy leather gardening gloves."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV3F-yGMIfjtpbamB50mA_95vB_mdluN9a1lAyCDGYr9PYutByAJYuF1YIGPj_V3HcaaoOsiWIxU6Jz3XwS6I-C5YVipB1pqtTpplKr8CDKOMLfkyTMGVMoYw2tbv9KmdfT95NmlgMTqGcVL2hb_8uyAhlrD0tMD8G-clu6VjVNfUYQ48SeOpXA7A0wy27H9FLuSR1m5YOBo39785j70AeYpYtu44qT3Yfunf4yBjzaYG7dzKrHGSN"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
              <div className="absolute top-space-md left-space-md">
                <span className="bg-surface/90 backdrop-blur-md text-on-surface px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm">
                  Grado Profesional
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md">
                <h2 className="font-headline-md text-headline-md font-bold text-on-primary">
                  Accesorios y Herramientas
                </h2>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Instrumentos ergonómicos y duraderos forjados para el
                mantenimiento integral del jardín y colecciones de interior:
              </p>
              <div className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface">
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    content_cut
                  </span>
                  <span className="font-semibold text-xs">Tijeras Felco ®</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    water_drop
                  </span>
                  <span className="font-semibold text-xs">Regaderas Zinc</span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    line_style
                  </span>
                  <span className="font-semibold text-xs">
                    Tutores de Musgo
                  </span>
                </div>
                <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    front_hand
                  </span>
                  <span className="font-semibold text-xs">Guantes Cuero</span>
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary w-full py-space-xs rounded-full font-label-md text-label-md transition-all mt-space-xs"
                href="#"
              >
                <span>Ver Accesorios</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>

          <article
            className="category-card lg:col-span-4 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            data-tags="fertilizantes sustratos compost organico vermiculita bioestimulantes perlita corteza"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Rich dark organic compost mixed with perlite, vermiculite, and pine bark chunks held in open burlap sack, glass dropper bottle of natural bio-stimulant alongside organic fertilizer pellets on rustic wooden worktable."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaYN13TyxYEW4TKoQM0BeRGbeaTyZuMH50v0HKCKd-nydD0AliRzR6w8fSaD-8AmNwFaTxc5LTtTWc8Yfoc1SmS3o1mPP0OMgHXv8eOTK0FNF8bB3vUOEnhv7pIOvWXFkxiop7SN4sUHuxG_rVGjQkoJqVErgK6S7z6cSr-6Lfc64klleewxckFjTs7J5dPXFy48sBSe5MNynshFPDDaSs3SytjTatYe16M1UmV5AJLcpnh2BNA_il"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
              <div className="absolute top-space-md left-space-md">
                <span className="bg-surface/90 backdrop-blur-md text-on-surface px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm">
                  Nutrición Viva
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md">
                <h2 className="font-headline-md text-headline-md font-bold text-on-primary">
                  Fertilizantes &amp; Sustratos
                </h2>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Mezclas activas elaboradas en nuestro propio predio para
                replicar los horizontes biológicos del suelo natural:
              </p>
              <div className="flex flex-col gap-space-xxs font-body-sm text-body-sm text-on-surface">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface">
                  <span className="font-semibold">Compost Orgánico Maduro</span>
                  <span className="text-secondary font-label-sm">
                    Tamizado fino
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface">
                  <span className="font-semibold">
                    Vermiculita &amp; Perlita Grado 3
                  </span>
                  <span className="text-secondary font-label-sm">
                    Drenaje óptimo
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface">
                  <span className="font-semibold">
                    Bioestimulantes de Algas
                  </span>
                  <span className="text-secondary font-label-sm">
                    Extracto frío
                  </span>
                </div>
              </div>
              <a
                className="inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary w-full py-space-xs rounded-full font-label-md text-label-md transition-all mt-space-xs"
                href="#"
              >
                <span>Ver Fertilizantes</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        </div>

        <section className="w-full bg-surface-container rounded-3xl p-space-lg lg:p-space-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                Proceso Transparente
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
                ¿Cómo funciona nuestra cotización en línea?
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Los seres vivos no son productos en serie: verificamos vigor
              radicular, tamaño real disponible y logística de transporte antes
              de confirmar tu pedido.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-2xl flex flex-col gap-space-xs shadow-sm">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center font-headline-sm">
                1
              </div>
              <h4 className="font-title-md text-title-md text-on-surface font-bold">
                Elige tus ejemplares
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Explora las categorías y presiona "Añadir a Cotización"
                indicando cantidades y tamaños aproximados.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl flex flex-col gap-space-xs shadow-sm">
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
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl flex flex-col gap-space-xs shadow-sm">
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
            </div>
          </div>
        </section>

        <section className="w-full bg-primary text-on-primary rounded-3xl overflow-hidden shadow-xl p-space-lg lg:p-space-2xl relative">
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
