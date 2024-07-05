import { useParams } from 'react-router-dom';
import ProductDetailsWithSku from '@/components/ProductDetails/ProductDetailsWithSku';
// import RatingsAndReviews from '@/components/ProductDetails/RatingsAndReviews';
import { useGetHelmetListQuery, useGetProductVariantsQuery } from './api';
import SingleSkeleton from '@/components/Skeleton/SingleSkeleton';

export default function HelmetDetails() {
	const { id } = useParams();
	const {
		data: prodDetailsData,
		isLoading: isProdDetailsLoading,
		error: prodDetailsError,
	} = useGetHelmetListQuery({ id, page: 0, pageSize: 10 });
	const { data, isLoading, error } = useGetProductVariantsQuery(
		{ productId: id || '' },
		{ refetchOnMountOrArgChange: true },
	);

	if (error || prodDetailsError) {
		<section>Something went wrong!</section>;
	}

	if (isLoading || isProdDetailsLoading) {
		return <SingleSkeleton isLoading={isLoading || isProdDetailsLoading} />;
	}

	return <ProductDetailsWithSku productDetailsData={prodDetailsData?.result[0]} variants={data?.result || []} />;
}
