import GlobalStyle from './styles/globalStyle';
import './styles/less/App.less';
import AppRoutes from './router';
import LandingPage from './features/LandingPage';

function App() {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
			<LandingPage />
		</>
	);
}

export default App;
