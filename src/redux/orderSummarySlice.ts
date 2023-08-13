import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
	userId: undefined | null | string;
	productId: undefined | null | string;
	hasSku: undefined | null | boolean;
	variantId: undefined | null | string;
	sizeId: undefined | null | string;
	quantity: undefined | null | number;
	productTitle: undefined | null | string;
	size: undefined | null | string;
	price: undefined | null | number;
	discount: undefined | null | number;
};
const initialState: InitialStateType = {
	userId: null,
	productId: null,
	hasSku: null,
	variantId: null,
	sizeId: null,
	quantity: null,
	size: null,
	productTitle: null,
	price: null,
	discount: null,
};

export const orderSummarySlice = createSlice({
	name: 'orderSummary',
	initialState,
	reducers: {
		setOrderSummary: (state, action: PayloadAction<InitialStateType>) => {
			state.userId = action.payload.userId;
			state.productId = action.payload.productId;
			state.hasSku = action.payload.hasSku;
			state.variantId = action.payload.variantId;
			state.sizeId = action.payload.sizeId;
			state.quantity = action.payload.quantity;
			state.size = action.payload.size;
			state.productTitle = action.payload.productTitle;
			state.price = action.payload.price;
			state.discount = action.payload.discount;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOrderSummary } = orderSummarySlice.actions;

export default orderSummarySlice.reducer;
