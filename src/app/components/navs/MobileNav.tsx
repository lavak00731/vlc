"use client";
import Link from "next/link";
import { useState, useId } from "react";
import NavItems from "@/app/utils/NavItems";
import { IsNavigationActive } from "@/app/utils/isNavigationActive";



export const MobileNav = () => {
    const id = useId();
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const handleClick = () => {
        setBtnStatus(!btnStatus)
    }
  return (
    <>
        <button onClick={handleClick} type="button" aria-expanded={btnStatus} aria-controls={id} className="p-1 flex flex-col align-middle bg-transparent rounded-sm border-outline md:hidden">
            <span aria-hidden="true" className="material-symbols-outlined text-primary text-[32px]" hidden={btnStatus ? true : false}>menu</span>
            <span aria-hidden="true" className="material-symbols-outlined text-primary text-[32px] transition-colors" hidden={btnStatus ? false : true}>close</span>
            <span className="sr-only">Menu</span>
        </button>
        <nav id={id} className="absolute top-16 left-0 items-center gap-space-lg shadow-elevated w-full bg-vivero-badge-stock md:hidden" hidden={btnStatus ? false : true}>
            <ul className="flex flex-col list-none gap-5 p-4">
                {NavItems.map((item) => {
                const active = IsNavigationActive(item.url);
                return (
                    <li className="py-3" key={item.url}>
                    <Link
                        href={item.url}
                        aria-current={active ? "page" : undefined}
                        className={
                        active
                            ? "font-bold text-primary transition-colors w-full text-center block p-2"
                            : "font-label-md text-on-surface-variant transition-colors hover:text-on-surface focus-visible:text-on-surface w-full text-center block p-2"
                        }
                    >
                        {item.name}
                    </Link>
                    </li>
                );
                })}
            </ul>
        </nav>
    </>    
  )
}
