/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Avatar, Badge, Button, Col, Dropdown, Layout, Menu, Row, Space, Tag } from 'antd';
import {
	DashboardOutlined,
	AccountBookOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MessageOutlined,
	NotificationOutlined,
	DownOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTE } from '@/router/appRoutes';
import DashboardRoutes from '@/features/Dashboard/DashboardRoutes';
import logo from '@/assets/logo.svg';
import avatar from '@/assets/avatar.svg';

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const handleMenuItemClick = (value: any) => {
		navigate(value?.key);
	};
	const menu = (
		<Menu
			items={[
				{
					label: <a>My Profile</a>,
					key: '0',
				},
				{
					label: <a href="https://www.aliyun.com">Change Password</a>,
					key: '1',
				},
				{
					type: 'divider',
				},
				{
					label: 'Logout',
					key: '3',
				},
			]}
		/>
	);
	return (
		<Layout>
			<Sider
				className="layout-bg"
				width={240}
				collapsed={isCollapsed}
				// theme="light"
				style={{
					overflow: 'auto',
					height: '100vh',
				}}
			>
				<Row className="logo p-3" align="bottom">
					<Col>
						<img src={logo} alt="logo" style={{ width: '100%' }} />
					</Col>
					<Col>
						<Tag className="ml-1" color="#004282">
							Doctor
						</Tag>
					</Col>
				</Row>
				<Menu
					className="mt-5 custom-side-bar layout-bg"
					onClick={handleMenuItemClick}
					mode="inline"
					theme="dark"
					defaultSelectedKeys={[location?.pathname]}
					items={[
						{
							label: <div style={{ fontWeight: '600' }}> Dashboard </div>,
							key: PRIVATE_ROUTE.HOME,
							icon: <DashboardOutlined style={{ fontSize: '18px' }} />,
						},
						{
							label: <div style={{ fontWeight: '600' }}>My Bookings</div>,
							key: PRIVATE_ROUTE.BOOKINGS,
							icon: <AccountBookOutlined style={{ fontSize: '18px' }} />,
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header className="white-bg" style={{ height: 'auto' }}>
					<Row gutter={16}>
						<Col lg={12}>
							{isCollapsed ? (
								<MenuUnfoldOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
							) : (
								<MenuFoldOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
							)}
						</Col>
						<Col lg={12}>
							<Row gutter={16} justify="end">
								<Col lg={8}>
									<Tag className="layout-bg font-weight-600 pl-4 pr-4 py-2 border-radius-20">
										10:37 PM • Aug 22, 2022
									</Tag>
								</Col>
								<Col lg={2}>
									<Badge count={2} color="#F97316" offset={[0, 20]}>
										<Avatar
											className="border-solid-1px white-bg"
											shape="circle"
											size="small"
											icon={<MessageOutlined className="fourth-font-color" />}
										/>
									</Badge>
								</Col>
								<Col lg={2}>
									<Badge count={2} color="#F97316" offset={[0, 20]}>
										<Avatar
											className="border-solid-1px white-bg"
											shape="circle"
											size="small"
											icon={<NotificationOutlined className="fourth-font-color" />}
										/>
									</Badge>
								</Col>
								<Col lg={2}>
									<Avatar src={avatar} shape="circle" size="large" />
								</Col>
								<Col lg={3}>
									<Dropdown overlay={menu} trigger={['click']}>
										<Button
											className="p-0 sixth-font-color font-weight-600"
											type="link"
											onClick={(e) => e.preventDefault()}
										>
											<Space>
												John Doe
												<DownOutlined />
											</Space>
										</Button>
									</Dropdown>
								</Col>
							</Row>
						</Col>
					</Row>
				</Header>
				<Content
					style={{
						margin: '24px 16px 0',
						overflow: 'initial',
					}}
				>
					<div
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						<DashboardRoutes />
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
}

export default Dashboard;
