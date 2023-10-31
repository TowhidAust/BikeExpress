import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import BasicProductCard from '@/components/ProductCard/BasicProductCard';

export default function HelmetAccessories() {
	const navigate = useNavigate();
	return (
		<Row gutter={[16, 16]}>
			<Col xs={24} sm={24} md={6} lg={6}>
				<BasicProductCard
					productInfo={{
						title: 'Smoky Visor For MT helmet',
						image: 'https://cdn.webshopapp.com/shops/167915/files/356158097/400x400x1/product.jpg',
						price: '1450',
					}}
					onDetailsButtonClick={() => {
						navigate(`${PUBLIC_ROUTE.HELMET_ACCESSORIES}`);
					}}
				/>
			</Col>
		</Row>
	);
}
