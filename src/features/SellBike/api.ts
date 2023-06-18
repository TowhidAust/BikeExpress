import { emptySliceApi } from '@/api/emptySliceApi';

export interface SellBikeResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface SellBikeQueryType {
	userId: string;
	title: string;
	imageUrl: string[];
	brand: string;
	price: string;
	publishYear: string;
	kilometerRun: string;
	owner: string;
	division: string;
	district: string;
	cc: string;
	condition: string;
	description: string;
	isNegotiate: string;
	isReviewed: string;
	frontBrake: string;
	rareBrake: string;
	frontTire: string;
	rareTire: string;
}

export interface UploadImageResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface UploadImageQueryType {
	userId: string;
	file: FormData;
}

export const sellBikeApiSlice = emptySliceApi.injectEndpoints({
	endpoints: (builder) => ({
		sellBikeMutation: builder.mutation<SellBikeResponseType, SellBikeQueryType>({
			query: (payload) => ({
				method: 'POST',
				url: '/list-bike',
				body: payload,
			}),
		}),
		uploadImage: builder.mutation<UploadImageResponseType, UploadImageQueryType>({
			query: (payload) => ({
				method: 'POST',
				url: `/upload/multiple?userId=${payload?.userId}`,
				body: payload?.file,
			}),
		}),
	}),
});

export const { useSellBikeMutationMutation, useUploadImageMutation } = sellBikeApiSlice;
