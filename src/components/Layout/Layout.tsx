import React from 'react';
import { Layout, Menu } from 'antd';
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const { Header, Content, Footer, Sider } = Layout;

function AppLayout(props: { children: any }) {
	const { children } = props;
	// const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<Layout>
			<Sider
				theme="light"
				// style={{ height: '100vh' }}
				breakpoint="lg"
				collapsedWidth="0"
			>
				<div className="logo">===Logo===</div>
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={['4']}
					items={[
						UserOutlined,
						VideoCameraOutlined,
						UploadOutlined,
						UserOutlined,
					].map((icon, index) => ({
						key: String(index + 1),
						icon: React.createElement(icon),
						label: `nav ${index + 1}`,
					}))}
				/>
			</Sider>
			<Layout>
				<Header
					className="site-layout-sub-header-background"
					style={{
						padding: 0,
						background: 'white',
					}}
				>
					<LanguageSwitcher />
					this is header
				</Header>
				<Content
					style={{
						margin: '24px 16px 0',
					}}
				>
					<div
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						{children}
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

export default AppLayout;
