import { Col, Layout, Row } from 'antd';

import TopBar from '@/components/TopBar/TopBar';
import AppFooter from '@/components/Footer/Footer';
import BannerCarousel from './Carousel';
import BannerLeftMenu from './BannerLeftMenu';
import BannerBottomMenu from './BannerBottomMenu';

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
							<BannerBottomMenu />
						</Col>
					</Row>
				</div>
			</Content>
			<AppFooter />
		</Layout>
	);
}
