import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

type MenuItem = Required<MenuProps>['items'][number];

type PropTypes = {
	insideDrawer: boolean;
};

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
	onClick?: () => any,
	onTitleClick?: () => any,
): MenuItem {
	return {
		label,
		key,
		icon,
		children,
		type,
		onClick,
		onTitleClick,
		popupClassName: 'ant-submenu-popup',
	} as MenuItem;
}

export default function BannerLeftMenu(props: PropTypes) {
	const [openKeys, setOpenKeys] = useState(['sub1']);
	const navigate = useNavigate();
	const { insideDrawer } = props;

	const items: MenuItem[] = [
		getItem('Helmet', 'helmet', undefined, [
			getItem('All Helmet', 'all_helmet', undefined, undefined, undefined, () => navigate(PUBLIC_ROUTE.HELMET)),
			getItem('Helmet Accessories', 'helmet_accessories', undefined, undefined, undefined, () =>
				navigate(PUBLIC_ROUTE.HELMET_ACCESSORIES),
			),
			getItem('Full Face Helmet', 'full_face_helmet', undefined, undefined, undefined, () =>
				navigate(`${PUBLIC_ROUTE.HELMET}?helmet-type=full_face_helmet`),
			),
			getItem('Half Face Helmet', 'half_face_helmet', undefined, undefined, undefined, () =>
				navigate(`${PUBLIC_ROUTE.HELMET}?helmet-type=half_face_helmet`),
			),
			getItem('Flip Up Helmet', 'flip_up_helmet', undefined, undefined, undefined, () =>
				navigate(`${PUBLIC_ROUTE.HELMET}?helmet-type=flip_up_helmet`),
			),
			getItem('Modular Helmet', 'modular_helmet', undefined, undefined, undefined, () =>
				navigate(`${PUBLIC_ROUTE.HELMET}?helmet-type=modular_helmet`),
			),
			getItem('Jet Helmet', 'jet_helmet', undefined, undefined, undefined, () =>
				navigate(`${PUBLIC_ROUTE.HELMET}?helmet-type=jet_helmet`),
			),
		]),

		getItem('Engine Oil', 'engine_oil', undefined, undefined, undefined, () => navigate(PUBLIC_ROUTE.ENGINE_OIL)),
		// getItem('Looking Glass', 'looking_glass'),
		getItem('Lock & Security', 'lock', undefined, undefined, undefined, () => navigate(PUBLIC_ROUTE.SECURITY_LOCK)),

		getItem('Electronics', 'electronics', null, [
			getItem('Communicator', '9'),
			getItem('Action Camera', '10'),
			getItem('Smart Watch', '11'),
			getItem('Odometer', '12'),
		]),

		getItem('Back & Pack', 'backpack', null, [
			getItem('Wallet', '5'),
			getItem('Backpack', '6'),
			getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
		]),

		getItem('Riding Gears', 'riding_gears', null, [
			getItem('Hand Gloves', 'hand_gloves'),
			getItem('Riding Jacket', 'riding_jacket'),
			getItem('Shoes', 'shoes'),
			getItem('Rain Coat', 'rain_coat'),
		]),

		getItem('Accessories', 'accessories', null, [
			getItem('Looking Glass', 'looking_glass'),
			getItem('Horn', 'horn'),
			getItem('Light', 'light'),
			getItem('Clutch Liver', 'clutch_liver'),
			getItem('Break Liver', 'break_liver'),
			getItem('Mobile Holder', 'mobile_holder'),
			getItem('Engine Guard', 'engine_guard'),
			getItem('Quick Throttle', 'quick_throttle'),
			getItem('Handle Bar', 'handle_bar'),
			getItem('Sticker', 'sticker'),
			getItem('Break Pad', 'break_pad'),
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
			className="pt-5 pb-5 app-border-radius"
			style={{ height: !insideDrawer ? '450px' : 'unset', overflow: 'auto' }}
			mode={window.innerWidth > 768 && !insideDrawer ? 'vertical' : 'inline'}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			items={items}
		/>
	);
}
