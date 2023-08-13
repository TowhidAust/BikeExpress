import { emptySliceApi } from '@/api/emptySliceApi';
import { ProductVariantModel } from '@/models/ProductDetailsWithSkuModel';

export interface GetHelmetListResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface GetProdVariantResponseType {
	status: string;
	message: string;
	result: ProductVariantModel[];
}

export interface GetHelmetListQueryType {
	category?: string;
	id?: string;
	page: number;
	pageSize: number;
}

export interface GetProdVariantQueryType {
	productId: string;
}

export const getHelmetListApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		getHelmetList: builder.query<GetHelmetListResponseType, GetHelmetListQueryType>({
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

		getProductVariants: builder.query<GetProdVariantResponseType, GetProdVariantQueryType>({
			query: (data) => ({
				method: 'GET',
				url: `/get-product-variants/${data?.productId}`,
			}),
		}),
	}),
});

export const { useGetHelmetListQuery, useGetProductVariantsQuery } = getHelmetListApiSlice;
