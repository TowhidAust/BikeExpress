import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_ROUTE } from './appRoutes';

export default function PrivateOutlet() {
	const token = 'tokenABC';
	return token ? <Outlet /> : <Navigate to={PUBLIC_ROUTE.SIGNUP} replace />;
}
