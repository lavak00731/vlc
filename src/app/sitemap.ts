import type { MetadataRoute } from "next";
import categoryData from "./data/categorydata.json";
import { getAllProducts, getProductsByCategory } from "./lib/products";

const siteUrl = "https://www.viverodelgolf.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = Object.keys(categoryData).filter(
    (category) => getProductsByCategory(category).length > 0,
  );
  const productUrls = new Set(
    getAllProducts().map((product) => product.urlcanonica),
  );
  const paths = [
    "/",
    "/productos",
    "/contacto",
    ...categories.map((category) => `/productos/${category}`),
    ...productUrls,
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
