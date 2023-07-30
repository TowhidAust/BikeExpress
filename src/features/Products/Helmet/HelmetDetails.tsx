import AppLayout from '@/components/Layout/AppLayout';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';
import RatingsAndReviews from '@/components/ProductDetails/RatingsAndReviews';

export default function HelmetDetails() {
	return (
		<AppLayout>
			<ProductDetailsWithSku
				productDetailsData={{
					_id: '1',
					title: 'MT TARGO PRO 450x1m321',
					brand: 'MT',
					modelNo: '450x1m321',
					modelYear: '2023',
					madeIn: 'Indonesia',
					thumnail:
						'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
					images: [
						'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
					],
					description: 'Some awesome description about this product.',
					warranty: 1,
					warrantyUnit: 'Year',
				}}
				variants={[
					{
						_id: '1',
						price: 7899,
						discount: 5,
						color: 'RED',
						thumbnail:
							'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
						sizes: [
							{
								_id: '1-1',
								size: 'S',
								inStock: false,
								quantity: 0,
							},
							{
								_id: '1-2',
								size: 'M',
								inStock: false,
								quantity: 0,
							},
							{
								_id: '1-3',
								size: 'L',
								inStock: true,
								quantity: 10,
							},
							{
								_id: '1-4',
								size: 'XL',
								inStock: true,
								quantity: 10,
							},
							{
								_id: '1-5',
								size: 'XXL',
								inStock: true,
								quantity: 10,
							},
						],
					},
					{
						_id: '2',
						price: 6899,
						discount: 10,
						color: 'GREEN',
						thumbnail:
							'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
						sizes: [
							{
								_id: '2-1',
								size: 'M',
								inStock: true,
								quantity: 5,
							},
						],
					},
					{
						_id: '3',
						price: 6899,
						discount: 10,
						color: 'BLUE',
						thumbnail:
							'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
						sizes: [
							{
								_id: '3-1',
								size: 'M',
								inStock: true,
								quantity: 5,
							},
						],
					},
				]}
			/>
			<RatingsAndReviews />
		</AppLayout>
	);
}
