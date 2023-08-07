import { emptySliceApi } from '@/api/emptySliceApi';

export interface UserDetailsResponseType {
	status: string;
	message: string;
	result?: {
		firstname: string;
		lastname: string;
		phone: string;
		division: string;
		district: string;
		address: string;
		deliveryLocation: {
			division: string;
			district: string;
			address: string;
		};
	};
}

export interface UserDetailsQueryType {
	userId: string;
}

export const userDetailsApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserDetails: builder.query<UserDetailsResponseType, UserDetailsQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/get-user-details/${data?.userId}`,
			}),
		}),
	}),
});

export const { useGetUserDetailsQuery } = userDetailsApiSlice;
