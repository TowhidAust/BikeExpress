import { emptySliceApi } from '@/api/emptySliceApi';

export interface LoginResponseType {
	status: string;
	token: string;
	result: {
		id: String;
		firstname: number;
		lastname: string;
		phone: string;
	};
}

export const authApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.query<LoginResponseType, void>({
			query: () => ({
				method: 'GET',
				url: '/login',
			}),
		}),
	}),
});

export const { useLoginQuery } = authApiSlice;
