import { Layout, Menu, theme, ConfigProvider, Button } from 'antd';
import { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import Logo from '../Logo/Logo';

const { Header, Content, Sider } = Layout;

type PropTypes = {
	children: any;
};

export default function DashboardLayout(props: PropTypes) {
	const { children } = props;
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#059669',
					colorLink: '#059669',
					borderRadius: 0,
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
				<Sider trigger={null} collapsible collapsed={collapsed} style={{ background: 'black' }}>
					<div style={{ padding: '10px' }}>
						<Logo fontColor="white" width={150} fontSize={16} iconFontSize={22} />
					</div>
					<Menu
						style={{ background: 'black' }}
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['1']}
						items={[
							{
								key: '1',
								icon: <UserOutlined />,
								label: 'Dashboard',
							},
							{
								key: '2',
								icon: <VideoCameraOutlined />,
								label: 'Orders',
							},
							{
								key: '3',
								icon: <UploadOutlined />,
								label: 'Product Listing',
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
							margin: '24px 16px',
							padding: 24,
							minHeight: '85vh',
							background: colorBgContainer,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
}
