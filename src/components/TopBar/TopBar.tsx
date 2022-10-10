import { Affix, Col, Input, Layout, Menu, Row } from 'antd';
import { FaMotorcycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

const { Header } = Layout;

export default function TopBar() {
	const navigate = useNavigate();
	return (
		<>
			<Header
				className="pl-4 pr-4"
				style={{ backgroundColor: 'black', width: '100%', height: 'auto' }}
			>
				<Row gutter={[16, 16]} align="middle">
					<Col xs={24} md={6}>
						<h2
							className="font-white m-0"
							style={{
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<span> BIKE </span>
							<FaMotorcycle
								className="ml-2 mr-2 primary-font-color"
								style={{ fontSize: '26px' }}
							/>
							<span> HUB </span>
						</h2>
					</Col>
					<Col xs={24} md={6}>
						<Input.Search className="mt-3" size="large" enterButton="search" />
					</Col>
				</Row>
			</Header>
			<Affix offsetTop={0} className="width-100">
				<Menu
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: 1,
							label: 'Home',
							onClick: () => navigate(PUBLIC_ROUTE.LANDING),
						},
						{ key: 2, label: 'Sell Bike' },
						{
							key: 3,
							label: 'Buy Used Bike',
							onClick: () => navigate(PUBLIC_ROUTE.USED_BIKES),
						},
						{ key: 4, label: 'Buy New Bike' },
						{ key: 5, label: 'Bike Service' },
					]}
				/>
			</Affix>
		</>
	);
}
