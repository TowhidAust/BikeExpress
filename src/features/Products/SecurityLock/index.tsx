import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import BasicProductCard from '@/components/ProductCard/BasicProductCard';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

export default function SecurityLock() {
	const [productInfo] = useState<any[]>([
		{
			_id: 1,
			image: 'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
			title: 'Motul',
			price: 1200,
			available: 10,
		},
		{
			_id: 2,
			image: 'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
			title: 'Motul',
			price: 1200,
			available: 10,
		},
		{
			_id: 3,
			image: 'https://m.media-amazon.com/images/I/619gZm-kxoL._AC_SL1000_.jpg',
			title: 'Motul',
			price: 1200,
			available: 10,
		},
	]);
	const navigate = useNavigate();
	return (
		<Row gutter={[16, 16]}>
			{productInfo?.map((item) => (
				<Col xs={24} sm={24} md={6}>
					<BasicProductCard
						productInfo={{
							image: item?.image,
							title: item?.title,
							price: item?.price,
						}}
						onDetailsButtonClick={() => {
							navigate(`${PUBLIC_ROUTE.SECURITY_LOCK}/${item?._id}`);
						}}
					/>
				</Col>
			))}
		</Row>
	);
}
