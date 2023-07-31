import { Spin } from 'antd';

export default function PageSpinner() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Spin />
		</div>
	);
}
