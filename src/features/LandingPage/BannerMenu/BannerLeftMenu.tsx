import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
	onClick?: () => any,
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
		onClick,
		style: { margin: 0 },
	} as MenuItem;
}

export default function BannerLeftMenu() {
	const [openKeys, setOpenKeys] = useState(['sub1']);
	const navigate = useNavigate();

	const items: MenuItem[] = [
		getItem('Helmet', 'helmet', undefined, undefined, undefined, () => navigate(PUBLIC_ROUTE.HELMET)),
		getItem('Engine Oil', 'engine_oil', undefined, undefined, undefined, () => navigate(PUBLIC_ROUTE.ENGINE_OIL)),
		getItem('Looking Glass', 'looking_glass'),
		getItem('Lock', 'lock'),

		getItem('Accessories', 'accessories', null, [
			getItem('Horn', 'horn'),
			getItem('Light', 'light'),
			getItem('Clutch Liver', 'clutch_liver'),
			getItem('Break Liver', 'break_liver'),
			getItem('Mobile Holder', 'mobile_holder'),
			getItem('Communicator', 'communicator'),
			getItem('Engine Guard', 'engine_guard'),
			getItem('Quick Throttle', 'quick_throttle'),
			getItem('Handle Bar', 'handle_bar'),
			getItem('Sticker', 'sticker'),
		]),

		getItem('Riding Gears', 'riding_gears', null, [
			getItem('T-Shirt', '9'),
			getItem('Hand Gloves', '10'),
			getItem('Riding Jacket', '11'),
			getItem('Riding Shoes', '12'),
			getItem('BackPack', '13'),
		]),
		getItem('Test Nested Menu', 'sub2', null, [
			getItem('Option 5', '5'),
			getItem('Option 6', '6'),
			getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
		]),
	];

	// submenu keys of first level
	const rootSubmenuKeys = ['accessories', 'riding_gears', 'sub2'];

	const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	return (
		<Menu
			className="py-5"
			style={{ minHeight: '660px' }}
			mode="vertical"
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			items={
				items

				// 	[
				// 	{ key: 1, label: 'Helmet', className: 'm-0', icon: <TbHelmet />, onClick: () => navigate(PUBLIC_ROUTE.HELMET) },
				// 	{
				// 		key: 2,
				// 		label: 'Engine Oil',
				// 		className: 'm-0',
				// 		icon: <RiOilLine />,
				// 		onClick: () => navigate(PUBLIC_ROUTE.ENGINE_OIL),
				// 	},
				// 	{
				// 		key: 3,
				// 		label: 'Riding Gears',
				// 		className: 'm-0',
				// 		icon: <GiWinterGloves />,
				// 		children: [
				// 			{ label: 'T-Shirt', key: 'sub-1' },
				// 			{ label: 'Gloves', key: 'Gloves' },
				// 		],
				// 	},
				// 	{
				// 		key: 4,
				// 		label: 'T-Shirt',
				// 		className: 'm-0',
				// 		icon: <RiTShirtAirLine />,
				// 	},
				// 	{ key: 5, label: 'Light', className: 'm-0', icon: <BulbOutlined /> },
				// 	{
				// 		key: 6,
				// 		label: 'Looking Glass',
				// 		className: 'm-0',
				// 		icon: <GiMirrorMirror />,
				// 	},
				// 	{ key: 7, label: 'Horn', className: 'm-0', icon: <GiHornInternal /> },
				// 	{
				// 		key: 8,
				// 		label: 'Sticker',
				// 		className: 'm-0',
				// 		icon: <TbSticker />,
				// 	},
				// 	{
				// 		key: 9,
				// 		label: 'Tank Pad',
				// 		className: 'm-0',
				// 		icon: <TbSticker />,
				// 	},
				// 	{ key: 10, label: 'Lock', className: 'm-0', icon: <RiLock2Line /> },
				// 	{
				// 		key: 11,
				// 		label: 'Seat Cover',
				// 		className: 'm-0',
				// 		icon: <GiCoveredJar />,
				// 	},
				// 	{
				// 		key: 12,
				// 		label: 'Battery',
				// 		className: 'm-0',
				// 		icon: <FaBatteryEmpty />,
				// 	},
				// 	{
				// 		key: 13,
				// 		label: 'Number Plate Holder',
				// 		className: 'm-0',
				// 		icon: <GiCarWheel />,
				// 	},
				// ]
			}
		/>
	);
}
