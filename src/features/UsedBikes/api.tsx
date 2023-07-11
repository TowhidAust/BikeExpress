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

export interface UsedBikeDetailsQueryType {
	bikeId: string | undefined;
}

export const usedBikesApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsedBikesList: builder.query<UsedBikeListResponseType, UsedBikeListQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/used-bike-list?page=${data?.page}&pageSize=${data?.pageSize}`,
			}),
		}),
		bikeDetails: builder.query<UsedBikeListResponseType, UsedBikeDetailsQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/used-bike-details/${data?.bikeId}`,
			}),
		}),
	}),
});

export const { useGetUsedBikesListQuery, useBikeDetailsQuery } = usedBikesApiSlice;
