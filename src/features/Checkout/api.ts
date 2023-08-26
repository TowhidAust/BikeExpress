import { emptySliceApi } from '@/api/emptySliceApi';

export interface CommonResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface CreateOrderQueryType {
	userId: string;
	paymentMethod: boolean;
	paymentStatus: boolean;
	deliveryStatus: boolean;
	transactionEntryLogId?: string;
	items: {
		hasSku: boolean;
		productId: string;
		variantId: string;
		sizeId: string;
		quantity: number;
	}[];
}

export const createOrderApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation<CommonResponseType, CreateOrderQueryType>({
			query: (data) => ({
				method: 'POST',
				url: '/create-order',
				body: data,
			}),
		}),
	}),
});

export const { useCreateOrderMutation } = createOrderApiSlice;
