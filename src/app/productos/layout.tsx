import type { Metadata } from "next";
import 'material-symbols';

import "./../globals.css";


export const metadata: Metadata = {
  title: "Productos - Vivero del Golf",
  description: "Vivero en Rosario, Santa Fe. En Vivero del Golf encontrá plantas, árboles, arbustos y soluciones para tu jardín, con asesoramiento especializado.",
};

export default function ProductLayout({ children }: LayoutProps<"/">) {
  return (    
    <article className="flex flex-col relative w-full bg-surface grow">{children}</article>      
  );
}
