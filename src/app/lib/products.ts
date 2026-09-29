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

export const getProducts = (category: string, slug: string) =>   products.find((p) => p.category === category && p['url-canonica']=== slug);