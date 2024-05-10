import { Col, Divider, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import cafeRacer from '@/assets/cafeRacer.jpg';
import ProductCardBike from '@/components/ProductCard/ProductCardBike';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

export default function NewBikes() {
	const navigate = useNavigate();

	const data = [1, 2, 3, 4];
	return (
		<section className="mt-5">
			<Row gutter={[8, 8]}>
				<Col span={24}>
					<Typography.Title className="m-0" level={4}>
						New Arrival
					</Typography.Title>
					<Divider className="mt-2 mb-2" />
				</Col>
				{data.map((item) => (
					<Col xs={24} sm={24} md={6} key={item}>
						<ProductCardBike
							productInfo={{
								image: cafeRacer,
								title: 'HONDA CBR REPSOL 155 FI ABS',
								price: '0',
								isUsed: true,
								model: '2021',
								cc: 150,
								km: '1200',
								isFirstOwner: true,
								location: 'Dhaka',
								isNegotiable: true,
							}}
							onDetailsButtonClick={() => navigate(PUBLIC_ROUTE.USED_BIKES)}
						/>
					</Col>
				))}
			</Row>
		</section>
	);
}
