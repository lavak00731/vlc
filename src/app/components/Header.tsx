import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from './navs/DesktopNav';
import { MobileNav } from './navs/MobileNav';
import { QuotationsBtn } from './QuotationsBtn';
import { SearchComponent } from "./search/SearchComponent";
import { SearchMobileComponent } from "./search/SearchMobileComponent";

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
                <Image loading='eager' src="/logovivero.svg" width="135" height="58" alt="Inicio Vivero del Golf" className="rounded-sm shadow"/>
              </Link>
            </div>
            <DesktopNav />
            <SearchMobileComponent />
            <div className="hidden md:block">
              <SearchComponent/>
            </div>            
            <QuotationsBtn />
            <MobileNav />
          </div>
        </header>
  )
}
