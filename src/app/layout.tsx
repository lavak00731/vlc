import type { Metadata } from "next";
import Head from 'next/head'
import localFont from "next/font/local";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LazyGoogleAnalytics } from "./components/LazyGoogleAnalytics";
import { getRequestOrigin } from "./lib/site-url";
import { QuotationProvider } from "./context/QuotationContext";
import { SkipLink } from "./components/SkipLink";

const gaId = process.env.GA_ID;

const playfair = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"]
})

const plusjakarta = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  subsets: ["latin"]
})

const materialSymbols = localFont({
  src: "../../node_modules/material-symbols/material-symbols-outlined.woff2",
  variable: "--font-material-symbols-outlined",
  weight: "100 700",
  display: "swap",
  preload: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getRequestOrigin(),
    title: "Bienvenido a Vivero del Golf",
    description: "Vivero en Rosario, Santa Fe. En Vivero del Golf encontrá plantas, árboles, arbustos y soluciones para tu jardín, con asesoramiento especializado.",
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-Ar" className={`${playfair.variable} ${plusjakarta.variable} ${materialSymbols.variable}`}>
      <Head>
        <link rel="preload" as="video" href="/viverovideo" type="video/mp4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        <QuotationProvider>
          <SkipLink />
          <Header/>
          <main id="main-content" className="flex flex-col relative w-full pt-18 mt-4 bg-surface grow overflow-hidden">{children}</main>
          <Footer/>
        </QuotationProvider>
        {gaId && <LazyGoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
