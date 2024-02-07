import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface paginationState {
	page: string;
}

const initialState: paginationState = {
	page: 'Главная'
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<paginationState>) => {
			state.page = action.payload.page;
		},
	},
});

export const {setCurrentPage} = paginationSlice.actions;

export default paginationSlice.reducer;
