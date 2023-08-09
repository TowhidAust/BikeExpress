import { emptySliceApi } from '@/api/emptySliceApi';
import { UserModel } from '@/models';

export interface UserDetailsResponseType {
	status: string;
	message: string;
	result?: UserModel;
}

export interface UserDetailsQueryType {
	userId: string;
}

export interface UpdateUserQueryType {
	userId: string;
	payload: UserModel;
}

export const userDetailsApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserDetails: builder.query<UserDetailsResponseType, UserDetailsQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/get-user-details/${data?.userId}`,
			}),
		}),
		updateUserDetails: builder.mutation<UserDetailsResponseType, UpdateUserQueryType>({
			query: (data) => ({
				method: 'PATCH',
				url: `/update-user/${data?.userId}`,
				body: data?.payload,
			}),
		}),
	}),
});

export const { useGetUserDetailsQuery, useUpdateUserDetailsMutation } = userDetailsApiSlice;
