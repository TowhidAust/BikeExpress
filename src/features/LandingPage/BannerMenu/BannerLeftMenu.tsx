import { Menu } from 'antd';
import { TbHelmet, TbSticker } from 'react-icons/tb';
import { GiCarWheel, GiCoveredJar, GiHornInternal, GiMirrorMirror, GiWinterGloves } from 'react-icons/gi';
import { RiLock2Line, RiTShirtAirLine } from 'react-icons/ri';
import { BulbOutlined } from '@ant-design/icons';
import { FaBatteryEmpty } from 'react-icons/fa';

export default function BannerLeftMenu() {
	return (
		<Menu
			className="py-5"
			style={{ minHeight: '460px' }}
			mode="inline"
			items={[
				{ key: 1, label: 'Helmet', className: 'm-0', icon: <TbHelmet /> },
				{
					key: 2,
					label: 'Riding Gears',
					className: 'm-0',
					icon: <GiWinterGloves />,
				},
				{
					key: 3,
					label: 'T-Shirt',
					className: 'm-0',
					icon: <RiTShirtAirLine />,
				},
				{ key: 4, label: 'Light', className: 'm-0', icon: <BulbOutlined /> },
				{
					key: 5,
					label: 'Looking Glass',
					className: 'm-0',
					icon: <GiMirrorMirror />,
				},
				{ key: 6, label: 'Horn', className: 'm-0', icon: <GiHornInternal /> },
				{
					key: 7,
					label: 'Sticker',
					className: 'm-0',
					icon: <TbSticker />,
				},
				{
					key: 8,
					label: 'Tank Pad',
					className: 'm-0',
					icon: <TbSticker />,
				},
				{ key: 9, label: 'Lock', className: 'm-0', icon: <RiLock2Line /> },
				{
					key: 10,
					label: 'Seat Cover',
					className: 'm-0',
					icon: <GiCoveredJar />,
				},
				{
					key: 11,
					label: 'Battery',
					className: 'm-0',
					icon: <FaBatteryEmpty />,
				},
				{
					key: 12,
					label: 'Number Plate Holder',
					className: 'm-0',
					icon: <GiCarWheel />,
				},
			]}
		/>
	);
}
