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
			<TopBar />
			<Content className="layout-content-padding">{children}</Content>
			<AppFooter />
		</Layout>
	);
}
