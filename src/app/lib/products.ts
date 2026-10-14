import data from './../data/productos.json';

export type Product = (typeof data)[keyof typeof data][number];
export type SearchProduct = Pick<Product, "name" | "urlcanonica">;

const products: Product[] = Object.values(data).flat();

export function getAllProducts(): Product[] {
	return products;
}

export function getSearchProducts(): SearchProduct[] {
	const seenNames = new Set<string>();

	return products.filter((product) => {
		const normalizedName = normalizeProductName(product.name);
		if (seenNames.has(normalizedName)) return false;
		seenNames.add(normalizedName);
		return true;
	}).map(({ name, urlcanonica }) => ({ name, urlcanonica }));
}

export function getSearchResults(query: string): Product[] {
	const normalizedQuery = normalizeProductName(query);
	if (!normalizedQuery) return [];

	const seenNames = new Set<string>();

	return products
		.filter((product) => {
			const normalizedName = normalizeProductName(product.name);
			if (!normalizedName.includes(normalizedQuery) || seenNames.has(normalizedName)) {
				return false;
			}
			seenNames.add(normalizedName);
			return true;
		})
		.sort((first, second) => {
			const firstName = normalizeProductName(first.name);
			const secondName = normalizeProductName(second.name);
			const firstStartsWithQuery = firstName.startsWith(normalizedQuery);
			const secondStartsWithQuery = secondName.startsWith(normalizedQuery);

			return Number(secondStartsWithQuery) - Number(firstStartsWithQuery);
		});
}

export function getProductByName(name: string): Product | undefined {
	const normalizedName = normalizeProductName(name);
	return products.find((product) => normalizeProductName(product.name) === normalizedName);
}

export function normalizeProductName(name: string): string {
	return name
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.trim();
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