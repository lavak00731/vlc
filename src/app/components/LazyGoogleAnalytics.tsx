"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type LazyGoogleAnalyticsProps = {
  gaId: string;
};

export function LazyGoogleAnalytics({ gaId }: LazyGoogleAnalyticsProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("pointerdown", handleInteraction, { once: true, passive: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });
    window.addEventListener("scroll", handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  if (!hasInteracted) {
    return null;
  }

  return (
    <>
      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
            window['dataLayer'] = window['dataLayer'] || [];
            function gtag(){window['dataLayer'].push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
        strategy="afterInteractive"
      />
      <Script
        id="_next-ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
