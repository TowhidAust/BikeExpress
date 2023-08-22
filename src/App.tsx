import { ConfigProvider } from 'antd';
import AppRoutes from './router';
import './App.css';
import './styles/scss/index.scss';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#059669',
					borderRadius: 0,
				},
				components: {
					Input: {
						lineHeightLG: 2.5,
						// borderRadiusLG: 10,
					},
					Select: {
						controlHeightLG: 55,
						// borderRadiusLG: 10,
					},
					Button: {
						controlHeightLG: 55,
					},
				},
			}}
		>
			<AppRoutes />
		</ConfigProvider>
	);
}

export default App;
