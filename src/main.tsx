/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react';
import { Spin } from 'antd';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store } from './redux/store';
import './index.css';

const persistor = persistStore(store);

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['en', 'bn'],
		fallbackLng: 'en',
		detection: {
			order: [
				'cookie',
				'htmlTag',
				'querystring',
				'localStorage',
				'sessionStorage',
				'navigator',
				'path',
				'subdomain',
			],
			caches: ['cookie'],
		},
		backend: {
			loadPath: '/src/config/translation/locales/{{lng}}.json',
		},
		// react: { useSuspense: false },
	});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense
		fallback={
			<div
				style={{
					minHeight: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Spin />
			</div>
		}
	>
		<React.StrictMode>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</React.StrictMode>
	</Suspense>,
);
