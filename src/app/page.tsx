import Image from "next/image";
import Link from "next/link";
import { VideoComponent } from "./components/VideoComponent";

export default function Home() {
  return (
    <div className="flex flex-col w-full p-4">
      <section className="relative overflow-hidden pt-space-xl pb-space-3xl px-space-md lg:px-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-highest/80 p-2 px-space-md py-space-xxs rounded-full text-on-surface shadow-elevated mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">
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
            <div className="flex flex-wrap items-center gap-5 md:gap-0 mb-5">
              <Link
                className="group inline-flex items-center gap-space-xs px-8 py-3.5 rounded-full font-label-md text-label-md transition-all duration-300 shadow-sm hover:shadow-md bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container w-full justify-center gap-4"
                href="/productos"
              >
                <span className="text-inherit">Explorar Productos</span>
                <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-inherit">
                  arrow_forward
                </span>
              </Link>
              <a
                className="inline-flex items-center gap-space-xs bg-transparent text-primary hover:bg-primary/10 px-7 py-3 rounded-full font-label-md text-label-md transition-colors w-full  btn-secondary-text-color justify-center gap-4"
                href="https://wa.me/543412590671"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[20px] text-inherit">
                  assignment
                </span>
                <span className="text-inherit">Cotizar Directamente</span>
              </a>
            </div>
            <div className="flex gap-4 pt-space-lg w-full max-w-lg mb-5">
              <div className="flex flex-col bg-white gap-3 rounded-2xl p-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[24px] text-center">
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
              <div className="flex flex-col bg-white gap-3 rounded-2xl p-2">
                <span  aria-hidden="true" className="material-symbols-outlined text-primary text-[24px] text-center">
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
              <div className="flex flex-col bg-white gap-3 rounded-2xl p-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[24px] text-center">
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
          <div className="lg:col-span-5 mt-space-lg lg:mt-0 mb-5">
            <div className="relative w-full aspect-720/1280 rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest mb-5">              
               <VideoComponent width="720" height="1280" poster="/posterlisto.webp" src="/viverovideo.mp4" />
            </div> 
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-xl flex items-center gap-space-sm p-4 gap-4 w-full">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span aria-hidden="true" className="material-symbols-outlined text-[26px]">
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
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                trending_flat
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            <a
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col h-95"
              data-path="productos"
              href="#"
            >
              <div className="relative w-full h-[62%] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Dense indoor foliage with philodendrons, calatheas, caladiums, vibrant green patterns on velvety leaves, sunlit greenhouse setting with clay pots, warm rustic nursery atmosphere"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEf_8-B7TNyT20oDKcagjwaMxEIPkfoKk-3pqKVHSQxwUiZzX-Eq1PkEIBHN_uCWLv46twV2-lIedngrlphqsqVK_y4euzDsG05OYD1YS3izVWrOFJm5AR8dJtUcDheKM9IMy1T1qCWjjYDa9lUxtsr7C8b5KDz5FjHrzBQZkuI6xz9WClP3Jgn6i39ldlG68Em9skVREvnaQwAsftCOn5vbR0fSeMFHewoPFy_BLSpFWssg8pXD8p"
                />
                <span className="absolute top-space-sm right-space-sm bg-surface/90 backdrop-blur text-on-surface font-label-sm text-label-sm px-space-xs py-space-xxs rounded-full font-medium">
                  85+ Variedades
                </span>
              </div>
              <div className="p-space-md grow flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    Plantas Vivas
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs">
                    Interiores luminosos, sombra profunda y florales aromáticas.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Monstera, Ficus, Helechos...
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col h-95"
              data-path="productos"
              href="#"
            >
              <div className="relative w-full h-[62%] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Young native fruit trees and blooming ornamental garden shrubs neatly lined up in a sunny countryside nursery, soft golden sunlight casting organic leaf shadows on the warm earthen ground"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2t9qIl7161w_xAlXypBqMG49gf-4TkFhbMmBEPUah4aDM5HvhY6r0DoUSxPw_vLgALIOtD83QmrQGy8t52OKaqxVLyDwUJg1_SmqDUq8fssBawP8mintdpmh372ei38EI68D5NmCsWjAVEdypOVFFOQygxpD6zWPSl5N3LpAhTCNvY6xm6jHYkQd7IZZ0LV0SGecDeGxDf2U_SWt_bABhw07On7sfrahOZ3HKAh_A0_F-KOqHXI12"
                />
                <span className="absolute top-space-sm right-space-sm bg-surface/90 backdrop-blur text-on-surface font-label-sm text-label-sm px-space-xs py-space-xxs rounded-full font-medium">
                  Nativos &amp; Frutales
                </span>
              </div>
              <div className="p-space-md grow flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    Árboles y Arbustos
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs">
                    Especies nativas, cítricos frutales y arbustos perennes de
                    cerco.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Limones, Acacias, Liquidambar...
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col h-95"
              data-path="productos"
              href="#"
            >
              <div className="relative w-full h-[62%] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Handcrafted terracotta pots, artisanal glazed ceramic planters in olive green and ivory, stacked fiber-cement geometric pots in an outdoor garden showroom with sunlight and leafy shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkv4SzMlZuy9lCldXAitUiXwqtMSHtYQz6wBeCYzIoq-2zH1O01rDBOVjdFOq02aaw-4JLzHNHuQT_WIlMAd_GXN5TVfCxOOYfqmxkWTdWwLUFVkL0ETDTyGuA3mOJLaH2HBYjvWNJkUeKfAPHhoZ6VhzWrGT_ifJLehuD4zE63TIxQqawUPBB-HEpQSLY6jih76nNq--NM0B05z_-qdMTw0vwLq4rLEFq9wuw11k6njRd1XO2BJZa"
                />
                <span className="absolute top-space-sm right-space-sm bg-surface/90 backdrop-blur text-on-surface font-label-sm text-label-sm px-space-xs py-space-xxs rounded-full font-medium">
                  Alfarería Fina
                </span>
              </div>
              <div className="p-space-md grow flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    Macetas &amp; Contenedores
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs">
                    Cerámica esmaltada, terracota porosa tradicional y
                    fibrocemento moderno.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Varios tamaños y drenajes
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col md:flex-row h-auto md:h-64 lg:col-span-2"
              data-path="productos"
              href="#"
            >
              <div className="relative w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Brass and matte black metal watering cans, vintage forged steel pruning shears, coconut coir plant support stakes, gardening gloves resting on a weathered wooden workbench in a sunny potting shed"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mN9gN6dcd4A6c01VJ0BRaUJCSXeVYkz_NPHFAmIquRpN3S8XH0vjiCtf6163TeHMIWblSvKVWoIRMcs8qYxsQyz2bRcGWKAm5N146VOsdH1uP8YlA81dbmyp7K4qfeSdSXQ6fjt39XYVslEd3An0qJoRIZUfexvkGbZeDqhzhBCqk6GoEA3_bWLc-TtF3otXZDR-KQp23mksQUwt-Ko-1R2eTj4syykxXSuuXACCvzJsHLZQNeko"
                />
              </div>
              <div className="p-space-lg md:w-1/2 flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-space-xs py-space-xxs rounded-full font-semibold inline-block mb-space-xs">
                    Herramientas &amp; Estilo
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    Accesorios &amp; Herramientas
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xs">
                    Tijeras de poda japonesas, regaderas de precisión de latón,
                    tutores de musgo y medidores de humedad.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-sm mt-space-xs">
                  <span className="font-label-md text-label-md text-secondary font-semibold">
                    Equipamiento para amantes de las plantas
                  </span>
                  <span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col h-70 md:h-auto"
              data-path="productos"
              href="#"
            >
              <div className="relative w-full h-[55%] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Rich dark organic worm humus soil mixed with white perlite and pine bark chunks held in open burlap sacks, close up of healthy living nutrient soil ready for potting in daylight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgg4D3m-fU4Uapwxyc_SR0QmbkfGf671ZmGua9Zy1DEg4irK_KQRYRZzJp_575PhHwQ10FL7f9OCX5Z-0NFXpWp0iHn9PG35cbw-MNXw1ygmfvn-lV00FiyTq5OjSrSfRCuAdwIHAc5SWcNOIh9V9nuuMwcI0TwZhHv8q-NLhXxL9tBNpX-ytfGm_IrI4HGAlRsalBfZjEcTfiTWefML5hTnalBGmM3A4kk8zbB-afhaZ-WGuKBTuC"
                />
              </div>
              <div className="p-space-md grow flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    Sustratos &amp; Nutrición
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xxs">
                    Humus de lombriz, perlita, turba rubia y bioestimulantes
                    biológicos.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Mezclas listas y específicas
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="py-space-3xl px-space-md lg:px-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs text-secondary mb-space-xxs">
                <span className="material-symbols-outlined text-[20px]">
                  photo_camera
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  Comunidad Verde
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                Últimos Consejos en Instagram
              </h2>
              <p className="font-body-md text-body-md text-on-surface/75 mt-space-xxs">
                Aprende sobre cuidados, trasplantes y novedades semanales
                siguiendo a{" "}
                <a
                  className="text-secondary hover:underline font-semibold"
                  href="https://www.instagram.com/viverolacumbrecita/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @viverolacumbrecita
                </a>
              </p>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                aria-label="Anterior publicación"
                className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary shadow-sm flex items-center justify-center transition-colors"
                id="insta-prev"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chevron_left
                </span>
              </button>
              <div
                className="flex items-center gap-1.5 px-space-xs"
                id="insta-dots"
              >
                <span className="w-6 h-2 rounded-full bg-primary transition-all duration-300"></span>
                <span className="w-2 h-2 rounded-full bg-outline-variant transition-all duration-300"></span>
                <span className="w-2 h-2 rounded-full bg-outline-variant transition-all duration-300"></span>
              </div>
              <button
                aria-label="Siguiente publicación"
                className="w-11 h-11 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary shadow-sm flex items-center justify-center transition-colors"
                id="insta-next"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg transition-transform duration-500 ease-out"
              id="insta-track"
            >
              <article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="px-space-md py-space-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">
                      LC
                    </div>
                    <div className="leading-tight">
                      <a
                        className="font-label-md text-label-md font-bold text-on-surface hover:text-secondary"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        viverolacumbrecita
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface/60">
                        Invernadero Central
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    more_horiz
                  </span>
                </div>

                <div className="relative aspect-square w-full bg-surface-container overflow-hidden group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Close up of lush fenestrated Monstera deliciosa leaves covered in fresh dewdrops with soft morning botanical garden natural sunlight behind, vibrant rich green tones"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuArcH5ihAKt_XTa6haJDylsYgLqcg-IEswkukbytmprAghXuO5VSo0orxD2mGkL1h-xiuxeuGeF2GqtspFGwr7929vOVtBy_CVsO8xPkr7YLaQdB8jlSa58bILKrUw10Lqc4OI4s_wVmcgevX9YIm_Cx4PQy_A9EJqbMMSJjgPcPeDfkMe_aPeXVB6yRHBl_Rk_E5C86AmdqndXiBhlS_VdcTulw1qQLcbMHnWFJ_b8gLfRtb0HHWEZ"
                  />
                  <div className="absolute top-space-xs right-space-xs bg-on-surface/60 backdrop-blur text-surface rounded-full px-space-xs py-space-xxs flex items-center gap-1 font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      photo_library
                    </span>
                    <span>1/4</span>
                  </div>
                </div>
                <div className="p-space-md flex flex-col grow justify-between space-y-space-xs">
                  <div className="flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="like-btn flex items-center gap-1 text-on-surface hover:text-error transition-colors"
                        data-liked="false"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          favorite
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold likes-count">
                          342
                        </span>
                      </button>
                      <a
                        className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          chat_bubble
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold">
                          28
                        </span>
                      </a>
                      <a
                        className="text-on-surface hover:text-primary transition-colors"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          send
                        </span>
                      </a>
                    </div>
                    <button
                      className="bookmark-btn text-on-surface hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="space-y-space-xxs">
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      <span className="font-bold">viverolacumbrecita</span>{" "}
                      ¿Cómo saber si tu Monstera necesita trasplante a una
                      maceta mayor? Revisa las raíces aéreas y el drenaje
                      inferior. Te contamos nuestros 3 secretos en este carrusel
                      🌿✨
                    </p>
                    <div className="flex flex-wrap gap-1 text-secondary font-label-sm text-label-sm">
                      <span>#MonsteraTips</span>
                      <span>#JardineriaUrbana</span>
                      <span>#PlantasDeInterior</span>
                    </div>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-on-surface/60 font-body-sm text-body-sm">
                    <span>Hace 2 días • 14 de Mayo</span>
                    <a
                      className="text-secondary hover:underline font-semibold text-xs flex items-center gap-1"
                      href="https://www.instagram.com/viverolacumbrecita/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ver en IG
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              <article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="px-space-md py-space-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">
                      LC
                    </div>
                    <div className="leading-tight">
                      <a
                        className="font-label-md text-label-md font-bold text-on-surface hover:text-secondary"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        viverolacumbrecita
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface/60">
                        Taller de Alfarería
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    more_horiz
                  </span>
                </div>

                <div className="relative aspect-square w-full bg-surface-container overflow-hidden group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Row of newly fired warm terracotta and sand-colored ceramic planters bathed in afternoon sunlight with trailing string of pearls succulent hanging gently, artisanal pottery aesthetic"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEwhzPUrH_796Ck6nmUMmyV170qFq3GaLbAB7Yywqy5RRoSff-6CiSP8M2_uUmNbQhL2wKewpD06mt1A-2exOFr6lOkrFSDvhLtMhYymsTYaqDv4OHp4HSks795E1pYjuekhW8FpOL5yAbg37yW7bB21-CkUpHNLlRwULlfz9H5W0wEL5gUPJrlZtLWBPdAU7IGdQGRGh3rLbrsMpJVJ_x1nIJ1y4WbgwzOLPzCZmhUcAFvgaGUBaN"
                  />
                </div>

                <div className="p-space-md flex flex-col grow justify-between space-y-space-xs">
                  <div className="flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="like-btn flex items-center gap-1 text-on-surface hover:text-error transition-colors"
                        data-liked="false"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          favorite
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold likes-count">
                          519
                        </span>
                      </button>
                      <a
                        className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          chat_bubble
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold">
                          41
                        </span>
                      </a>
                      <a
                        className="text-on-surface hover:text-primary transition-colors"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          send
                        </span>
                      </a>
                    </div>
                    <button
                      className="bookmark-btn text-on-surface hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="space-y-space-xxs">
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      <span className="font-bold">viverolacumbrecita</span>{" "}
                      ¡Nueva partida artesanal! Llegaron las macetas de greda
                      cocida a leña. Su porosidad permite una oxigenación
                      radicular inigualable para tus suculentas y aráceas.
                    </p>
                    <div className="flex flex-wrap gap-1 text-secondary font-label-sm text-label-sm">
                      <span>#AlfareriaArtesanal</span>
                      <span>#MacetasGreda</span>
                      <span>#HechoAMano</span>
                    </div>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-on-surface/60 font-body-sm text-body-sm">
                    <span>Hace 4 días • 12 de Mayo</span>
                    <a
                      className="text-secondary hover:underline font-semibold text-xs flex items-center gap-1"
                      href="https://www.instagram.com/viverolacumbrecita/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ver en IG
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              <article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="px-space-md py-space-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">
                      LC
                    </div>
                    <div className="leading-tight">
                      <a
                        className="font-label-md text-label-md font-bold text-on-surface hover:text-secondary"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        viverolacumbrecita
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface/60">
                        Jardín Botánico Experimental
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    more_horiz
                  </span>
                </div>

                <div className="relative aspect-square w-full bg-surface-container overflow-hidden group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Gardener hands gently pruning a flowering native climbing jasmine with clean brass garden shears under soft dappled outdoor shade, close up of healthy blooming garden life"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqBXP2wCHYfBzzuILKQSKGVD-0RO-j4MNO9URm-Vcc44xsM9z-0CWCIPxQu01FJI12Dq_kQXRVtvOtHPT7gHOhzYFp_rOrJZppFNtavl8gfHEKD5TSZHMGe-L0wTrmGZSNrGo8f-4nX3yY7lKKVEx_7PPhwsRJQIsXwstJ2GVRp4pSqdKqk1u0xg71q9TX3H3qlm1C6E1Ev8wZDJTisR9ocJPeCbs43luqFHhq3NwzBdF6cqn6qmPs"
                  />
                </div>

                <div className="p-space-md flex flex-col grow justify-between space-y-space-xs">
                  <div className="flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-space-sm">
                      <button
                        className="like-btn flex items-center gap-1 text-on-surface hover:text-error transition-colors"
                        data-liked="false"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          favorite
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold likes-count">
                          628
                        </span>
                      </button>
                      <a
                        className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          chat_bubble
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold">
                          54
                        </span>
                      </a>
                      <a
                        className="text-on-surface hover:text-primary transition-colors"
                        href="https://www.instagram.com/viverolacumbrecita/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          send
                        </span>
                      </a>
                    </div>
                    <button
                      className="bookmark-btn text-on-surface hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="space-y-space-xxs">
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      <span className="font-bold">viverolacumbrecita</span> Guía
                      de poda otoñal: estimula brotes vigorosos antes de los
                      primeros fríos. Revisa nuestra bio para descargar la guía
                      gratuita de nutrición orgánica 🌸✂️
                    </p>
                    <div className="flex flex-wrap gap-1 text-secondary font-label-sm text-label-sm">
                      <span>#PodaConsciente</span>
                      <span>#BioNutricion</span>
                      <span>#JardineriaSostenible</span>
                    </div>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-on-surface/60 font-body-sm text-body-sm">
                    <span>Hace 1 semana • 9 de Mayo</span>
                    <a
                      className="text-secondary hover:underline font-semibold text-xs flex items-center gap-1"
                      href="https://www.instagram.com/viverolacumbrecita/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ver en IG
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container-high rounded-2xl gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  group_add
                </span>
              </span>
              <p className="font-body-md text-body-md text-on-surface">
                ¿Subiste una foto con tus plantas de La Cumbrecita? Usa el
                hashtag{" "}
                <strong className="text-primary">#VerdeCumbrecita</strong> y
                etiquétanos para aparecer en nuestra galería.
              </p>
            </div>
            <a
              className="shrink-0 inline-flex items-center gap-space-xs bg-surface-container-lowest text-secondary hover:text-on-surface px-space-md py-space-xs rounded-full font-label-md text-label-md shadow-sm transition-colors"
              href="https://www.instagram.com/viverolacumbrecita/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Seguir en Instagram</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-space-3xl px-space-md lg:px-space-xl bg-surface-container-highest/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-2xl">
            <div className="inline-flex items-center gap-space-xs bg-tertiary-fixed text-on-surface px-space-md py-space-xxs rounded-full mb-space-xs font-semibold">
              <span className="material-symbols-outlined text-primary text-[18px]">
                verified_user
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Simple, Transparente y Rápido
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
              ¿Cómo cotizar tu pedido online?
            </h2>
            <p className="font-body-md text-body-md text-on-surface/80 mt-space-xs">
              Comprar plantas requiere asesoramiento vivo. Prepara tu lista y
              nuestro equipo de botánicos verificará el stock y las condiciones
              óptimas de despacho para tus ejemplares.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl relative">
            <div className="relative bg-surface-container-lowest p-space-xl rounded-3xl shadow-md flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-space-md font-bold text-2xl font-headline-md">
                01
              </div>
              <div className="mb-space-xs">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  travel_explore
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">
                Explora y Elige
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80">
                Navega por las categorías de nuestro catálogo botánico. Revisa
                las fichas técnicas con requerimientos de luz solar, frecuencia
                de riego y dimensiones finales.
              </p>
              <div className="mt-space-md pt-space-md w-full">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider block">
                  Recomendación
                </span>
                <span className="font-body-sm text-body-sm text-on-surface/70">
                  Usa los filtros de sombra o sol según tu ambiente.
                </span>
              </div>
            </div>

            <div className="relative bg-surface-container-lowest p-space-xl rounded-3xl shadow-md flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-space-md font-bold text-2xl font-headline-md">
                02
              </div>
              <div className="mb-space-xs">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  add_shopping_cart
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">
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
            </div>

            <div className="relative bg-surface-container-lowest p-space-xl rounded-3xl shadow-md flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-space-md font-bold text-2xl font-headline-md">
                03
              </div>
              <div className="mb-space-xs">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  local_shipping
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">
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
            </div>
          </div>
          <div className="text-center mt-space-xl">
            <a
              className="inline-flex items-center gap-space-xs bg-primary text-on-primary hover:bg-primary-container px-8 py-3.5 rounded-full font-label-md text-label-md transition-all shadow-sm"
              data-path="productos"
              href="#"
            >
              <span>Comenzar mi cotización ahora</span>
              <span className="material-symbols-outlined text-[18px]">
                east
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-space-2xl px-space-md lg:px-space-xl">
        <div className="max-w-7xl mx-auto bg-linear-to-r from-primary via-primary to-primary-container text-on-primary rounded-3xl p-space-xl lg:p-space-2xl shadow-xl relative overflow-hidden">
          <svg
            className="absolute -right-16 -bottom-16 w-80 h-80 text-white/5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 200 200"
          >
            <path d="M42.5,31.2C56.8,17.4,77.7,11.5,96.6,18.3C115.5,25.2,132.5,44.9,130.6,65.3C128.8,85.6,108.1,106.6,87.7,117.8C67.3,129.1,47.2,130.6,33.5,120.3C19.8,110,12.5,87.9,15.7,66.7C18.9,45.5,28.2,45,42.5,31.2Z"></path>
          </svg>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="max-w-2xl text-center lg:text-left space-y-space-xs">
              <div className="inline-flex items-center gap-space-xs bg-white/15 backdrop-blur px-space-md py-space-xxs rounded-full text-on-primary">
                <span className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
                <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase">
                  Respuesta en menos de 30 minutos
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight">
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
                className="inline-flex items-center gap-space-sm bg-surface text-primary hover:bg-surface-container-high px-8 py-4 rounded-full font-label-md text-label-md font-bold shadow-lg hover:scale-105 transition-all duration-300"
                href="https://wa.me/56987654321?text=Hola%20Vivero%20La%20Cumbrecita,%20quisiera%20asesoramiento%20y%20cotizar%20algunas%20plantas"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[24px]">
                  chat
                </span>
                <span>Chatear por WhatsApp</span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs text-on-primary hover:underline font-label-md text-label-md px-4 py-2"
                data-path="contacto"
                href="#"
              >
                <span>Ver mapa y horarios</span>
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
