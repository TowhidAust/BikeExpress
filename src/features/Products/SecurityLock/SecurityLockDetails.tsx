import { useState } from 'react';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';

export default function SecurityLockDetails() {
	const [productDetailsData] = useState<any>({
		_id: '1234',
		hasSku: false,
		title: 'This is a title',
		price: 4500,
		brand: 'Axor',
		modelNo: '2024',
		modelYear: '2023',
		madeIn: 'India',
		thumbnail: 'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
		images: [
			'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
			'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
			'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
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
