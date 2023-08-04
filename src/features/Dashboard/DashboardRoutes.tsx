import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PRIVATE_ROUTE } from '@/router/appRoutes';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

const HomePage = lazy(() => import('@/pages/UsedBikes/UsedBikesPage'));
// const BookingsPage = lazy(() => import('@/pages/Doctor/MyBookingsPage'));

export default function DashboardRoutes() {
	const routes = [
		{
			path: PRIVATE_ROUTE.HOME,
			component: HomePage,
		},
	];
	return (
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
			<Routes>
				{routes.map((route) => (
					<Route key={route?.path} path={`${route.path}`} element={<route.component />} />
				))}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
}
