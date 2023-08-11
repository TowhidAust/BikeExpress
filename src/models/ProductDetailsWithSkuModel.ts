// Product details with sku models
export interface ProductDetailsDataModel {
	_id: string;
	hasSku: boolean;
	title: string;
	brand: string;
	modelNo: string;
	modelYear: string;
	madeIn: string;
	thumbnail: string;
	images: string[];
	description: string;
	warranty?: number;
	warrantyUnit?: string;
	isCertified?: boolean;
	certificationName?: string;
	quantity: number;
	inStock: boolean;
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
