import AppLayout from '@/components/Layout/AppLayout';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';
import RatingsAndReviews from '@/components/ProductDetails/RatingsAndReviews';

export default function HelmetDetails() {
	return (
		<AppLayout>
			<ProductDetailsWithSku
				variants={[
					{
						id: '1',
						price: '7899',
						color: 'Red',
						sizes: [
							{
								id: '1-1',
								size: 'S',
								inStock: true,
							},
						],
					},
					{
						id: '2',
						price: '7899',
						color: 'Red',
						sizes: [
							{
								id: '2-1',
								size: 'M',
								inStock: true,
							},
						],
					},
				]}
			/>
			<RatingsAndReviews />
		</AppLayout>
	);
}
