import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from './navs/DesktopNav';
import { MobileNav } from './navs/MobileNav';
import { QuotationsBtn } from './QuotationsBtn';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)] bg-vivero-badge-stock">
          <div className="relative p-4 md:px-8 md:py-6 max-w-7xl mx-auto px-space-md lg:px-space-xl flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm shrink-0">              
              <Link
                className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold hover:text-primary transition-colors"
                data-path="inicio"
                href="/"
              >
                <Image loading='eager' src="/logovivero.svg" width="135" height="32" alt="Inicio La Cumbrecita "/>
              </Link>
            </div>
            <DesktopNav />
            
            <div className="hidden relative xl:block w-72 group">
              <div className="p-2 flex items-center bg-surface-container-lowest rounded-full px-space-sm py-space-xxs shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span aria-hidden="true" className="material-symbols-outlined text-outline text-[18px] mr-space-xxs">
                  search
                </span>
                <input
                  className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none placeholder:text-outline"
                  placeholder="Buscar plantas, macetas..."
                  type="text"
                />
              </div>

            </div>
            <QuotationsBtn />
            <MobileNav />
          </div>
        </header>
  )
}
