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
								<Col xs={24} sm={24} md={4}>
									<Card className="p-0" bodyStyle={{ padding: '10px' }}>
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<RiOilLine />}
										>
											Engine Oil
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={4}>
									<Card className="p-0" bodyStyle={{ padding: '10px' }}>
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<RiToolsLine />}
										>
											Spare Parts
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={4}>
									<Card className="p-0" bodyStyle={{ padding: '10px' }}>
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<GiLoveHowl />}
										>
											Bike Care
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={4}>
									<Card className="p-0" bodyStyle={{ padding: '10px' }}>
										{/* <p>Engine Oil</p> */}
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<GiSchoolBag />}
										>
											Bag Pack
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={4}>
									<Card className="p-0" bodyStyle={{ padding: '10px' }}>
										{/* <p>Engine Oil</p> */}
										<Button
											style={{ display: 'flex', alignItems: 'center' }}
											type="link"
											size="small"
											icon={<RiOilLine />}
										>
											Engine Oil
										</Button>
									</Card>
								</Col>
								<Col xs={24} sm={24} md={4}>
									<Card className="p-0" bodyStyle={{ padding: '10px' }}>
										<Button
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
											type="link"
											size="small"
											icon={<RiOilLine />}
										>
											Engine Oil
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
