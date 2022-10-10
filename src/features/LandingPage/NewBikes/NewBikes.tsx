import { Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import cafeRacer from '@/assets/cafeRacer.jpg';
import ProductCardBike from '@/components/ProductCard/ProductCardBike';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

export default function NewBikes() {
	const navigate = useNavigate();

	const data = [1, 2, 3, 4];
	return (
		<section className="mt-5">
			<Typography.Title level={2}>New Arrival</Typography.Title>
			<Row gutter={[8, 8]}>
				{data.map((item) => (
					<Col xs={24} sm={24} md={6} key={item}>
						<ProductCardBike
							// key={Math.random()}
							image={cafeRacer}
							title="HONDA CBR REPSOL 155 FI ABS"
							price={28000}
							isUsed
							model="2021"
							cc={150}
							km={1200}
							isFirstOwner
							location="Dhaka"
							isNegotiable
							onDetailsButtonClick={() => navigate(PUBLIC_ROUTE.USED_BIKES)}
						/>
					</Col>
				))}
			</Row>
		</section>
	);
}
