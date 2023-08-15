import { Affix, Button, Card, Col, Dropdown, Input, Layout, Menu, Row, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '@/router/appRoutes';
import { RootState } from '@/redux/store';
import { setCurrentActiveMenu } from '@/redux/activeMenubarSlice';
import Logo from '../Logo/Logo';
import { logout } from '@/redux/authSlice';

const { Header } = Layout;

export default function TopBar() {
	const { activeMenu, auth } = useSelector((state: RootState) => state);
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

	return (
		<div>
			<Header className="pl-4 pr-4" style={{ background: 'black', width: '100%', height: 'auto' }}>
				<Row gutter={[16, 16]} align="middle" justify="space-between">
					<Col xs={24} sm={24} md={6}>
						<Logo fontColor="white" width={160} fontSize={18} iconFontSize={22} />
					</Col>
					<Col xs={24} sm={24} md={6}>
						<Input.Search className="mt-3" placeholder="search" size="middle" />
					</Col>
				</Row>
			</Header>
			<Affix offsetTop={0} className="width-100">
				<Card className="m-0 p-0" bodyStyle={{ margin: 0, padding: 0 }}>
					<Row justify="space-between">
						<Col xs={24} sm={24} md={18}>
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
						<Col className="text-right" xs={24} sm={24} md={4}>
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
								<Dropdown menu={{ items }} trigger={['click']}>
									<Button
										className="mt-1"
										type="link"
										block
										style={{
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
		</div>
	);
}
