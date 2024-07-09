import { useState } from 'react';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';

export default function EngineOilDetails() {
	const [productDetailsData] = useState<any>({
		_id: '1234',
		hasSku: false,
		title: 'Motul 10w30 Full Synthetic Engine oil',
		price: 1200,
		brand: 'Axor',
		modelNo: '2024',
		modelYear: '2023',
		madeIn: 'India',
		thumbnail:
			'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
		images: [
			'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
			'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
			'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
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
