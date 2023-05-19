import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	user: {
		_id: '',
		firstname: '',
		lastname: '',
		phone: '',
	},
	token: null,
	roles: [],
	selectedRole: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
		},

		setToken: (state, action: PayloadAction<any>) => {
			state.token = action.payload;
		},

		setRoles: (state, action: PayloadAction<any>) => {
			state.roles = action.payload;
		},

		setSelectedRole: (state, action: PayloadAction<any>) => {
			state.selectedRole = action.payload;
		},

		logout: (state) => {
			state.user = {
				_id: '',
				firstname: '',
				lastname: '',
				phone: '',
			};
			state.token = null;
			state.roles = [];
			state.selectedRole = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, setToken, logout, setRoles, setSelectedRole } = authSlice.actions;

export default authSlice.reducer;
