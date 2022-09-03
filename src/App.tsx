import GlobalStyle from './styles/globalStyle';
import './styles/less/App.less';
import AppRoutes from './router';

function App() {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
		</>
	);
}

export default App;
