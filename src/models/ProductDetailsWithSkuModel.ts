// Product details with sku models
export interface ProductDetailsDataModel {
	_id: string;
	title: string;
	brand: string;
	modelNo: string;
	modelYear: string;
	madeIn: string;
	thumnail: string;
	images: string[];
	description: string;
}

export interface ProductSizesModel {
	_id: string;
	size: string;
	inStock: boolean;
	quantity: number;
}

export interface ProductVariantModel {
	_id: string;
	price: number;
	discount: number;
	color: string;
	thumbnail: string;
	sizes: ProductSizesModel[];
}
