import { Button, Card, Col, Layout, Row } from 'antd';
import { RiOilLine, RiToolsLine } from 'react-icons/ri';
import { GiLoveHowl, GiSchoolBag } from 'react-icons/gi';
import TopBar from '@/components/TopBar/TopBar';
import AppFooter from '@/components/Footer/Footer';
import BannerCarousel from './Carousel';
import BannerLeftMenu from './BannerLeftMenu';

const { Content } = Layout;

export default function LandingPage() {
	return (
		<Layout>
			<TopBar />

			<Content
				className="site-layout"
				style={{ padding: '0 2%', marginTop: 24 }}
			>
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: 380 }}
				>
					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} md={6}>
							<BannerLeftMenu />
						</Col>
						<Col xs={24} sm={24} md={18}>
							<BannerCarousel />
							<Row gutter={[16, 16]} className="mt-3">
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{
											padding: '10px',
										}}
									>
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<RiOilLine className="mr-2" />}
										>
											Engine Oil
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<RiToolsLine className="mr-2" />}
										>
											Spare Parts
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<GiLoveHowl className="mr-2" />}
										>
											Bike Care
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										{/* <p>Engine Oil</p> */}
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<GiSchoolBag className="mr-2" />}
										>
											Bag Pack
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										{/* <p>Engine Oil</p> */}
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<RiOilLine className="mr-2" />}
										>
											Bumper
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										<Button
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
											type="link"
											size="small"
											icon={<RiOilLine className="mr-2" />}
										>
											Mobile Holder
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										<Button
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
											type="link"
											size="small"
											icon={<RiOilLine className="mr-2" />}
										>
											Tire Gel
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={6}>
									<Card
										hoverable
										className="p-0"
										bodyStyle={{ padding: '10px' }}
									>
										<Button
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
											type="link"
											size="small"
											icon={<RiOilLine className="mr-2" />}
										>
											Grip
										</Button>
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Content>
			<AppFooter />
		</Layout>
	);
}
