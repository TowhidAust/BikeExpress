import { ConfigProvider } from 'antd';
import AppRoutes from './router';
import './App.css';
import './styles/scss/index.scss';

function MyApp() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#059669',
					colorLink: '#059669',
					// borderRadius: 0,
					boxShadow: 'none',
				},
				components: {
					Input: {
						lineHeightLG: 2.5,
						// borderRadiusLG: 10,
					},
					Select: {
						controlHeightLG: 50,
						// borderRadiusLG: 10,
					},
					Button: {
						controlHeightLG: 50,
						// colorPrimary: 'darkred',
						// colorPrimaryHover: 'rgba(0,0,0,0.85)',
						// colorPrimaryActive: 'black',
					},
				},
			}}
		>
			<AppRoutes />
		</ConfigProvider>
	);
}

export default MyApp;
