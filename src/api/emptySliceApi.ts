// Need to use the React-specific entry point to allow generating React hooks
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { variablesFromEnv } from '@/config';
import { RootState } from '@/redux/store';
import { setToken } from '@/redux/authSlice';

// Define a service using a base URL and expected endpoints
const baseQuery: any = fetchBaseQuery({
	baseUrl: variablesFromEnv.BASE_URL,
	prepareHeaders: (headers, { getState }) => {
		const { token } = (getState() as RootState).auth;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api: any,
	extraOptions,
) => {
	let result = await baseQuery(args, api, extraOptions);
	if ((result?.error && result?.error?.status === 401) || result?.error?.status === 403) {
		// try to get a new token
		const refreshResult = await baseQuery(
			{
				url: '/refresh-token',
				method: 'POST',
				body: {
					refreshToken: api.getState()?.auth?.refreshToken,
				},
			},
			api,
			extraOptions,
		);
		if (refreshResult?.data?.accessToken) {
			api.dispatch(setToken(refreshResult?.data?.accessToken));
			result = await baseQuery(args, api, extraOptions);
		}
	}
	return result;
};
export const emptySliceApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
