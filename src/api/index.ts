import { emptySliceApi } from '@/api/emptySliceApi';

export interface GetProductListByIdResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface GetProductListByIdQueryType {
	id?: any;
	category?: string;
	page?: number;
	pageSize?: number;
}

export const getProductsApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query<GetProductListByIdResponseType, GetProductListByIdQueryType>({
			query: (data) => ({
				method: 'GET',
				url: '/get-products',
				params: {
					id: data?.id,
					category: data?.category,
					page: data?.page,
					pageSize: data?.pageSize,
				},
			}),
		}),
	}),
});

export const { useGetProductsQuery } = getProductsApiSlice;
