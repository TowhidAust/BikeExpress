import { Button, Card, Col, Row, Typography } from 'antd';
import cafeRacer from '@/assets/cafeRacer.jpg';

export default function FeaturedBikes() {
	const data = [1, 2, 3, 4];
	return (
		<section className="mt-5">
			<Typography.Title>Featured Bikes</Typography.Title>
			<Row gutter={[8, 8]}>
				{data.map((item) => (
					<Col xs={24} sm={24} md={6} key={item}>
						<Card
							cover={
								<div
									style={{
										position: 'relative',
										textAlign: 'right',
										backgroundImage: `url(${cafeRacer})`,
										backgroundSize: '100% 100%',
										backgroundRepeat: 'no-repeat',
										height: '200px',
									}}
								>
									<Button
										style={{ position: 'absolute', bottom: 0, right: 0 }}
										type="primary"
									>
										DETAILS
									</Button>
								</div>
							}
						>
							<Row gutter={[8, 8]}>
								<Col xs={24} sm={24} md={24}>
									<Typography.Title
										level={5}
										style={{
											whiteSpace: 'nowrap',
											width: '90%',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}
									>
										<abbr
											style={{ textDecoration: 'none' }}
											title="HONDA CBR 150 DUAL CHANNEL ABS"
										>
											HONDA CBR 150 DUAL CHANNEL ABS
										</abbr>
									</Typography.Title>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Typography.Text className="font-weight-600" type="warning">
										BDT 280000
									</Typography.Text>
								</Col>
								<Col xs={24} sm={24} md={12}>
									Condition: Used
								</Col>
								<Col xs={24} sm={24} md={12}>
									Model: 2021
								</Col>
								<Col xs={24} sm={24} md={12}>
									CC: 155
								</Col>
								<Col xs={24} sm={24} md={12}>
									Km: 5000
								</Col>
								<Col xs={24} sm={24} md={12}>
									owner: 1st
								</Col>
								<Col xs={24} sm={24} md={12}>
									Location: Dhaka
								</Col>
								<Col xs={24} sm={24} md={12}>
									Negotiable
								</Col>
							</Row>
						</Card>
					</Col>
				))}
			</Row>
		</section>
	);
}
