import { logout } from './authSlice';

export const globalErrorHandling = (api: any, action: any) => {
	const responseData = action?.payload?.data;
	if (responseData) {
		if (responseData.status === 403) {
			api.dispatch(logout());
		}
	}
};
