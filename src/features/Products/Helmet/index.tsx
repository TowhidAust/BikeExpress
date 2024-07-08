import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import BasicProductCard from '@/components/ProductCard/BasicProductCard';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import { useGetHelmetListQuery } from './api';
import GridSkeleton from '@/components/Skeleton/GridSkeleton';

export default function Helmet() {
	const navigate = useNavigate();
	const { data, isLoading, error } = useGetHelmetListQuery(
		{
			category: 'HELMET',
			page: 0,
			pageSize: 10,
		},
		{
			refetchOnMountOrArgChange: true,
		},
	);

	if (error) {
		return <section>Something went wrong!</section>;
	}

	if (isLoading) {
		return <GridSkeleton isLoading={isLoading} />;
	}

	return (
		<Row gutter={[16, 16]}>
			{data?.result?.map((item: any) => {
				return (
					<Col xs={24} sm={24} md={6} key={item?._id}>
						<BasicProductCard
							productInfo={{
								title: item?.title,
								image: item?.thumbnail,
								price: item?.price,
							}}
							onDetailsButtonClick={() => {
								navigate(`${PUBLIC_ROUTE.HELMET}/${item?._id}`);
							}}
						/>
					</Col>
				);
			})}
		</Row>
	);
}
