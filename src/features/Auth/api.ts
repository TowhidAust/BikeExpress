import { emptySliceApi } from '@/api/emptySliceApi';

export interface LoginResponseType {
	status: string;
	message: string;
	accessToken: string;
	refreshToken: string;
	result: {
		id: any;
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

export interface SignupResponseType {
	status: string;
	message: string;
	token: string;
	result: {
		_id: string;
		firstname: number;
		lastname: string;
		phone: string;
		role: string;
		createdAt: string;
	};
}

export interface SignupQueryType {
	firstname: string;
	lastname: string;
	role: string[];
	phone: string;
	password: string;
	confirmPassword: string;
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
		signup: builder.mutation<SignupResponseType, SignupQueryType>({
			query: (payload) => ({
				method: 'POST',
				url: '/signup',
				body: payload,
			}),
		}),
	}),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
