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
					colorLink: '#059669',
					borderRadius: 3,
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
						colorPrimary: 'black',
						colorPrimaryHover: 'rgba(0,0,0,0.85)',
					},
				},
			}}
		>
			<AppRoutes />
		</ConfigProvider>
	);
}

export default App;
