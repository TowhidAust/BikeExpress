import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_ROUTE } from './appRoutes';

export default function PrivateOutlet() {
	const token = '';
	return token ? <Outlet /> : <Navigate to={PUBLIC_ROUTE.LANDING} replace />;
}
