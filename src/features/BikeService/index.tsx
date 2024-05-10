import { Card, Col, Divider, Row, Typography } from 'antd';

export default function BikeService() {
	return (
		<Row gutter={[6, 6]} className="mt-1">
			<Col span={24}>
				<Typography.Title className="m-0" level={4}>
					BIKE SURGERY AT HOME
				</Typography.Title>
				<Divider className="mt-2 mb-2" />
			</Col>
			<Col xs={24} sm={24} md={6}>
				<Card title="GENERAL SURGERY" extra={<a href="#">Book Online</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
			<Col xs={24} sm={24} md={6}>
				<Card title="PREMIUM SURGERY" extra={<a href="#">Book Online</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
			<Col xs={24} sm={24} md={6}>
				<Card title="GOLDEN SURGERY" extra={<a href="#">Book Online</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
			<Col xs={24} sm={24} md={6}>
				<Card title="PAY AS YOU GO" extra={<a href="#">Book Online</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
		</Row>
	);
}
