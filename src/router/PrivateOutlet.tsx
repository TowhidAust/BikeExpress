import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PUBLIC_ROUTE } from './appRoutes';
import { RootState } from '@/redux/store';

export default function PrivateOutlet() {
	const { auth } = useSelector((state: RootState) => state);
	const token = auth?.token;
	return token ? <Outlet /> : <Navigate to={PUBLIC_ROUTE.LANDING} replace />;
}
