import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface applicationState {
	mainInput: number | string;
}

const initialState: applicationState = {
	mainInput: '',
};

export const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		setMainInput: (state, action: PayloadAction<applicationState>) => {
			state.mainInput = action.payload.mainInput;
			console.log(state.mainInput)
		},
	},
});

export const {setMainInput} = applicationSlice.actions;

export default applicationSlice.reducer;
