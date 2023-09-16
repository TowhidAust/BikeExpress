import { Layout, Menu, theme, ConfigProvider, Button, Typography } from 'antd';
import { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { PRIVATE_ROUTE } from '@/router/appRoutes';
import DashboardRoutes from './DashboardRoutes';

const { Header, Content, Sider } = Layout;

export default function DashboardLayout() {
	const [collapsed, setCollapsed] = useState(false);
	const [activeMenuKey, setActiveMenuKey] = useState<string>('1');
	const navigate = useNavigate();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: 'rgb(3, 105, 161)',
					colorLink: 'rgb(3, 105, 161)',
					boxShadow: 'none',
				},
				components: {
					Input: {
						lineHeightLG: 2.5,
					},
					Select: {
						controlHeightLG: 50,
					},
					Button: {
						controlHeightLG: 50,
					},
				},
			}}
		>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed} theme="light" width={200}>
					{!collapsed && (
						<div
							style={{
								padding: '10px 10px 10px 28px',
								display: 'flex',
								flexFlow: 'wrap',
								justifyContent: 'start',
								alignItems: 'start',
								backgroundColor: 'black',
								flexDirection: 'column',
							}}
						>
							<div>
								<Logo fontColor="white" width="100%" fontSize={14} iconFontSize={20} />
							</div>
							<div style={{ color: 'white', width: '100%' }}>
								<Typography.Text className="primary-font-color" type="success">
									Admin
								</Typography.Text>
							</div>
						</div>
					)}

					<Menu
						theme="light"
						mode="inline"
						defaultSelectedKeys={[activeMenuKey]}
						items={[
							{
								className: 'rounded-none',
								key: '1',
								icon: <UserOutlined />,
								label: 'Dashboard',
								style: { marginLeft: 0, marginRight: 0, width: '100%' },
								onClick: () => {
									navigate(PRIVATE_ROUTE.DASHBOARD);
									setActiveMenuKey('1');
								},
							},
							{
								className: 'rounded-none',
								key: '2',
								icon: <VideoCameraOutlined />,
								label: 'Orders',
								style: { marginLeft: 0, marginRight: 0, width: '100%' },
							},
							{
								className: 'rounded-none',
								key: '3',
								icon: <UploadOutlined />,
								label: 'Product Listing',
								style: { marginLeft: 0, marginRight: 0, width: '100%' },
								onClick: () => {
									navigate(PRIVATE_ROUTE.PRODUCT_LISTING);
									setActiveMenuKey('3');
								},
							},
						]}
					/>
				</Sider>
				<Layout>
					<Header style={{ padding: 0, background: colorBgContainer }}>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>
					</Header>
					<Content
						style={{
							// margin: '10px',
							padding: 20,
							minHeight: '85vh',
							// background: colorBgContainer,
						}}
					>
						<DashboardRoutes />
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
}
