
export interface product {
	filter: string[];
	image: string;
	badgeIcon: string;
	badgeText: string;
	title: string;
	description: string[];
}

export interface CategoryInterface {
	plantas: product;
	arbolesarbustos: product;
}