'use client'
import { usePathname } from 'next/navigation';
export const IsNavigationActive = (url: string) => {
  const pathname = usePathname();
   if (url === "/") {
    return pathname === "/";
    }

    return pathname.startsWith(url);  
}