"use client";
import Link from "next/link";
import NavItems from "@/app/utils/NavItems";
import { IsNavigationActive } from "@/app/utils/isNavigationActive";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-space-lg">
      <ul className="flex list-none gap-5">
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
  );
};
