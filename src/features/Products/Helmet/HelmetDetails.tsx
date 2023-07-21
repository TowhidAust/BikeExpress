import AppLayout from '@/components/Layout/AppLayout';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';
import RatingsAndReviews from '@/components/ProductDetails/RatingsAndReviews';

export default function HelmetDetails() {
	return (
		<AppLayout>
			<ProductDetailsWithSku />
			<RatingsAndReviews />
		</AppLayout>
	);
}
