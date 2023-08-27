import { Layout } from 'antd';

import TopBar from '../TopBar/TopBar';
import AppFooter from '../Footer/Footer';

const { Content } = Layout;

type PropTypes = {
	children: any;
};

export default function AppLayout(props: PropTypes) {
	const { children } = props;
	return (
		<Layout>
			<Content style={{ minHeight: '100vh' }}>
				<TopBar />
				<Content className="layout-content-padding">{children}</Content>
				<AppFooter />
			</Content>
		</Layout>
	);
}
