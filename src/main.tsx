/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react';
import { Spin } from 'antd';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import App from './App';

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
			<div className="text-center mt-5">
				<Spin />
			</div>
		}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Suspense>,
);
