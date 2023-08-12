import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
	userId: undefined | null | string;
	productId: undefined | null | string;
	hasSku: undefined | null | boolean;
	variantId: undefined | null | string;
	sizeId: undefined | null | string;
	quantity: undefined | null | number;
};
const initialState: InitialStateType = {
	userId: null,
	productId: null,
	hasSku: null,
	variantId: null,
	sizeId: null,
	quantity: null,
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
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOrderSummary } = orderSummarySlice.actions;

export default orderSummarySlice.reducer;
