import { Card, Col, Pagination, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import ProductCardBike from '@/components/ProductCard/ProductCardBike';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import { useGetUsedBikesListQuery } from './api';

// const { Option } = Select;
export default function UsedBikes() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const navigate = useNavigate();
	const { data, isLoading, isError } = useGetUsedBikesListQuery<any>(
		{ page: currentPage - 1, pageSize: 10 },
		{ refetchOnMountOrArgChange: true },
	);

	if (isError) {
		return <AppLayout>Something went wrong!</AppLayout>;
	}
	return (
		<AppLayout>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={24}>
					<Card loading={isLoading}>
						<Typography.Title level={4}> Used Bikes </Typography.Title>
						<Row gutter={[16, 16]}>
							{data?.result.map((item: any) => (
								<Col key={item?._id} xs={24} sm={24} md={6} lg={6} xxl={6}>
									<ProductCardBike
										productInfo={{
											image: item?.images[0]?.downloadUrl || item?.images[0],
											title: item?.bikeName,
											price: item?.price,
											isUsed: true,
											model: item?.bikeModelYear,
											cc: item?.cc,
											km: item?.kmRun,
											isFirstOwner: item?.ownerShipStatus,
											location: item?.district,
											isNegotiable: item?.isNegotiable,
										}}
										onDetailsButtonClick={() => {
											return navigate(`${PUBLIC_ROUTE.USED_BIKE_DETAILS}/${item?._id}`);
										}}
									/>
								</Col>
							))}
						</Row>

						<div className="mt-3 text-right">
							<Pagination
								total={data?.totalCount}
								pageSize={data?.pageSize}
								current={currentPage}
								showSizeChanger={false}
								onChange={(page) => {
									setCurrentPage(page);
								}}
							/>
						</div>
					</Card>
				</Col>
			</Row>
		</AppLayout>
	);
}
