

export interface Product {
	id: string;
	category_id: string;
	name: string;
	description: string;
	imagePath: string;
	price: number;
	ingredients: {
			name: string;
			icon: string;
			id: string;
	}[];
}
