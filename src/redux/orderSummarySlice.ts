import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemsType = {
	hasSku: boolean;
	productId: string;
	variantId: string;
	sizeId: string;
	quantity: number;
	price: undefined | null | number;
	productName: undefined | null | String;
	discount: undefined | null | number;
};

type InitialStateType = {
	userId: undefined | null | string;
	items: undefined | null | ItemsType[];
};

const initialState: InitialStateType = {
	userId: null,
	items: [],
};

export const orderSummarySlice = createSlice({
	name: 'orderSummary',
	initialState,
	reducers: {
		setOrderSummary: (state, action: PayloadAction<InitialStateType>) => {
			state.userId = action.payload.userId;
			state.items = action.payload.items;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOrderSummary } = orderSummarySlice.actions;

export default orderSummarySlice.reducer;
