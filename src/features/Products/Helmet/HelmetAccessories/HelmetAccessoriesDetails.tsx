import { useState } from 'react';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';

export default function HelmetAccessoriesDetails() {
	const [productDetailsData, setProductDetailsData] = useState<any>({
		_id: '1234',
		hasSku: false,
		title: 'This is a title',
		price: 4500,
		brand: 'Axor',
		modelNo: '2024',
		modelYear: '2023',
		madeIn: 'India',
		thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ee6-3wvVymBQRq1XfBI6oXvYBAOD9yULSw&s',
		images: [
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ee6-3wvVymBQRq1XfBI6oXvYBAOD9yULSw&s',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ee6-3wvVymBQRq1XfBI6oXvYBAOD9yULSw&s',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ee6-3wvVymBQRq1XfBI6oXvYBAOD9yULSw&s',
		],
		description: 'Lorem ipsum dolor sinet.',
		warranty: 1,
		warrantyUnit: 'Month',
		isCertified: true,
		certificationName: 'DOT',
		quantity: 10,
		inStock: true,
		discount: 5,
	});

	return <ProductDetailsWithSku productDetailsData={productDetailsData} variants={[]} />;
}
