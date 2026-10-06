import data from './../data/productos.json';

export type Product = (typeof data)[keyof typeof data][number];

const products: Product[] = Object.values(data).flat();

export function getAllProducts(): Product[] {
	return products;
}

export function getProductsByCategory(category: string): Product[] {
	return products.filter((product) => product.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
	return products.filter((product) => product.subcategory === subcategory);
}

export function getProductByCanonicalUrl(canonicalUrl: string): Product | undefined {
	return products.find((product) => product.urlcanonica === canonicalUrl);
}