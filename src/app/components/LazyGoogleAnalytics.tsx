"use client";

import Script from "next/script";

type LazyGoogleAnalyticsProps = {
  gaId: string;
};

export function LazyGoogleAnalytics({ gaId }: LazyGoogleAnalyticsProps) {
  return (
    <>
      <Script
        id="_next-ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window['dataLayer'] = window['dataLayer'] || [];
            function gtag(){window['dataLayer'].push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
      <Script
        id="_next-ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
    </>
  );
}
