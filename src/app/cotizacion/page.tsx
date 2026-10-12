import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { getOrganizationJsonLd } from "../lib/site-json-ld";
import { getRequestOrigin } from "../lib/site-url";

export const metadata: Metadata = {
  title: "Cotización online | Vivero del Golf",
  description:
    "Prepará tu lista de plantas, árboles y productos de vivero para solicitar una cotización a Vivero del Golf en Rosario.",
  alternates: { canonical: "/cotizacion" },
};

export default async function Cotizacion() {
  const origin = await getRequestOrigin();
  const pageUrl = new URL("/cotizacion", origin).toString();
  const organization = getOrganizationJsonLd(origin);
  const quotationPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Cotización online | Vivero del Golf",
        description: metadata.description,
        mainEntity: { "@id": organization["@id"] },
      },
      organization,
    ],
  };

  return (
    <>
      <JsonLd data={quotationPageJsonLd} />
      <div>page</div>
    </>
  );
}
