import { Carousel, Image } from 'antd';
import royalEnfield2 from '@/assets/royalEnfield2.jpg';
import royalEnfield3 from '@/assets/royalEnfield3.jpg';

const contentStyle: React.CSSProperties = {
	height: window.innerWidth > 768 ? '400px' : '200px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
	borderRadius: 8,
};

export default function BannerCarousel() {
	return (
		<Carousel className="width-100" autoplay autoplaySpeed={6000}>
			<div>
				<Image width="100%" src={royalEnfield3} style={contentStyle} />
			</div>
			<div>
				<Image width="100%" src={royalEnfield2} style={contentStyle} />
			</div>
			<div>
				<Image width="100%" src={royalEnfield3} style={contentStyle} />
			</div>
			<div>
				<Image width="100%" src={royalEnfield3} style={contentStyle} />
			</div>
		</Carousel>
	);
}
