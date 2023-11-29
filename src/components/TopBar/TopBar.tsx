import { Affix, Button, Card, Col, Drawer, Dropdown, Layout, Menu, Row, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '@/router/appRoutes';
import { RootState } from '@/redux/store';
import { setCurrentActiveMenu } from '@/redux/activeMenubarSlice';
import Logo from '../Logo/Logo';
import { logout } from '@/redux/authSlice';
import BannerLeftMenu from '@/features/LandingPage/BannerMenu/BannerLeftMenu';

const { Header } = Layout;

export default function TopBar() {
	const { activeMenu, auth } = useSelector((state: RootState) => state);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = auth;
	const firstname = user?.firstname;
	const items: MenuProps['items'] = [
		{
			label: <Typography.Text>User Settings</Typography.Text>,
			key: '0',
			onClick: () => navigate(PRIVATE_ROUTE.USER_DETAILS),
		},
		{
			label: <Typography.Text>Logout</Typography.Text>,
			key: '1',
			onClick: () => {
				dispatch(logout());
				sessionStorage.clear();
				navigate(PUBLIC_ROUTE.SIGNUP);
			},
		},
	];

	const onDrawerClose = () => {
		setDrawerOpen(false);
	};

	return (
		<div>
			<Header className="pl-4 pr-4" style={{ background: 'black', width: '100%', height: 'auto' }}>
				<Row gutter={[16, 16]} align="middle" justify="space-between">
					<Col xs={24} sm={24} md={6}>
						<Logo fontColor="white" width={150} fontSize={15} iconFontSize={20} />
					</Col>
				</Row>
			</Header>
			<Affix offsetTop={0} className="width-100">
				<Card className="m-0 p-0" style={{ borderRadius: 0 }} bodyStyle={{ margin: 0, padding: 0 }}>
					<Row justify="space-between">
						<Col xs={24} sm={24} md={18}>
							<Menu
								theme="light"
								mode="horizontal"
								defaultSelectedKeys={[activeMenu.currentActiveMenu]}
								items={[
									{
										key: 'menu',
										label: <MenuOutlined />,
										onClick: () => {
											setDrawerOpen(true);
										},
									},
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
											navigate(PUBLIC_ROUTE.SELL_BIKE_PAGE);
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
										key: 'bikeService',
										label: 'Bike Service',
										onClick: () => {
											navigate(PUBLIC_ROUTE.BIKE_SERVICE);
											dispatch(setCurrentActiveMenu('bikeService'));
										},
									},
									{
										key: 'blog',
										label: 'Blog',
										onClick: () => {
											navigate(PUBLIC_ROUTE.BLOG);
											dispatch(setCurrentActiveMenu('blog'));
										},
									},
									{
										key: 'faq',
										label: 'FAQ',
										onClick: () => {
											navigate(PUBLIC_ROUTE.FAQ);
											dispatch(setCurrentActiveMenu('faq'));
										},
									},
								]}
							/>
						</Col>
						<Col xs={24} sm={24} md={4} style={{ textAlign: 'center' }}>
							{!firstname ? (
								<Button
									className="mt-1"
									block
									type="link"
									icon={<UserOutlined />}
									onClick={() => {
										navigate(PUBLIC_ROUTE.SIGNUP);
									}}
								>
									Login
								</Button>
							) : (
								<Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
									<Button
										type="link"
										// block
										style={{
											marginTop: '5px',
											maxWidth: '220px',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											whiteSpace: 'nowrap',
											textDecoration: 'none',
										}}
									>
										<abbr>{firstname}</abbr>
										<DownOutlined className="ml-2" />
									</Button>
								</Dropdown>
							)}
						</Col>
					</Row>
				</Card>
			</Affix>

			<Drawer title="Categories" placement="left" onClose={onDrawerClose} open={drawerOpen} bodyStyle={{ padding: 0 }}>
				<BannerLeftMenu insideDrawer={drawerOpen} />
			</Drawer>
		</div>
	);
}
