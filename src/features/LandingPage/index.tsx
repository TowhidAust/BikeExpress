import { Col, Row } from 'antd';

import BannerCarousel from './Carousel/Carousel';
import BannerLeftMenu from './BannerMenu/BannerLeftMenu';
import BannerBottomMenu from './BannerMenu/BannerBottomMenu';
import AppLayout from '@/components/Layout/AppLayout';
import FeaturedBikes from './FeaturedBikes/FeaturedBikes';
import NewBikes from './NewBikes/NewBikes';
import BikeService from '../BikeService';

export default function LandingPage() {
	return (
		<AppLayout>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={6}>
					<BannerLeftMenu insideDrawer={false} />
				</Col>
				<Col xs={24} sm={24} md={18}>
					<BannerCarousel />
				</Col>
				<Col xs={24} sm={24} md={24}>
					<BikeService />
				</Col>
				<Col xs={24} sm={24} md={24}>
					<BannerBottomMenu />
				</Col>
				<Col xs={24} sm={24} md={24}>
					<NewBikes />
				</Col>
				<Col xs={24} sm={24} md={24}>
					<FeaturedBikes />
				</Col>
			</Row>
		</AppLayout>
	);
}
