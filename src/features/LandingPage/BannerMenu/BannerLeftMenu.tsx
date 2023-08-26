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
		style: {},
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

		getItem('Electronics', 'electronics', null, [
			getItem('Communicator', '9'),
			getItem('Action Camera', '10'),
			getItem('Camera Mount', '11'),
			getItem('Odometer', '12'),
		]),
		getItem('Back & Pack', 'backpack', null, [
			getItem('Wallet', '5'),
			getItem('Backpack', '6'),
			getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
		]),
	];

	// submenu keys of first level
	const rootSubmenuKeys = ['accessories', 'electronics', 'backpack'];

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
			className=""
			style={{ minHeight: '660px', borderRadius: 8 }}
			mode={window.innerWidth > 768 ? 'vertical' : 'inline'}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			items={items}
		/>
	);
}
