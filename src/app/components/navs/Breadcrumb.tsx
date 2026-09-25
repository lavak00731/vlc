
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
     const pathname = usePathname();

  // Split path into segments and remove empty items
    const pathnames = pathname.split("/").filter((x) => x);
  return (
    <nav
        aria-label="Miga de pan"
        className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest"
        >
        <ul className="flex w-full mb-5">
            <li>
                <Link className="hover:text-on-surface transition-colors flex items-center gap-1" href="/">
                    <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
                        home
                    </span>
                    Inicio
                </Link>
            </li>
            {pathnames.map((value, index) => {
                const href = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                // Format segment text: replace dashes with spaces and capitalize words
                const displayName = value
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase());

                return (
                    <li className="flex" key={href} >
                        <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
                            chevron_right
                        </span>
                        {isLast ? (
                            <span className="text-on-surface font-bold flex items-center gap-1" aria-current="page">
                            {displayName}
                            </span>
                        ) : (
                            <Link className="hover:text-on-surface transition-colors flex items-center gap-1" href={href}>{displayName}</Link>
                        )}
                    </li>
                );
        })}
        </ul>
    </nav>
  )
}
