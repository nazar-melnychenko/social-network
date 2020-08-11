import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const init = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
	captcha: null,
};

const authReducer = (state = init, action) => {

	switch (action.type) {
		case 'SET-USERS-DATA':
			return {
				...state,
				...action.payload,
			};
		case 'SET-CAPTCHA':
			return {
				...state,
				captcha: action.url,
			};

		default:
			return state;
	}
};

const setAuthUsersData = (id, email, login, isAuth, captcha) => ({
	type: 'SET-USERS-DATA',
	payload: {id, email, login, isAuth, captcha}
});
const setCaptcha = (url) => ({type: 'SET-CAPTCHA', url});

/*---Thunk---*/

export const auth = () => (dispatch) => {
	return authAPI.authMe()
		.then(responsee => {
			if (responsee.data.resultCode === 0) {
				let {id, email, login} = responsee.data.data;
				dispatch(setAuthUsersData(id, email, login, true, null));
			}
		});
};

const getCaptcha = (res) => (dispatch) => {
	const messages = res.data.messages.length > 0 ? res.data.messages[0] : "Error"
	authAPI.captcha()
		.then(responsee => {
			dispatch(stopSubmit("login", {_error: messages}));
			dispatch(setCaptcha(responsee.data.url));
		})
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
	authAPI.login(email, password, rememberMe, captcha)
		.then(responsee => {
			if (responsee.data.resultCode === 0) {
				dispatch(auth());
			} else if (responsee.data.resultCode === 10) {
				dispatch(getCaptcha(responsee));
			} else {
				const messages = responsee.data.messages.length > 0 ? responsee.data.messages[0] : "Error"
				dispatch(stopSubmit("login", {_error: messages}));
			}
		});
};

export const logout = () => (dispatch) => {
	authAPI.logout()
		.then(responsee => {
			if (responsee.data.resultCode === 0) {
				dispatch(setAuthUsersData(null, null, null, false));
			}
		});
};

export default authReducer;