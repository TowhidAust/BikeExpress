import { Col, Row } from 'antd';

import BannerCarousel from './Carousel/Carousel';
import BannerLeftMenu from './BannerMenu/BannerLeftMenu';
import BannerBottomMenu from './BannerMenu/BannerBottomMenu';
import AppLayout from '@/components/Layout/AppLayout';
import FeaturedBikes from './FeaturedBikes/FeaturedBikes';

export default function LandingPage() {
	return (
		<AppLayout>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={6}>
					<BannerLeftMenu />
				</Col>
				<Col xs={24} sm={24} md={18}>
					<BannerCarousel />
					<BannerBottomMenu />
				</Col>
				<Col xs={24} sm={24} md={24}>
					<FeaturedBikes />
				</Col>
			</Row>
		</AppLayout>
	);
}
