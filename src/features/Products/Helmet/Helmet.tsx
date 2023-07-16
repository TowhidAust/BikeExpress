import { Col, Row, message } from 'antd';
import AppLayout from '@/components/Layout/AppLayout';
import BasicProductCard from '@/components/ProductCard/BasicProductCard';

export default function Helmet() {
	return (
		<AppLayout>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={6}>
					<BasicProductCard
						productInfo={{
							title: 'MT TARGO PRO H54301',
							image:
								'https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
							price: '7800',
						}}
						onDetailsButtonClick={() => {
							message.info('Please create a details page');
						}}
					/>
				</Col>
			</Row>
		</AppLayout>
	);
}
