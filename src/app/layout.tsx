import type { Metadata } from "next";
import { headers } from "next/headers";
import Head from 'next/head'
import 'material-symbols';
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


const playfair = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"]
})

const plusjakarta = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  subsets: ["latin"]
})

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = (
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
  )
    ?.split(",")[0]
    .trim();
  const protocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim() ?? "https";

  if (!host || (protocol !== "http" && protocol !== "https")) {
    throw new Error("Unable to determine the request origin for metadata.");
  }

  const metadataBase = new URL(`${protocol}://${host}`);

  if (
    metadataBase.username ||
    metadataBase.password ||
    metadataBase.pathname !== "/" ||
    metadataBase.search ||
    metadataBase.hash
  ) {
    throw new Error("The request host is invalid for metadata.");
  }

  return {
    metadataBase,
    title: "Bienvenido a Vivero del Golf",
    description: "Vivero en Rosario, Santa Fe. En Vivero del Golf encontrá plantas, árboles, arbustos y soluciones para tu jardín, con asesoramiento especializado.",
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-Ar" className={`${playfair.variable} ${plusjakarta.variable}`}>
      <Head>
        <link rel="preload" as="video" href="/viverovideo" type="video/mp4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        <Header/>
        <main className="flex flex-col relative w-full pt-18 mt-4 bg-surface grow overflow-hidden">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
