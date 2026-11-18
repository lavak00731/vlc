"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

type LazyGoogleAnalyticsProps = {
  gaId: string;
};

export function LazyGoogleAnalytics({ gaId }: LazyGoogleAnalyticsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let idleCallbackId: number | undefined;
    let timeoutId: number | undefined;

    const loadWhenIdle = () => {
      if ("requestIdleCallback" in (window as object)) {
        idleCallbackId = window.requestIdleCallback(
          () => setShouldLoad(true),
          { timeout: 2000 },
        );
      } else {
        timeoutId = window.setTimeout(() => setShouldLoad(true), 1000);
      }
    };

    if (document.readyState === "complete") {
      loadWhenIdle();
    } else {
      window.addEventListener("load", loadWhenIdle, { once: true });
    }

    return () => {
      window.removeEventListener("load", loadWhenIdle);
      if (idleCallbackId !== undefined) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return shouldLoad ? <GoogleAnalytics gaId={gaId} /> : null;
}
