import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	user: {
		uuid: '',
		name: '',
		email: '',
		phone: '',
	},
	token: null,
	refreshToken: null,
	roles: [],
	doctorList: [],
	clinicList: [],
	selectedDoctorUid: null,
	selectedClinicUid: null,
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

		setRefreshToken: (state, action: PayloadAction<any>) => {
			state.refreshToken = action.payload;
		},

		setRoles: (state, action: PayloadAction<any>) => {
			state.roles = action.payload;
		},

		setSelectedRole: (state, action: PayloadAction<any>) => {
			state.selectedRole = action.payload;
		},

		setDoctorList: (state, action: PayloadAction<any>) => {
			state.doctorList = action.payload;
		},

		setClinicList: (state, action: PayloadAction<any>) => {
			state.clinicList = action.payload;
		},

		setselectedClinicUid: (state, action: PayloadAction<any>) => {
			state.selectedClinicUid = action.payload;
		},

		setselectedDoctorUid: (state, action: PayloadAction<any>) => {
			state.selectedDoctorUid = action.payload;
		},

		logout: (state) => {
			state.user = {
				uuid: '',
				name: '',
				email: '',
				phone: '',
			};
			state.refreshToken = null;
			state.token = null;
			state.roles = [];
			state.doctorList = [];
			state.clinicList = [];
			state.selectedDoctorUid = null;
			state.selectedClinicUid = null;
			state.selectedRole = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setUser,
	setToken,
	setRefreshToken,
	logout,
	setRoles,
	setDoctorList,
	setClinicList,
	setselectedDoctorUid,
	setselectedClinicUid,
	setSelectedRole,
} = authSlice.actions;

export default authSlice.reducer;
