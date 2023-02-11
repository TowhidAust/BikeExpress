import { emptySliceApi } from '@/api/emptySliceApi';

export interface LoginResponseType {
	status: string;
	token: string;
	message: string;
	result: {
		_id: any;
		firstname: number;
		lastname: string;
		phone: string;
		role: string;
	};
}

export interface LoginQueryType {
	phone: string;
	password: string;
}

export const authApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponseType, LoginQueryType>({
			query: (payload) => ({
				method: 'POST',
				url: '/login',
				body: payload,
			}),
		}),
	}),
});

export const { useLoginMutation } = authApiSlice;
