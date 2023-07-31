import { emptySliceApi } from '@/api/emptySliceApi';

export interface GetHelmetListResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface GetHelmetListQueryType {
	category?: string;
	id?: string;
	page: number;
	pageSize: number;
}

export const getHelmetListApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getHelmetList: builder.query<GetHelmetListResponseType, GetHelmetListQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/get-products?category=${data?.category}&page=${data?.page}&pageSize=${data?.pageSize}`,
			}),
		}),
	}),
});

export const { useGetHelmetListQuery } = getHelmetListApiSlice;
