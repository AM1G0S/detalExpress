import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeUser, setUser} from "../redux/slices/userSlice.ts";
import {RootState} from "../redux/store.ts";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const useAuth = () => {
	const {email, token, id} = useSelector((state: RootState) => state.user);
	
	return {
		isAuth: !!email,
		email,
		token,
		id
	};
}

export const useAuthStateListener = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					// @ts-ignore
					token: user.accessToken,
				}));
			} else {
				dispatch(removeUser());
			}
		});
		
		return () => unsubscribe();
	}, [dispatch]);
	
	return null;
}

