import { Layout, Menu } from 'antd';
import { FaMotorcycle } from 'react-icons/fa';

const { Header } = Layout;

export default function TopBar() {
	return (
		<>
			<Header
				className="pl-4 pr-4"
				style={{ backgroundColor: 'black', width: '100%' }}
			>
				<div className="logo" style={{ color: 'white' }}>
					<h1
						className="font-white"
						style={{
							width: '150px',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						BIKE{' '}
						<FaMotorcycle
							className="ml-2 mr-2"
							color="red"
							style={{ fontSize: '26px' }}
						/>{' '}
						HUB
					</h1>
				</div>
			</Header>
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={[
					{ key: 1, label: 'Home' },
					{ key: 2, label: 'Sell Bike' },
					{ key: 3, label: 'Buy Used Bike' },
					{ key: 4, label: 'Buy New Bike' },
					{ key: 5, label: 'Home' },
				]}
			/>
		</>
	);
}
