import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from './appRoutes';
import PrivateOutlet from './PrivateOutlet';

const LandingPage = lazy(() => import('@/features/LandingPage'));
const UsedBikes = lazy(() => import('@/pages/UsedBikes/UsedBikesPage'));
const UsedBikeDetails = lazy(() => import('@/pages/UsedBikes/UsedBikeDetailsPage'));
const SignupPage = lazy(() => import('@/pages/Auth/SignupPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));
const SellBikePage = lazy(() => import('@/pages/SellBike/SellBikePage'));
const BlogPage = lazy(() => import('@/pages/Blog/BlogPage'));
const FaqPage = lazy(() => import('@/pages/Faq/FaqPage'));
const BikeServicePage = lazy(() => import('@/pages/BikeService/BikeServicePage'));
const BikeServiceCentersPage = lazy(() => import('@/pages/BikeService/ServiceCentersPage'));
const HelmetPage = lazy(() => import('@/pages/Products/Helmet/HelmetPage'));
const HelmetDetailsPage = lazy(() => import('@/pages/Products/Helmet/HelmetDetailsPage'));
const EngineOilPage = lazy(() => import('@/pages/Products/EngineOil/EngineOilPage'));
const EngineOilDetailsPage = lazy(() => import('@/pages/Products/EngineOil/EngineOilDetailsPage'));
const UserDetailsPage = lazy(() => import('@/pages/UserDetails/UserDetailsPage'));
const CheckoutPage = lazy(() => import('@/pages/Checkout/CheckoutPage'));
const OrderSuccessPage = lazy(() => import('@/pages/Success/OrderSuccessPage'));
const HelmetAccessoriesPage = lazy(() => import('@/pages/Products/Helmet/HelmetAccessoriesPage'));
const HelmetAccessoriesDetailsPage = lazy(() => import('@/pages/Products/Helmet/HelemtAccessoriesDetailsPage'));

// Admins
const DashboardLayout = lazy(() => import('@/components/Layout/DashboardLayout'));

export default function AppRoutes() {
	const publicRoutes = [
		{
			path: PUBLIC_ROUTE.SIGNUP,
			component: SignupPage,
		},

		{
			path: PUBLIC_ROUTE.LANDING,
			component: LandingPage,
		},
		{
			path: PUBLIC_ROUTE.USED_BIKES,
			component: UsedBikes,
		},
		{
			path: PUBLIC_ROUTE.USED_BIKE_DETAILS_ID,
			component: UsedBikeDetails,
		},
		{
			path: PUBLIC_ROUTE.SELL_BIKE_PAGE,
			component: SellBikePage,
		},
		{
			path: PUBLIC_ROUTE.BLOG,
			component: BlogPage,
		},
		{
			path: PUBLIC_ROUTE.FAQ,
			component: FaqPage,
		},
		{
			path: PUBLIC_ROUTE.BIKE_SERVICE,
			component: BikeServicePage,
		},
		{
			path: PUBLIC_ROUTE.HELMET,
			component: HelmetPage,
		},
		{
			path: PUBLIC_ROUTE.HELMET_DETAILS,
			component: HelmetDetailsPage,
		},
		{
			path: PUBLIC_ROUTE.HELMET_ACCESSORIES,
			component: HelmetAccessoriesPage,
		},
		{
			path: PUBLIC_ROUTE.HELMET_ACCESSORIES_DETAILS,
			component: HelmetAccessoriesDetailsPage,
		},
		{
			path: PUBLIC_ROUTE.ENGINE_OIL,
			component: EngineOilPage,
		},
		{
			path: PUBLIC_ROUTE.ENGINE_OIL_DETAILS,
			component: EngineOilDetailsPage,
		},
		{
			path: PUBLIC_ROUTE.BIKE_SERVICE_CENTERS,
			component: BikeServiceCentersPage,
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
			<Router>
				<Routes>
					{publicRoutes.map((route) => (
						<Route key={Math.random()} path={route.path} element={<route.component />} />
					))}

					<Route element={<PrivateOutlet />}>
						<Route path={PRIVATE_ROUTE.USER_DETAILS} element={<UserDetailsPage />} />
						<Route path={PRIVATE_ROUTE.CHECKOUT} element={<CheckoutPage />} />
						<Route path={PRIVATE_ROUTE.ORDER_SUCCESS} element={<OrderSuccessPage />} />

						<Route path="/*" element={<DashboardLayout />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</Suspense>
	);
}
