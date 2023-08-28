import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PRIVATE_ROUTE } from '@/router/appRoutes';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

const DashboardPage = lazy(() => import('@/pages/Admin/Dashboard/DashboardPage'));
const ProductListingPage = lazy(() => import('@/pages/Admin/ProductListing/ProductListingPage'));

export default function DashboardRoutes() {
	const routes = [
		{
			path: PRIVATE_ROUTE.DASHBOARD,
			component: DashboardPage,
		},
		{
			path: PRIVATE_ROUTE.PRODUCT_LISTING,
			component: ProductListingPage,
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
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
}
