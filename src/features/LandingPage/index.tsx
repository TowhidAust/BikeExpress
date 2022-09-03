import { Col, Layout, Row } from 'antd';
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
				style={{ padding: '0 60px', marginTop: 24 }}
			>
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: 380 }}
				>
					<Row gutter={16}>
						<Col md={6}>
							<BannerLeftMenu />
						</Col>
						<Col md={18}>
							<BannerCarousel />
						</Col>
					</Row>
				</div>
			</Content>
			<AppFooter />
		</Layout>
	);
}
