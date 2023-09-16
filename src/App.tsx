import { ConfigProvider } from 'antd';
import AppRoutes from './router';
import './App.css';
import './styles/scss/index.scss';

function MyApp() {
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
			<AppRoutes />
		</ConfigProvider>
	);
}

export default MyApp;
