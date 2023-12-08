import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	productInformation: {
		ownerId: null,
		title: null,
		price: null,
		hasSku: null,
		inStock: null,
		warranty: null,
		warrantyUnit: null,
		brand: null,
		madeIn: null,
		modelNo: null,
		modelYear: null,
		category: null,
		helmetType: null,
		isCertified: null,
		certificationName: null,
		quantity: null,
		forBike: null,
		description: null,
	},
	thumbnail: null,
	images: null,
};

export const listProductFormSlice = createSlice({
	name: 'list-product-form',
	initialState,
	reducers: {
		setProductInformation: (state, action: PayloadAction<any>) => {
			state.productInformation = action.payload;
		},
		setThumbnail: (state, action: PayloadAction<any>) => {
			state.thumbnail = action.payload;
		},
		setImages: (state, action: PayloadAction<any>) => {
			state.images = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setProductInformation, setImages, setThumbnail } = listProductFormSlice.actions;

export default listProductFormSlice.reducer;
