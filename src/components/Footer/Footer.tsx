import { Divider, Layout } from 'antd';

const { Footer } = Layout;
export default function AppFooter() {
	return (
		<Footer style={{ textAlign: 'center' }}>
			<Divider />
			<div>©2022 Created by Md. Towhidul Islam </div>
			<div>towhidaustcse33@gmail.com</div>
		</Footer>
	);
}
