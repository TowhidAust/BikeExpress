import { emptySliceApi } from '@/api/emptySliceApi';

export interface UsedBikeListResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface UsedBikeListQueryType {
	page: number;
	pageSize: number;
}

export const usedBikesApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsedBikesList: builder.query<UsedBikeListResponseType, UsedBikeListQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/used-bike-list?page=${data?.page}&pageSize=${data?.pageSize}`,
			}),
		}),
	}),
});

export const { useGetUsedBikesListQuery } = usedBikesApiSlice;
