import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import BasicProductCard from '@/components/ProductCard/BasicProductCard';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

export default function EngineOil() {
	const [productInfo] = useState<any[]>([
		{
			image:
				'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
			title: 'Motul',
			price: 1200,
			available: 10,
		},
		{
			image:
				'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
			title: 'Motul',
			price: 1200,
			available: 10,
		},
		{
			image:
				'https://lh3.googleusercontent.com/proxy/EhHXapeVpBGtBqpqVNe8gNZPRL7XH9QizSm2nOGV_Jm83Tt96zGkFvQxDqFjGPJ4BLl86cokG5FmJsP3FSepwELbDJBj6CQf7pdeoHIlaVEfwRQ0Y7-q9EShJARwMLwUxIaXEw',
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
							navigate(`${PUBLIC_ROUTE.ENGINE_OIL}/${item?._id}`);
						}}
					/>
				</Col>
			))}
		</Row>
	);
}
