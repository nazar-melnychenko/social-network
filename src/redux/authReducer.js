import {authAPI} from "../api/api";

const init = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false
};

const authReducer = (state = init, action) => {

	switch (action.type) {

		case 'SET-USERS-DATA':
			return {
				...state,
				...action.data,
				isAuth: true
			};

		default:
			return state;
	};
};

const setAuthUsersData = (id, email, login) => ({type: 'SET-USERS-DATA', data: {id, email, login}});

/*---Thunk---*/

export const auth = () => (dispatch) => {
	authAPI.authMe()
		.then(respons => {
			if(respons.data.resultCode === 0) {
				let {id, email, login} = respons.data.data;
				dispatch(setAuthUsersData(id, email, login));
			}
		});
};

export default authReducer;