import { Card, Col, Row, Typography } from 'antd';
import cafeRacer from '@/assets/cafeRacer.jpg';

export default function FeaturedBikes() {
	return (
		<section className="mt-5">
			<Typography.Title>Featured Bikes</Typography.Title>
			<Row gutter={[8, 8]}>
				<Col xs={24} sm={24} md={6}>
					<Card
						cover={
							<div
								style={{
									backgroundImage: `url(${cafeRacer})`,
									backgroundSize: '100% 100%',
									backgroundRepeat: 'no-repeat',
									height: '200px',
								}}
							/>
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
								BDT 280000
							</Col>
						</Row>
					</Card>
				</Col>
				<Col xs={24} sm={24} md={6}>
					<Card
						cover={
							<div
								style={{
									backgroundImage: `url(${cafeRacer})`,
									backgroundSize: '100% 100%',
									backgroundRepeat: 'no-repeat',
									height: '200px',
								}}
							/>
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
								BDT 280000
							</Col>
						</Row>
					</Card>
				</Col>
				<Col xs={24} sm={24} md={6}>
					<Card
						cover={
							<div
								style={{
									backgroundImage: `url(${cafeRacer})`,
									backgroundSize: '100% 100%',
									backgroundRepeat: 'no-repeat',
									height: '200px',
								}}
							/>
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
								BDT 280000
							</Col>
						</Row>
					</Card>
				</Col>
				<Col xs={24} sm={24} md={6}>
					<Card
						cover={
							<div
								style={{
									backgroundImage: `url(${cafeRacer})`,
									backgroundSize: '100% 100%',
									backgroundRepeat: 'no-repeat',
									height: '200px',
								}}
							/>
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
								BDT 280000
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</section>
	);
}
