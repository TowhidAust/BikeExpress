import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import GlobalStyle from './styles/globalStyle';
import './styles/less/App.less';
import AppLayout from './components/Layout/Layout';

function App() {
	const { t } = useTranslation();
	return (
		<AppLayout>
			<GlobalStyle />
			<div>
				<Button type="primary">Button</Button>
				<h1 className="mt-5">{t('welcome_to_react')}</h1>
			</div>
		</AppLayout>
	);
}

export default App;
