import { Affix, Col, Input, Layout, Menu, Row } from 'antd';
import { FaMotorcycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import { RootState } from '@/redux/store';
import { setCurrentActiveMenu } from '@/redux/activeMenubarSlice';

const { Header } = Layout;

export default function TopBar() {
	const { activeMenu } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
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
					defaultSelectedKeys={[activeMenu.currentActiveMenu]}
					items={[
						{
							key: 'home',
							label: 'Home',
							onClick: () => {
								dispatch(setCurrentActiveMenu('home'));
								navigate(PUBLIC_ROUTE.LANDING);
							},
						},
						{
							key: 'sellBike',
							label: 'Sell Bike',
							onClick: () => {
								dispatch(setCurrentActiveMenu('sellBike'));
							},
						},
						{
							key: 'buyUsedBike',
							label: 'Buy Used Bike',
							onClick: () => {
								dispatch(setCurrentActiveMenu('buyUsedBike'));
								navigate(PUBLIC_ROUTE.USED_BIKES);
							},
						},
						{
							key: 'buyNewBike',
							label: 'Buy New Bike',
							onClick: () => {
								dispatch(setCurrentActiveMenu('buyNewBike'));
							},
						},
						{
							key: 'bikeService',
							label: 'Bike Service',
							onClick: () => {
								navigate(PUBLIC_ROUTE.SIGNUP);
								dispatch(setCurrentActiveMenu('bikeService'));
							},
						},
					]}
				/>
			</Affix>
		</>
	);
}
