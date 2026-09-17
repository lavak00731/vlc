"use client";
import Link from "next/link";
import { useState } from "react";
import NavItems from "@/app/utils/NavItems";
import { IsNavigationActive } from "@/app/utils/isNavigationActive";


export const MobileNav = () => {
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const handleClick = () => {
        setBtnStatus(!btnStatus)
    }
  return (
    <>
        <button onClick={handleClick} type="button" aria-expanded={btnStatus} className="p-1 flex flex-col align-middle bg-transparent rounded-sm border-outline ">
            <span className="material-symbols-outlined text-primary text-[32px]" hidden={btnStatus ? true : false}>menu</span>
            <span className="material-symbols-outlined text-primary text-[32px] transition-colors" hidden={btnStatus ? false : true}>close</span>
        </button>
        <nav className="absolute top-[64px] left-0 items-center gap-space-lg shadow-elevated" hidden={btnStatus ? false : true}>
            <ul className="flex flex-col list-none gap-5">
                {NavItems.map((item) => {
                const active = IsNavigationActive(item.url);
                return (
                    <li key={item.url}>
                    <Link
                        href={item.url}
                        aria-current={active ? "page" : undefined}
                        className={
                        active
                            ? "font-bold text-primary transition-colors"
                            : "font-label-md text-on-surface-variant transition-colors hover:text-on-surface"
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
