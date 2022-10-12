import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	currentActiveMenu: 'home',
};

export const activeMenuSlice = createSlice({
	name: 'activeMenu',
	initialState,
	reducers: {
		setCurrentActiveMenu: (state, action: PayloadAction<any>) => {
			state.currentActiveMenu = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentActiveMenu } = activeMenuSlice.actions;

export default activeMenuSlice.reducer;
