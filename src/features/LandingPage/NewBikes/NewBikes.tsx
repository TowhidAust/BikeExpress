import { Card, Col, Image, Row, Typography } from 'antd';
import royalEnfield2 from '@/assets/royalEnfield2.jpg';
import royalEnfield3 from '@/assets/royalEnfield3.jpg';

const { Meta } = Card;

export default function NewBikes() {
	return (
		<section className="mt-5">
			<Typography.Title>Featured Bikes</Typography.Title>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={6}>
					<Card hoverable cover={<Image alt="example" src={royalEnfield2} />}>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col xs={24} sm={24} md={6}>
					<Card hoverable cover={<Image alt="example" src={royalEnfield3} />}>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col xs={24} sm={24} md={6}>
					<Card hoverable cover={<Image alt="example" src={royalEnfield3} />}>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col xs={24} sm={24} md={6}>
					<Card hoverable cover={<Image alt="example" src={royalEnfield3} />}>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
			</Row>
		</section>
	);
}
