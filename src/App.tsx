import { ConfigProvider } from 'antd';
import AppRoutes from './router';
import './App.css';
import './styles/scss/index.scss';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '059669',
					borderRadius: 0,
				},
			}}
		>
			<AppRoutes />
		</ConfigProvider>
	);
}

export default App;
