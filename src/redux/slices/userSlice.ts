import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userState {
	name?: string | null;
	email?: string | null;
	token?: string | null;
	id?: string | null;
}

const initialState: userState = {
	name: null,
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
		setUserName: (state, action: PayloadAction<userState>) => {
			state.name = action.payload.name;
		},
		removeUser: (state) => {
			state.name = null;
			state.email = null;
			state.token = null;
			state.id = null;
		},
	},
});

export const {setUser, removeUser, setUserName} = userSlice.actions;

export default userSlice.reducer;
