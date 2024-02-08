import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface applicationState {
	mainInput?: number | string;
	delivery?: string;
	address?: string;
}

const initialState: applicationState = {
	mainInput: '',
	delivery: 'Москва',
	address: ''
};

export const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		setMainInput: (state, action: PayloadAction<applicationState>) => {
			state.mainInput = action.payload.mainInput;
		},
		setDelivery: (state, action: PayloadAction<applicationState>) => {
			state.delivery = action.payload.delivery;
		},
		setAddress: (state, action: PayloadAction<applicationState>) => {
			state.address = action.payload.address;
		},
	},
});

export const {setMainInput, setDelivery, setAddress} = applicationSlice.actions;

export default applicationSlice.reducer;
