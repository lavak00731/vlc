export function getOrganizationJsonLd(origin: URL) {
  return {
    "@type": "GardenStore",
    "@id": new URL("/#organization", origin).toString(),
    name: "Vivero del Golf",
    url: origin.toString(),
    telephone: "+54-341-500-1111",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Jorge Newbery 9320",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.90924797000192,
      longitude: -60.77203922356906,
    },
    sameAs: ["https://www.instagram.com/viverodelgolf/"],
  };
}
