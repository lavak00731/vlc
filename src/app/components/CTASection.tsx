import React from 'react'

export const CTASection = ({icon, badgetext, title, content}:{icon:string, badgetext:string, title:string, content:string}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-xl relative overflow-hidden">
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
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[14px] mr-2"
                  >
                    { icon }
                  </span>
                  <span className="font-label-sm text-[14px] font-semibold tracking-wider uppercase">
                    { badgetext }
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-white! tracking-tight mb-5">
                  { title }
                </h2>
                <p className="font-body-md text-body-md text-on-primary/85 max-w-xl">
                  { content }
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0">
                <a
                  className="inline-flex gap-2 items-center gap-space-sm bg-surface text-primary! hover:bg-surface-container-high px-8 py-4 rounded-full font-label-md text-label-md font-bold shadow-lg hover:scale-105 transition-all duration-300"
                  href="https://wa.me/543415001111?text=Hola%20Vivero%20La%20Cumbrecita,%20quisiera%20asesoramiento%20y%20cotizar%20algunas%20plantas"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[24px]"
                  >
                    chat
                  </span>
                  <span>Chatear por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}
