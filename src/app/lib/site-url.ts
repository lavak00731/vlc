import { headers } from "next/headers";

export async function getRequestOrigin(): Promise<URL> {
  const requestHeaders = await headers();
  const host = (
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host")
  )
    ?.split(",")[0]
    .trim();
  const protocol =
    requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim() ?? "https";

  if (!host || (protocol !== "http" && protocol !== "https")) {
    throw new Error("Unable to determine the request origin for metadata.");
  }

  const origin = new URL(`${protocol}://${host}`);

  if (
    origin.username ||
    origin.password ||
    origin.pathname !== "/" ||
    origin.search ||
    origin.hash
  ) {
    throw new Error("The request host is invalid for metadata.");
  }

  return origin;
}
