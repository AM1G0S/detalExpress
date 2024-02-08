import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface applicationState {
	mainInput: number | string;
	delivery: string;
}

const initialState: applicationState = {
	mainInput: '',
	delivery: 'Москва'
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
			console.log(state.delivery)
		}
	},
});

export const {setMainInput, setDelivery} = applicationSlice.actions;

export default applicationSlice.reducer;
