import { emptySliceApi } from '@/api/emptySliceApi';

export interface SellBikeResponseType {
	status: string;
	message: string;
	result?: any;
}

export interface SellBikeQueryType {
	userId: String;
	images: String[];
	bikeCode?: string;
	price: string;
	isNegotiable: boolean;
	cc: number;
	bikeName: String;
	bikeBrand: String;
	registrationZone: String;
	yearOfRegistration: String;
	kmRun: String;
	durationOfRegistration: String;
	bikeModelYear: String;
	isAccidentHistory: String;
	ownerShipStatus: String;
	division: String;
	phone: String;
	address: String;
	detailDescription: String;
	district: String;
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
