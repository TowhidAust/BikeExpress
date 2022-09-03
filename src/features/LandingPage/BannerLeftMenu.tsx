import { Menu } from 'antd';

export default function BannerLeftMenu() {
	return (
		<Menu
			mode="inline"
			// style={{ width: 256 }}
			items={[
				{ key: 1, label: 'Helmet', className: 'm-0' },
				{ key: 2, label: 'Riding Gears', className: 'm-0' },
				{ key: 3, label: 'T-Shirt', className: 'm-0' },
				{ key: 4, label: 'Light', className: 'm-0' },
				{ key: 5, label: 'Looking Glass', className: 'm-0' },
				{ key: 6, label: 'Horn', className: 'm-0' },
				{ key: 7, label: 'Sticker', className: 'm-0' },
				{ key: 8, label: 'Shoe', className: 'm-0' },
				{ key: 9, label: 'Shoe', className: 'm-0' },
				{ key: 10, label: 'Shoe', className: 'm-0' },
			]}
		/>
	);
}
