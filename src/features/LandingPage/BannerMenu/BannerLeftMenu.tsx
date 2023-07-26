import { Menu } from 'antd';
import { TbHelmet, TbSticker } from 'react-icons/tb';
import { GiCarWheel, GiCoveredJar, GiHornInternal, GiMirrorMirror, GiWinterGloves } from 'react-icons/gi';
import { RiLock2Line, RiOilLine, RiTShirtAirLine } from 'react-icons/ri';
import { BulbOutlined } from '@ant-design/icons';
import { FaBatteryEmpty } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

export default function BannerLeftMenu() {
	const navigate = useNavigate();
	return (
		<Menu
			className="py-5"
			style={{ minHeight: '460px' }}
			mode="inline"
			items={[
				{ key: 1, label: 'Helmet', className: 'm-0', icon: <TbHelmet />, onClick: () => navigate(PUBLIC_ROUTE.HELMET) },
				{
					key: 2,
					label: 'Engine Oil',
					className: 'm-0',
					icon: <RiOilLine />,
					onClick: () => navigate(PUBLIC_ROUTE.ENGINE_OIL),
				},
				{
					key: 3,
					label: 'Riding Gears',
					className: 'm-0',
					icon: <GiWinterGloves />,
				},
				{
					key: 4,
					label: 'T-Shirt',
					className: 'm-0',
					icon: <RiTShirtAirLine />,
				},
				{ key: 5, label: 'Light', className: 'm-0', icon: <BulbOutlined /> },
				{
					key: 6,
					label: 'Looking Glass',
					className: 'm-0',
					icon: <GiMirrorMirror />,
				},
				{ key: 7, label: 'Horn', className: 'm-0', icon: <GiHornInternal /> },
				{
					key: 8,
					label: 'Sticker',
					className: 'm-0',
					icon: <TbSticker />,
				},
				{
					key: 9,
					label: 'Tank Pad',
					className: 'm-0',
					icon: <TbSticker />,
				},
				{ key: 10, label: 'Lock', className: 'm-0', icon: <RiLock2Line /> },
				{
					key: 11,
					label: 'Seat Cover',
					className: 'm-0',
					icon: <GiCoveredJar />,
				},
				{
					key: 12,
					label: 'Battery',
					className: 'm-0',
					icon: <FaBatteryEmpty />,
				},
				{
					key: 13,
					label: 'Number Plate Holder',
					className: 'm-0',
					icon: <GiCarWheel />,
				},
			]}
		/>
	);
}
