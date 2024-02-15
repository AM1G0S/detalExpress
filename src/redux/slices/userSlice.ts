import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userState {
	email: string | null;
	token: string | null;
	id: string | null;
}

const initialState: userState = {
	email: null,
	token: null,
	id: null,
};

export const userSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<userState>) => {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
		},
		removeUser: (state) => {
			state.email = null;
			state.token = null;
			state.id = null;
		},
	},
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
