import { Affix, Button, Card, Col, Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import { RootState } from '@/redux/store';
import { setCurrentActiveMenu } from '@/redux/activeMenubarSlice';
import Logo from '../Logo/Logo';

const { Header } = Layout;

export default function TopBar() {
	const { activeMenu, auth } = useSelector((state: RootState) => state);
	const { user } = auth;
	const { firstname } = user;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<div>
			<Header className="pl-4 pr-4" style={{ background: 'black', width: '100%', height: 'auto' }}>
				<Row gutter={[16, 16]} align="middle" justify="space-between">
					<Col xs={24} sm={24} md={6}>
						<Logo fontColor="white" width={120} fontSize={18} iconFontSize={26} />
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
						<Col xs={24} sm={24} md={6}>
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
								<Button className="mt-1" block type="link" icon={<UserOutlined />}>
									{firstname}
								</Button>
							)}
						</Col>
					</Row>
				</Card>
			</Affix>
		</div>
	);
}
